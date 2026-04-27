'use client'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="relative w-full py-32 md:py-64 bg-hyde-bg overflow-hidden reveal">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LIJEVA STRANA: Tekst */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <span className="text-gold text-[10px] tracking-[0.8em] uppercase block mb-10 opacity-50 font-medium">
              Our Philosophy
            </span>
            
            <div className="mb-12">
              <h2 className="font-heading text-6xl md:text-8xl text-white italic lowercase leading-[0.8] tracking-tighter mb-2">
                botanical
              </h2>
              <h2 className="font-heading text-6xl md:text-8xl text-gold italic lowercase leading-[0.8] tracking-tighter ml-12 md:ml-20">
                noir
              </h2>
            </div>

            <div className="mt-8">
              {/* Ovdje je bio navodnik, sad je maknut za čišći izgled */}
              <p className="font-heading text-2xl md:text-3xl text-white/80 leading-[1.8] italic font-light tracking-wide max-w-xl">
                U HYDE-u vjerujemo da <span className="text-gold/90 font-medium">odsustvo svjetla</span> pojačava osjetila. 
                Naš kulinarski pristup fokusira se na teksturu, aromu i čistoću sezonskih sastojaka 
                u samom srcu Ljubuškog.
              </p>
            </div>

            <div className="mt-16 w-24 h-px bg-gradient-to-r from-gold/40 to-transparent"></div>
          </div>

          {/* DESNA STRANA: Slika */}
          <div className="order-1 lg:order-2">
            <div className="relative group mx-auto lg:ml-auto max-w-[600px]">
              <div className="absolute -inset-8 bg-[#0a2e1f]/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-[2.5s]"></div>
              
              <div className="relative aspect-[4/5] overflow-hidden border border-white/5 shadow-2xl">
                <Image 
                  src="/images/interijer2.webp" 
                  alt="HYDE Emerald Atmosphere" 
                  fill 
                  className="object-cover grayscale brightness-75 transition-all duration-[4s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.6)] pointer-events-none"></div>
              </div>

              <div className="absolute -bottom-6 -left-6 hidden md:block bg-[#070e08] border border-white/10 p-8 backdrop-blur-xl z-20">
                 <p className="text-gold text-[10px] tracking-[0.5em] uppercase font-light leading-relaxed">
                   Exclusive & <br />Nocturnal
                 </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}