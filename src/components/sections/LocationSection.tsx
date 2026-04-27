'use client'
import { Phone, MapPin, Clock, Utensils } from 'lucide-react'
import { CONTACT } from '@/lib/constants'

export default function LocationSection() {
  return (
    <section id="location" className="py-32 px-6 bg-hyde-bg overflow-hidden reveal">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">
          
          {/* LIJEVA STRANA: INFO */}
          <div className="space-y-16">
            <div>
              <span className="text-gold text-[10px] tracking-[0.8em] uppercase block mb-6 opacity-50 font-medium">
                The Venue
              </span>
              <h2 className="font-heading text-6xl md:text-8xl text-white mb-10 italic lowercase leading-none">
                Ljubuški
              </h2>
              <div className="flex items-start gap-4 text-white/40 group cursor-pointer hover:text-white transition-colors duration-500">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <p className="text-[11px] uppercase tracking-[0.25em] leading-relaxed font-light">
                  {CONTACT.address}
                </p>
              </div>
            </div>

            {/* RADNO VRIJEME - FIKSANO PORAVNANJE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 border-t border-white/5 pt-16">
              
              {/* BAR */}
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-gold opacity-50" />
                  <h4 className="text-gold text-[10px] uppercase tracking-[0.4em] font-medium">Bar</h4>
                </div>
                <ul className="text-[10px] uppercase tracking-[0.25em] text-white/30 space-y-5 font-light">
                  <li className="flex justify-between border-b border-white/10 pb-3">
                    <span>Pon - Pet</span> 
                    <span className="text-white tracking-widest font-medium">07:00 — 01:00</span>
                  </li>
                  <li className="flex justify-between border-b border-white/10 pb-3">
                    <span>Subota</span> 
                    <span className="text-white tracking-widest font-medium">08:00 — 01:00</span>
                  </li>
                  <li className="flex justify-between border-b border-white/10 pb-3">
                    <span>Nedjelja</span> 
                    <span className="text-white tracking-widest font-medium">12:00 — 00:00</span>
                  </li>
                </ul>
              </div>

              {/* KITCHEN */}
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <Utensils className="w-4 h-4 text-gold opacity-50" />
                  <h4 className="text-gold text-[10px] uppercase tracking-[0.4em] font-medium">Kitchen</h4>
                </div>
                <ul className="text-[10px] uppercase tracking-[0.25em] text-white/30 space-y-5 font-light">
                  <li className="flex justify-between border-b border-white/10 pb-3">
                    <span>Pon - Sub</span> 
                    <span className="text-white tracking-widest font-medium">15:00 — 23:00</span>
                  </li>
                  <li className="flex justify-between border-b border-white/10 pb-3">
                    <span>Nedjelja</span> 
                    <span className="text-white tracking-widest font-medium">12:00 — 23:00</span>
                  </li>
                  {/* Prazan red da Kitchen visinom odgovara Baru radi simetrije */}
                  <li className="flex justify-between border-b border-transparent pb-3">
                    <span className="opacity-0">.</span>
                    <span className="opacity-0">.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* KONTAKT BROJ */}
            <div className="pt-12 border-t border-white/5">
              <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="group flex flex-col gap-4">
                <span className="text-gold text-[10px] tracking-[0.5em] uppercase opacity-40">Direct Line</span>
                <span className="text-3xl md:text-5xl font-heading text-white group-hover:text-gold transition-all duration-700 tracking-tighter">
                  {CONTACT.phone}
                </span>
              </a>
            </div>
          </div>

          {/* DESNA STRANA: MAPA */}
          <div className="h-[500px] md:h-[750px] w-full relative border border-white/5 overflow-hidden group shadow-2xl">
            <iframe 
              src={CONTACT.googleMaps}
              width="100%" height="100%" style={{ border: 0 }} 
              allowFullScreen loading="lazy" 
              className="grayscale brightness-[0.5] contrast-[1.1] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[2s] ease-in-out"
            ></iframe>
            {/* Suptilni overlay preko mape */}
            <div className="absolute inset-0 pointer-events-none border-[1px] border-white/5 shadow-[inset_0_0_100px_rgba(0,0,0,0.4)]"></div>
          </div>

        </div>
      </div>
    </section>
  )
}