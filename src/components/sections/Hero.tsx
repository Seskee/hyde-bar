'use client'
import Image from 'next/image'

// 1. Dodajemo 'dict' prop i definiramo da očekuje 'subtitle' string
export default function Hero({ dict }: { dict: { subtitle: string } }) {
  return (
    <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden bg-hyde-bg">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/interijer1.webp"
          alt="HYDE Interior"
          fill
          priority
          className="object-cover brightness-[0.25] scale-105 animate-slow-zoom"
        />
        {/* Emerald Spotlight Glow */}
        <div className="absolute top-[-5%] right-[-5%] w-[60%] h-[60%] bg-hyde-emerald/40 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[50%] h-[50%] bg-[#15573a]/20 blur-[100px] rounded-full"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-hyde-bg"></div>
      </div>

      <div className="relative z-10 text-center flex flex-col items-center px-6">
        {/* LOGO KOJI DIŠE - animate-breathe dodan */}
        <div className="relative w-64 h-32 md:w-[550px] md:h-[280px] mb-4 animate-breathe">
          <Image 
            src="/images/logo.webp" 
            alt="HYDE Logo" 
            fill 
            className="object-contain mix-blend-screen"
          />
        </div>
        
        <div className="w-16 h-[1px] bg-linear-to-r from-transparent via-gold to-transparent my-8 opacity-40"></div>
        
        {/* 2. Ovdje ispisujemo tekst ovisno o jeziku */}
        <p className="font-sans text-[10px] md:text-[12px] text-gold tracking-[0.6em] md:tracking-[1.2em] uppercase font-light text-glint ml-[1.2em]">
          {dict.subtitle}
        </p>
      </div>

      {/* Indikator za skrol - Linija koja putuje prema dolje */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 overflow-hidden h-20 w-px bg-white/5">
        <div className="w-full h-1/2 bg-gold/60 animate-[scroll-line_2s_infinite]"></div>
      </div>
    </section>
  )
}