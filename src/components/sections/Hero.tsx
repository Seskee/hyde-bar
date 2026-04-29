'use client'
import Image from 'next/image'
import type { HeroDict } from '@/types'

export default function Hero({ dict }: { dict: HeroDict }) {
  return (
    <section className="relative w-full min-h-dvh flex items-center justify-center overflow-hidden bg-hyde-bg">
      <div className="absolute inset-0 z-0">
        
        {/* Čista slika interijera, bez pretjeranih zelenih filtera u kutovima */}
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
        
        {/* Lagani prijelaz na dnu koji stapa sliku u našu novu zelenu podlogu */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-hyde-bg pointer-events-none"></div>
      </div>
    
      {/* Središnji sadržaj */}
      <div className="relative z-10 text-center flex flex-col items-center px-6 py-20">
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
        
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent my-8 opacity-60"></div>
        
        <p className="font-sans text-[13px] md:text-[15px] text-[#c9a84c] tracking-[0.5em] md:tracking-[0.9em] uppercase font-light text-glint ml-[0.9em] opacity-90">
          {dict.subtitle}
        </p>
      </div>
      
      {/* Animirana zlatna linija za skrol */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 overflow-hidden h-20 w-px bg-white/10 pointer-events-none">
        <div className="w-full h-1/2 bg-[#c9a84c] opacity-80 animate-[scroll-line_2s_infinite]"></div>
      </div>
    </section>
  )
}