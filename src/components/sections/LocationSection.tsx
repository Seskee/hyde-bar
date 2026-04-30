'use client'
import { useState, useEffect, useRef } from 'react'
import { MapPin, Clock, Utensils, X, Navigation } from 'lucide-react'
import { CONTACT } from '@/lib/constants'
import type { LocationDict, ActionsDict } from '@/types'

export default function LocationSection({ dict, actionsDict }: { dict: LocationDict, actionsDict: ActionsDict }) {
  const [showMapMenu, setShowMapMenu] = useState(false)
  const [isMapVisible, setIsMapVisible] = useState(false)
  const mapContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // FIX: Koristimo stabilnu CSS klasu umjesto inline stila
    if (showMapMenu) document.body.classList.add('no-scroll')
    else document.body.classList.remove('no-scroll')
    return () => document.body.classList.remove('no-scroll')
  }, [showMapMenu])


  // STRICT LAZY LOAD: Promatramo kada će sekcija ući u ekran
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMapVisible(true)
          observer.disconnect() // Prekidamo promatranje čim učitamo kartu
        }
      },
      // Učitaj mapu kada je 300px blizu ekrana
      { rootMargin: '300px' }
    )

    if (mapContainerRef.current) observer.observe(mapContainerRef.current)
    return () => observer.disconnect()
  }, [])

  const encodedAddress = encodeURIComponent(CONTACT.address)
  const appleMapsLink = `https://maps.apple.com/?q=${encodedAddress}`

  return (
    <>
      <section id="location" className="py-16 md:py-24 px-6 bg-hyde-bg overflow-hidden reveal relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">

            {/* INFO DIO */}
            <div className="space-y-16">
              <div>
                <span className="text-gold text-sm tracking-widest uppercase block mb-6 opacity-85 font-medium">{dict.badge}</span>
                <h2 className="font-heading text-6xl md:text-8xl text-white mb-10 italic lowercase leading-none">{dict.title}</h2>
                <div className="flex items-start gap-4 text-white/70 group">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <a 
                    href={CONTACT.googleMapsPin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm uppercase tracking-widest leading-relaxed font-normal border-b border-transparent hover:border-gold/30 hover:text-white pb-1 transition-all"
                  >
                    {CONTACT.address}
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 border-t border-white/10 pt-16">
                <div className="space-y-8">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-gold opacity-80" />
                    <h3 className="text-gold text-sm uppercase tracking-widest font-medium">{dict.barTitle}</h3>
                  </div>
                  <ul className="text-sm uppercase tracking-wider text-white/70 space-y-5 font-normal">
                    <li className="flex justify-between border-b border-white/10 pb-3"><span>{dict.monFri}</span><span className="text-white tracking-widest font-medium">07:00 — 01:00</span></li>
                    <li className="flex justify-between border-b border-white/10 pb-3"><span>{dict.saturday}</span><span className="text-white tracking-widest font-medium">08:00 — 01:00</span></li>
                    <li className="flex justify-between border-b border-white/10 pb-3"><span>{dict.sunday}</span><span className="text-white tracking-widest font-medium">12:00 — 00:00</span></li>
                  </ul>
                </div>
                <div className="space-y-8">
                  <div className="flex items-center gap-3">
                    <Utensils className="w-4 h-4 text-gold opacity-80" />
                    <h4 className="text-gold text-sm uppercase tracking-widest font-medium">{dict.kitchenTitle}</h4>
                  </div>
                  <ul className="text-sm uppercase tracking-wider text-white/70 space-y-5 font-normal">
                    <li className="flex justify-between border-b border-white/10 pb-3"><span>{dict.monSat}</span><span className="text-white tracking-widest font-medium">15:00 — 23:00</span></li>
                    <li className="flex justify-between border-b border-white/10 pb-3"><span>{dict.sunday}</span><span className="text-white tracking-widest font-medium">12:00 — 23:00</span></li>
                  </ul>
                </div>
              </div>

              <div className="pt-12 border-t border-white/10">
                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="group flex flex-col gap-4">
                  <span className="text-gold text-sm tracking-widest uppercase opacity-70 font-medium">{dict.directLine}</span>
                  <span className="text-3xl md:text-5xl font-heading text-white group-hover:text-gold transition-all duration-700 tracking-tighter">{CONTACT.phone}</span>
                </a>
              </div>
            </div>

            {/* KARTA DIO */}
            <div ref={mapContainerRef} className="h-[500px] md:h-[750px] w-full relative border border-white/10 overflow-hidden group shadow-2xl bg-hyde-bg flex items-center justify-center">
              
              {/* Renderira Iframe samo ako je vidljiv korisniku */}
              {isMapVisible ? (
                <iframe 
                  src={CONTACT.googleMapsEmbed} 
                  title="HYDE bar & dine lokacija" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade" 
                  className="absolute inset-0 w-full h-full opacity-80 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none" 
                />
              ) : (
                <div className="absolute inset-0 bg-white/5 animate-pulse" />
              )}
              
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  onClick={() => setShowMapMenu(true)}
                  className="bg-[#08120a]/90 border border-gold/40 backdrop-blur-md px-8 py-4 flex items-center gap-3 transform group-hover:scale-110 transition-all duration-500 hover:border-gold/80 cursor-pointer shadow-xl z-10"
                >
                  <Navigation className="w-4 h-4 text-gold" />
                  <span className="text-gold text-sm uppercase tracking-widest font-medium">{actionsDict.navigate}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP MODAL OSTANAK ISTI */}
      <div 
        style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          zIndex: 999999, display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '1.5rem', opacity: showMapMenu ? 1 : 0, visibility: showMapMenu ? 'visible' : 'hidden',
          pointerEvents: showMapMenu ? 'auto' : 'none', transition: 'all 0.4s ease-out'
        }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(7, 14, 8, 0.9)', backdropFilter: 'blur(8px)' }} onClick={() => setShowMapMenu(false)} />
        
        <div className="relative w-full max-w-sm bg-hyde-bg border border-white/20 p-8 shadow-2xl rounded-sm transition-all duration-400" style={{ transform: showMapMenu ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)' }}>
          <button onClick={() => setShowMapMenu(false)} className="absolute top-4 right-4 text-white/50 hover:text-gold transition-colors p-2 cursor-pointer z-10">
            <X size={24} strokeWidth={1.5} />
          </button>
          
          <div className="text-center mb-8 mt-2">
            <MapPin className="w-8 h-8 text-gold mx-auto mb-4 opacity-100" />
            <h3 className="font-heading text-3xl text-white italic">{actionsDict.openInApp}</h3>
            <p className="text-sm text-white/60 uppercase tracking-widest mt-3 font-normal">{actionsDict.chooseMap}</p>
          </div>
          
          <div className="space-y-4 relative z-10">
            <a href={CONTACT.googleMapsPin} target="_blank" rel="noopener noreferrer" className="block w-full text-center border border-white/20 hover:border-gold bg-transparent hover:bg-[#112F1D] py-5 transition-all duration-300">
              <span className="text-sm text-white uppercase tracking-widest font-medium">Google Maps</span>
            </a>
            <a href={appleMapsLink} target="_blank" rel="noopener noreferrer" className="block w-full text-center border border-white/20 hover:border-gold bg-transparent hover:bg-[#112F1D] py-5 transition-all duration-300">
              <span className="text-sm text-white uppercase tracking-widest font-medium">Apple Maps</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}