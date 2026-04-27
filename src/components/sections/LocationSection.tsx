'use client'
import { Phone, MapPin, Clock, Utensils } from 'lucide-react'
import { CONTACT } from '@/lib/constants'

export default function LocationSection() {
  return (
    <section id="location" className="py-32 px-6 bg-hyde-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* INFO STRANA */}
          <div className="space-y-16">
            <div>
              <span className="text-gold text-[10px] tracking-[0.5em] uppercase block mb-4">Find Us</span>
              <h2 className="font-heading text-5xl md:text-6xl text-white mb-8 italic">Ljubuški</h2>
              <div className="flex items-center gap-4 text-white/60 hover:text-gold transition-colors cursor-pointer group">
                <MapPin className="w-5 h-5 text-gold" />
                <p className="text-[10px] uppercase tracking-[0.2em]">{CONTACT.address}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* RADNO VRIJEME BARA */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-4 h-4 text-gold" />
                  <h4 className="text-gold text-[10px] uppercase tracking-[0.3em]">Bar Hours</h4>
                </div>
                <ul className="text-[10px] uppercase tracking-[0.2em] text-white/50 space-y-3">
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>Pon - Pet</span> <span className="text-white">07:00 - 01:00</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>Subota</span> <span className="text-white">08:00 - 01:00</span></li>
                  <li className="flex justify-between"><span>Nedjelja</span> <span className="text-white">12:00 - 00:00</span></li>
                </ul>
              </div>

              {/* RADNO VRIJEME KUHINJE */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Utensils className="w-4 h-4 text-gold" />
                  <h4 className="text-gold text-[10px] uppercase tracking-[0.3em]">Kitchen</h4>
                </div>
                <ul className="text-[10px] uppercase tracking-[0.2em] text-white/50 space-y-3">
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>Pon - Sub</span> <span className="text-white">15:00 - 23:00</span></li>
                  <li className="flex justify-between"><span>Nedjelja</span> <span className="text-white">12:00 - 23:00</span></li>
                </ul>
              </div>
            </div>

            {/* KONTAKT / REZERVACIJE (Iako nema gumba, broj mora biti tu) */}
            <div className="pt-8">
              <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="inline-flex flex-col group">
                <span className="text-gold text-[10px] tracking-[0.3em] uppercase mb-2">Reservations & Info</span>
                <span className="text-2xl md:text-3xl text-white font-heading group-hover:text-gold transition-all">{CONTACT.phone}</span>
              </a>
            </div>
          </div>

          {/* GOOGLE MAPS STRANA */}
          <div className="h-[500px] w-full relative border border-white/5 grayscale-[0.8] hover:grayscale-0 transition-all duration-1000">
            <iframe 
              src={CONTACT.googleMaps}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="opacity-60"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  )
}