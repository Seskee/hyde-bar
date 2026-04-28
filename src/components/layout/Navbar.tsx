'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import type { NavbarDict } from '@/types'

export default function Navbar({ dict }: { dict: NavbarDict }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)
  const [isHidden, setIsHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const pathname = usePathname()
  const router = useRouter()
  const segments = pathname.split('/')
  const currentLocale = segments[1] || 'hr'

  // Bulletproof logika za praćenje skrolanja (sve unutar komponente)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // 1. Jesmo li na samom vrhu?
      setIsAtTop(currentScrollY < 50)
      
      // 2. Skrivamo navbar samo ako idemo dolje, nismo na vrhu i meni nije otvoren
      if (currentScrollY > lastScrollY && currentScrollY > 100 && !isOpen) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, isOpen])

  // Zaključavanje skrolanja kad je meni otvoren
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleNavClick = () => {
    setIsOpen(false)
  }

  const handleLocaleChange = (newLocale: string) => {
    const newSegments = [...segments]
    newSegments[1] = newLocale
    router.push(newSegments.join('/'))
  }

  return (
    <>
      {/* POPRAVAK 1: Tvrdi z-[110] koji garantira da je iznad Hero sekcije! 
        POPRAVAK 2: Koristi se isHidden state koji smo gore izračunali.
      */}
      <nav className={`fixed top-0 w-full z-[110] transition-all duration-700 ease-in-out border-b 
        ${isHidden ? '-translate-y-full' : 'translate-y-0'} 
        ${isAtTop && !isOpen ? 'bg-transparent border-transparent py-8' : 'bg-hyde-bg/95 backdrop-blur-xl border-white/5 py-4'}`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          
          {/* DESKTOP LINKS - LIJEVO */}
          <div className="hidden md:flex flex-1 justify-start gap-12 text-[10px] uppercase tracking-[0.5em] text-white/40 font-light">
            <Link href={`/${currentLocale}/menu`} className="hover:text-gold transition-all duration-300 link-underline">{dict.menu}</Link>
            <Link href={`/${currentLocale}/#gallery`} onClick={handleNavClick} className="hover:text-gold transition-all duration-300 link-underline">{dict.gallery}</Link>
          </div>

          {/* LOGO (Centriran) */}
          <Link href={`/${currentLocale}`} onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="relative shrink-0 w-32 h-10 md:w-52 md:h-16 transition-transform duration-700 hover:scale-105">
            <Image src="/images/logo.webp" alt="HYDE" fill sizes="(max-width: 768px) 128px, 208px" className="object-contain mix-blend-screen" priority />
          </Link>

          {/* DESKTOP LINKS - DESNO */}
          <div className="hidden md:flex flex-1 justify-end gap-12 text-[10px] uppercase tracking-[0.5em] text-white/40 font-light items-center">
            <Link href={`/${currentLocale}/#about`} onClick={handleNavClick} className="hover:text-gold transition-all duration-300 link-underline">{dict.philosophy}</Link>
            <Link href={`/${currentLocale}/#location`} onClick={handleNavClick} className="hover:text-gold transition-all duration-300 link-underline">{dict.contact}</Link>
            
            {/* Language Switcher */}
            <div className="flex gap-3 pl-8 border-l border-white/10">
              {['hr', 'en', 'de', 'it'].map((lang) => (
                <button 
                  key={lang} 
                  onClick={() => handleLocaleChange(lang)} 
                  className={`hover:text-gold transition-colors uppercase ${lang === currentLocale ? 'text-gold font-medium' : ''}`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* MOBILE TOGGLE - Tvrdi z-[120] da X gumb uvijek bude iznad overlay-a */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label={isOpen ? 'Zatvori meni' : 'Otvori meni'} 
            className="md:hidden text-gold p-2 relative z-[120]"
          >
            {isOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY - Tvrdi z-[105] */}
      <div 
        id="mobile-menu" 
        role="dialog" 
        aria-modal="true" 
        className={`fixed inset-0 w-full h-dvh bg-hyde-bg z-[105] flex flex-col items-center justify-center transition-all duration-700 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <div className="flex flex-col items-center gap-12 text-center">
          <Link href={`/${currentLocale}/menu`} onClick={handleNavClick} className="text-[18px] uppercase tracking-[0.8em] text-white/80 hover:text-gold transition-all">{dict.menu}</Link>
          <Link href={`/${currentLocale}/#gallery`} onClick={handleNavClick} className="text-[18px] uppercase tracking-[0.8em] text-white/80 hover:text-gold transition-all">{dict.gallery}</Link>
          <Link href={`/${currentLocale}/#about`} onClick={handleNavClick} className="text-[18px] uppercase tracking-[0.8em] text-white/80 hover:text-gold transition-all">{dict.philosophy}</Link>
          <Link href={`/${currentLocale}/#location`} onClick={handleNavClick} className="text-[18px] uppercase tracking-[0.8em] text-white/80 hover:text-gold transition-all">{dict.contact}</Link>
          
          <div className="flex gap-6 mt-8 pt-8 border-t border-white/10 text-[14px] uppercase tracking-[0.5em]">
            {['hr', 'en', 'de', 'it'].map((lang) => (
              <button 
                key={lang} 
                onClick={() => handleLocaleChange(lang)} 
                className={`transition-colors ${lang === currentLocale ? 'text-gold font-medium' : 'text-white/40'}`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}