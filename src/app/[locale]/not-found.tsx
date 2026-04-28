import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-dvh bg-hyde-bg flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-gold text-[10px] tracking-[0.8em] uppercase mb-8 opacity-50">
          404
        </p>
        <h1 className="font-heading text-[8rem] md:text-[14rem] text-white italic lowercase leading-none tracking-tighter mb-8">
          not found
        </h1>
        <p className="text-white/30 text-[11px] uppercase tracking-[0.4em] mb-16 font-light">
          The page you are looking for does not exist
        </p>
        <Link 
          href="/"
          className="inline-flex items-center gap-4 group border border-gold/30 hover:border-gold/60 px-10 py-5 transition-all duration-500"
        >
          <span className="text-[10px] text-gold uppercase tracking-[0.4em] transition-colors">
            Return Home
          </span>
          <div className="w-8 h-px bg-gold/40 group-hover:bg-gold transition-colors"></div>
        </Link>
      </div>
    </main>
  )
}