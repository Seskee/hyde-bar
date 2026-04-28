'use client'
import { useEffect, useState } from 'react'
import { Phone, MapPin } from 'lucide-react'
import { CONTACT } from '@/lib/constants'

export function MobileActions() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileScreen, setIsMobileScreen] = useState(false)

  useEffect(() => {
    // Detekcija mobitela (radi i u Firefox RDM)
    const handleResize = () => setIsMobileScreen(window.innerWidth < 768)
    handleResize() 
    window.addEventListener('resize', handleResize)

    let rafId: number
    
    const checkScroll = () => {
      // FIREFOX FIX: Firefox nekad ignorira window.scrollY u emulatoru, 
      // pa mu dajemo document.documentElement.scrollTop kao alternativu
      const scrollY = window.scrollY || document.documentElement.scrollTop || 0
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight
      
      const maxScroll = docHeight - winHeight
      
      // FIREFOX FIX #2: Zbog decimalnog računanja piksela u Firefoxu, 
      // marginu za dno smo povećali na 200px da sigurno nestane pred footerom
      if (scrollY > 100 && scrollY < (maxScroll - 200)) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
      
      rafId = requestAnimationFrame(checkScroll)
    }
    
    rafId = requestAnimationFrame(checkScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(rafId)
    }
  }, [])

  if (!isMobileScreen) return null

  return (
    <div 
      className="fixed left-0 w-full flex justify-center px-4 z-[9999999]"
      style={{ 
        bottom: 'max(30px, env(safe-area-inset-bottom))',
        transform: isVisible ? 'translateY(0)' : 'translateY(150px)',
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
        // Malo brža tranzicija da izgleda fluidnije
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' 
      }}
    >
      <div className="bg-[#0f0f0f]/90 backdrop-blur-xl border border-gold/50 rounded-full flex w-full max-w-[340px] shadow-[0_10px_40px_rgba(0,0,0,0.9)] overflow-hidden">
        
        <a 
          href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} 
          className="flex-1 flex items-center justify-center gap-2 py-4 text-[#d4af37] border-r border-gold/30 text-[12px] font-bold uppercase tracking-widest active:bg-white/10 transition-colors"
        >
          <Phone size={16} /> Rezerviraj
        </a>
        
        <a 
          href={CONTACT.googleMapsPin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex-1 flex items-center justify-center gap-2 py-4 text-white text-[12px] font-bold uppercase tracking-widest active:bg-white/10 transition-colors"
        >
          <MapPin size={16} className="text-[#d4af37]" /> Lokacija
        </a>
        
      </div>
    </div>
  )
}