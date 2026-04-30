import Link from 'next/link'
import MagneticWrapper from '@/components/ui/MagneticWrapper'

export default function NotFound() {
  return (
    <main className="min-h-dvh bg-hyde-bg flex items-center justify-center px-6">
      <div className="text-center">
        {/* FIX: text-xs, text-gold */}
        <p className="text-gold text-xs tracking-widest uppercase mb-8 opacity-70">
          404
        </p>
        <h1 className="font-heading text-[8rem] md:text-[14rem] text-white italic lowercase leading-none tracking-tighter mb-8">
          not found
        </h1>
        {/* FIX: text-white/60, text-sm umjesto 11px */}
        <p className="text-white/60 text-sm uppercase tracking-widest mb-16 font-light">
          The page you are looking for does not exist
        </p>
        <MagneticWrapper>
          <Link 
            href="/"
            className="inline-flex items-center gap-4 group border border-gold/50 hover:border-gold px-10 py-5 transition-all duration-500"
          >
            <span className="text-sm text-gold uppercase tracking-widest transition-colors">
              Return Home
            </span>
            <div className="w-8 h-px bg-gold/40 group-hover:bg-gold transition-colors"></div>
          </Link>
        </MagneticWrapper>
      </div>
    </main>
  )
}