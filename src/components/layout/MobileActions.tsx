'use client'
import { useEffect, useState } from 'react'
import { Phone, MapPin } from 'lucide-react'
import { CONTACT } from '@/lib/constants'
import type { ActionsDict } from '@/types'

export function MobileActions({ dict }: { dict: ActionsDict }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileScreen, setIsMobileScreen] = useState(false)

  useEffect(() => {
    let ticking = false

    const updateDimensions = () => {
      setIsMobileScreen(window.innerWidth < 768)
    }

    // Okini jednom odmah i slušaj promjenu veličine ekrana
    updateDimensions()
    window.addEventListener('resize', updateDimensions, { passive: true })

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || document.documentElement.scrollTop || 0
          
          // FIX: Čitamo stvarnu visinu DOM-a svaki put kad se skrola 
          // (Zato što slike/fontovi mogu naknadno promijeniti visinu stranice)
          const docHeight = document.documentElement.scrollHeight
          const winHeight = window.innerHeight
          const maxScroll = docHeight - winHeight

          // Pokazuje se ako smo skrolali 100px prema dolje
          // Skriva se na samom kraju stranice (zadnjih 100px) da ne prekrije Footer
          if (scrollY > 100 && scrollY < maxScroll - 100) {
            setIsVisible(true)
          } else {
            setIsVisible(false)
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Okini provjeru inicijalno za slučaj da korisnik refresha stranicu na pola skrola
    handleScroll()

    return () => {
      window.removeEventListener('resize', updateDimensions)
      window.removeEventListener('scroll', handleScroll)
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
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div className="bg-[#0f0f0f]/90 backdrop-blur-xl border border-[#c9a84c]/50 rounded-full flex w-full max-w-[340px] shadow-[0_10px_40px_rgba(0,0,0,0.9)] overflow-hidden">
        <a
          href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
          className="flex-1 flex items-center justify-center gap-2 py-4 text-[#d4af37] border-r border-[#c9a84c]/30 text-xs font-bold uppercase tracking-widest active:bg-white/10 transition-colors"
        >
          <Phone size={15} /> {dict.call}
        </a>

        <a
          href={CONTACT.googleMapsPin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-white text-xs font-bold uppercase tracking-widest active:bg-white/10 transition-colors"
        >
          <MapPin size={16} className="text-[#d4af37]" /> {dict.location}
        </a>
      </div>
    </div>
  )
}