'use client'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden bg-[#070e08]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/interijer1.webp"
          alt="HYDE Interior"
          fill
          priority
          className="object-cover brightness-[0.25] scale-105 animate-slow-zoom"
        />
        {/* Zeleni spotlight - Emerald Glow */}
        <div className="absolute top-[-5%] right-[-5%] w-[60%] h-[60%] bg-[#0a2e1f]/40 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[50%] h-[50%] bg-[#15573a]/20 blur-[100px] rounded-full"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070e08]"></div>
      </div>

      <div className="relative z-10 text-center flex flex-col items-center px-6">
        <div className="relative w-64 h-32 md:w-[550px] md:h-[280px] mb-4 animate-pulse duration-[4000ms]">
          <Image 
            src="/images/logo.webp" 
            alt="HYDE Logo" 
            fill 
            className="object-contain mix-blend-screen"
          />
        </div>
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent my-8 opacity-50"></div>
        <p className="font-sans text-[10px] md:text-[12px] text-gold tracking-[0.6em] md:tracking-[1em] uppercase font-light text-glint">
          Ljubuški • Culinary Excellence
        </p>
      </div>

      {/* Scroll Down Line */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 overflow-hidden h-24 w-px bg-white/5">
        <div className="w-full h-1/2 bg-gold animate-[scroll-line_2s_infinite]"></div>
      </div>
    </section>
  )
}