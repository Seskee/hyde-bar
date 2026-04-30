'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { HeroDict } from '@/types'

export default function Hero({ dict }: { dict: HeroDict }) {
  const pathname = usePathname()
  const currentLocale = pathname.split('/')[1] || 'hr'

  return (
    <section className="relative w-full min-h-dvh flex items-center justify-center overflow-hidden bg-hyde-bg">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/interijer1.webp"
          alt="HYDE Interior"
          fill
          priority
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          // FIX: Uklonjen brightness-[0.55] zbog loših performansi pri animaciji
          className="object-cover animate-slow-zoom"
        />
        {/* FIX: GPU-friendly zatamnjenje u zasebnom layeru */}
        <div className="absolute inset-0 bg-black/45 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-hyde-bg pointer-events-none" />
      </div>

      <div className="relative z-10 text-center flex flex-col items-center px-6 py-20">
        <div className="relative w-64 h-32 md:w-[500px] md:h-[250px] mb-4 animate-breathe">
          <Image src="/images/logo.webp" alt="HYDE Logo" fill priority sizes="(max-width: 768px) 256px, 500px" className="object-contain mix-blend-screen" />
        </div>

        <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent my-8 opacity-60" />

        <p className="font-sans text-sm md:text-base text-gold tracking-widest uppercase font-light text-glint opacity-90">
          {dict.subtitle}
        </p>

        <div className="mt-16 md:mt-24 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 relative z-20">
          {/* FIX: Primarni CTA gumb je sada ispunjen (solid bg) za jasnu vidljivost */}
          <a
            href="#location"
            className="hidden md:inline-flex items-center justify-center gap-4 group bg-gold hover:bg-gold-light px-14 py-5 min-w-[260px] transition-all duration-500 shadow-xl"
          >
            <span className="text-xs text-hyde-bg uppercase tracking-widest font-bold transition-colors">
              {dict.cta}
            </span>
          </a>

          <Link
            href={`/${currentLocale}/menu`}
            className="group flex items-center justify-center gap-3 border border-gold/40 hover:border-gold/80 bg-[#0b2113]/50 backdrop-blur-md px-12 py-5 min-w-[220px] md:min-w-[260px] shadow-lg transition-all duration-500"
          >
            <span className="text-xs text-white/90 group-hover:text-gold uppercase tracking-widest font-medium transition-colors">
              {dict.menuCta}
            </span>
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 overflow-hidden h-16 w-px bg-white/10 pointer-events-none">
        <div className="w-full h-1/2 bg-[#c9a84c] opacity-80 animate-[scroll-line_2s_infinite]" />
      </div>
    </section>
  )
}