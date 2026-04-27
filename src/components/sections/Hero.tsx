'use client'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden bg-hyde-bg">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/interijer1.webp"
          alt="HYDE Interior"
          fill
          priority
          className="object-cover brightness-[0.35] scale-105"
        />
        {/* Zeleni spotlight efekt desno gore i lijevo dolje kao na slikama */}
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-hyde-emerald/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-hyde-emerald-light/10 blur-[100px] rounded-full"></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-hyde-bg/20 to-hyde-bg"></div>
      </div>

      <div className="relative z-10 text-center flex flex-col items-center">
        <div className="relative w-64 h-32 md:w-[500px] md:h-[250px] mb-4">
          <Image 
            src="/images/logo.webp" 
            alt="HYDE Logo" 
            fill 
            className="object-contain"
          />
        </div>
        <p className="font-sans text-xs md:text-sm text-gold tracking-[0.5em] uppercase opacity-80 mt-[-20px] text-glow-gold">
          Varaždin • Culinary Excellence
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
      </div>
    </section>
  )
}