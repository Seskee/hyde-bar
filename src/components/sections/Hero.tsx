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
          className="object-cover brightness-[0.3] scale-105 animate-slow-zoom"
        />
        {/* Zeleni spotlight efekti */}
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#0a2e1f]/30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#15573a]/20 blur-[100px] rounded-full"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070e08]"></div>
      </div>

      <div className="relative z-10 text-center flex flex-col items-center px-6">
        <div className="relative w-64 h-32 md:w-[500px] md:h-[250px] mb-4">
          <Image 
            src="/images/logo.webp" 
            alt="HYDE Logo" 
            fill 
            className="object-contain mix-blend-screen"
          />
        </div>
        <div className="w-12 h-px bg-gold/50 my-6"></div>
        <p className="font-sans text-[9px] md:text-[11px] text-gold tracking-[0.4em] md:tracking-[0.8em] uppercase opacity-80 font-light text-glow-gold">
          Ljubuški • Culinary Excellence
        </p>
      </div>
    </section>
  )
}