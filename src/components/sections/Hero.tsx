'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { HeroDict } from '@/types'
import { CONTACT } from '@/lib/constants'

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
          className="object-cover brightness-[0.55] animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-hyde-bg pointer-events-none" />
      </div>

      <div className="relative z-10 text-center flex flex-col items-center px-6 py-20">
        
        {/* LOGO */}
        <div className="relative w-64 h-32 md:w-[550px] md:h-[280px] mb-4 animate-breathe">
          <Image
            src="/images/logo.webp"
            alt="HYDE Logo"
            fill
            priority
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 768px) 256px, 550px"
            className="object-contain mix-blend-screen"
          />
        </div>

        <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent my-8 opacity-60" />

        <p className="font-sans text-[13px] md:text-[15px] text-[#c9a84c] tracking-[0.5em] md:tracking-[0.9em] uppercase font-light text-glint ml-[0.9em] opacity-90">
          {dict.subtitle}
        </p>

        {/* CTA GUMBI */}
        <div className="mt-16 md:mt-24 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 relative z-20">
          
          {/* DESKTOP: Gumb Rezerviraj (vidljiv samo na velikim ekranima) */}
          <a
            href="#location"
            className="
              hidden md:inline-flex items-center justify-center gap-4
              group
              border border-gold/40 hover:border-gold/80
              bg-[#0b2113]/30 backdrop-blur-sm
              px-14 py-5 min-w-[260px]
              transition-all duration-500 shadow-xl
            "
          >
            <span className="text-[11px] text-white/90 group-hover:text-gold uppercase tracking-[0.4em] font-medium transition-colors">
              {dict.cta}
            </span>
            <div className="w-8 h-px bg-gold/40 group-hover:w-10 group-hover:bg-gold transition-all duration-500" />
          </a>

          {/* JELOVNIK GUMB: Na mobitelu je stakleni okvir, na desktopu je diskretni link */}
          <Link
            href={`/${currentLocale}/menu`}
            className="
              group flex items-center justify-center gap-3
              border border-gold/40 md:border-transparent md:border-b hover:border-gold/80 md:hover:border-gold/30
              bg-[#0b2113]/30 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none
              px-12 py-5 md:px-0 md:py-0 min-w-[220px] md:min-w-0
              shadow-lg md:shadow-none
              transition-all duration-500
            "
          >
            <span className="text-[11px] md:text-[11px] text-white/90 md:text-white/60 group-hover:text-gold uppercase tracking-[0.4em] font-medium transition-colors md:pb-1">
              {dict.menuCta}
            </span>
            {/* Tanka crta pored teksta, vidljiva samo na mobitelu da oponaša gumb "Rezerviraj" s desktopa */}
            <div className="w-6 h-px bg-gold/40 group-hover:w-8 group-hover:bg-gold transition-all duration-500 md:hidden" />
          </Link>
        </div>
      </div>

      {/* Animirana zlatna linija na dnu ekrana */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 overflow-hidden h-16 w-px bg-white/10 pointer-events-none">
        <div className="w-full h-1/2 bg-[#c9a84c] opacity-80 animate-[scroll-line_2s_infinite]" />
      </div>
    </section>
  )}