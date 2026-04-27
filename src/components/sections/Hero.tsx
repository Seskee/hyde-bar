import Image from 'next/image'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/interijer1.webp" // Pazi da u public/images/ staviš svoju sliku pod ovim imenom
          alt="HYDE Bar & Dine Interior"
          fill
          priority
          className="object-cover object-center opacity-60"
          sizes="100vw"
        />
        {/* Gradient Overlay za čitljivost teksta */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/40 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto mt-24">
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-gold mb-8 max-w-4xl mx-auto drop-shadow-2xl">
          A Culinary Escape
        </h1>
        <p className="font-sans text-lg md:text-xl text-text-primary/80 max-w-xl mx-auto mb-12 font-light">
          Where botanical noir meets gastronomic artistry. An immersive dining experience in the heart of Varaždin.
        </p>
        <button className="inline-flex items-center justify-center text-xs tracking-[0.2em] uppercase text-gold border border-gold/30 px-10 py-5 hover:bg-gold/10 hover:border-gold transition-all duration-300 bg-[var(--bg-primary)]/50 backdrop-blur-sm">
          Explore the Menu
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-pulse opacity-50">
        <span className="text-[10px] tracking-[0.2em] uppercase text-gold">DISCOVER</span>
        <ArrowDown className="text-gold w-5 h-5" />
      </div>
    </section>
  )
}