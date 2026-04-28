'use client'
import Image from 'next/image'

export default function About({ dict }: { dict: any }) {
  const description = dict.description
  const highlight = dict.highlight // ← ISPRAVKA: više nije hardcoded hrvatska fraza
  const parts = highlight ? description.split(highlight) : [description, '']

  return (
    <section id="about" className="relative w-full py-32 md:py-64 bg-hyde-bg overflow-hidden reveal">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          {/* TEKST SEKCIJA */}
          <div className="flex flex-col justify-center order-1">
            <span className="text-gold text-[10px] tracking-[0.8em] uppercase block mb-10 opacity-50 font-medium text-center lg:text-left">
              {dict.badge}
            </span>
            
            <div className="mb-14 text-center lg:text-left">
              <h2 className="font-heading text-6xl md:text-[7rem] text-white italic lowercase leading-[0.7] tracking-tighter mb-4">
                {dict.title1}
              </h2>
              <h2 className="font-heading text-6xl md:text-[7rem] text-gold italic lowercase leading-[0.7] tracking-tighter ml-12 md:ml-24">
                {dict.title2}
              </h2>
            </div>

            <div className="mt-8 text-center lg:text-left">
              <p className="font-heading text-2xl md:text-4xl text-white/80 leading-[1.6] italic font-light tracking-wide max-w-xl mx-auto lg:mx-0">
                {parts[0]}
                {highlight && (
                  <span className="text-gold/90 font-medium border-b border-gold/20 pb-1">
                    {highlight}
                  </span>
                )}
                {parts[1]}
              </p>
            </div>

            <div className="mt-20 w-32 h-px bg-linear-to-r from-gold/60 to-transparent mx-auto lg:mx-0"></div>
          </div>

          {/* SLIKA SEKCIJA */}
          <div className="order-2">
            <div className="relative group mx-auto lg:ml-auto max-w-137.5">
              <div className="absolute -inset-10 bg-hyde-emerald/40 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-[3s]"></div>
              
              <div className="relative aspect-3/4 md:aspect-4/5 overflow-hidden border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <Image 
                  src="/images/interijer2.webp" 
                  alt="HYDE Interior" 
                  fill 
                  className="object-cover transition-all duration-[4s] scale-105 md:scale-100 md:grayscale brightness-100 md:brightness-90 group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-100"
                />
              </div>

              <div className="absolute -bottom-8 -left-8 hidden lg:block bg-hyde-bg/90 border border-white/10 p-10 backdrop-blur-2xl z-20 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-1000">
                 <p className="text-gold text-[10px] tracking-[0.6em] uppercase font-light leading-relaxed text-center whitespace-pre-line">
                   {dict.privateSelection.replace(' ', '\n')}
                 </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}