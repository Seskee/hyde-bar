'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { usePathname, useRouter } from 'next/navigation'
import type { NavbarDict } from '@/types'

export default function Navbar({ dict }: { dict: NavbarDict }) {
  const [isOpen, setIsOpen] = useState(false)
  const scrollDirection = useScrollDirection()
  const [isAtTop, setIsAtTop] = useState(true)
  const pathname = usePathname()
  const router = useRouter()
  const segments = pathname.split('/')
  const currentLocale = segments[1] || 'hr'

  useEffect(() => {
    const handleScroll = () => setIsAtTop(window.scrollY < 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false)
    if (href.includes('/#') && pathname === `/${currentLocale}`) {
      e.preventDefault()
      const element = document.getElementById(href.split('#')[1])
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav className={`fixed top-0 w-full z-110 transition-all duration-700 ease-in-out border-b ${scrollDirection === 'down' && !isOpen ? '-translate-y-full' : 'translate-y-0'} ${isAtTop && !isOpen ? 'bg-transparent border-transparent py-8' : 'bg-hyde-bg/95 backdrop-blur-xl border-white/5 py-4'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <div className="hidden md:flex flex-1 justify-start gap-12 text-[10px] uppercase tracking-[0.5em] text-white/40 font-light">
            <Link href={`/${currentLocale}/menu`} className="hover:text-gold transition-all duration-300 link-underline">{dict.menu}</Link>
            <Link href={`/${currentLocale}/#gallery`} onClick={(e) => handleNavClick(e, `/${currentLocale}/#gallery`)} className="hover:text-gold transition-all duration-300 link-underline">{dict.gallery}</Link>
          </div>
          <Link href={`/${currentLocale}`} onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="relative shrink-0 w-32 h-10 md:w-52 md:h-16 transition-transform duration-700 hover:scale-105">
            <Image src="/images/logo.webp" alt="HYDE" fill sizes="(max-width: 768px) 128px, 208px" className="object-contain mix-blend-screen" priority />
          </Link>
          <div className="hidden md:flex flex-1 justify-end gap-12 text-[10px] uppercase tracking-[0.5em] text-white/40 font-light items-center">
            <Link href={`/${currentLocale}/#about`} onClick={(e) => handleNavClick(e, `/${currentLocale}/#about`)} className="hover:text-gold transition-all duration-300 link-underline">{dict.philosophy}</Link>
            <Link href={`/${currentLocale}/#location`} onClick={(e) => handleNavClick(e, `/${currentLocale}/#location`)} className="hover:text-gold transition-all duration-300 link-underline">{dict.contact}</Link>
            <div className="flex gap-3 pl-8 border-l border-white/10">
              {['hr', 'en', 'de', 'it'].map((lang) => (
                <button key={lang} onClick={() => { const s = [...segments]; s[1] = lang; router.push(s.join('/')) }} className={`hover:text-gold transition-colors uppercase ${lang === currentLocale ? 'text-gold font-medium' : ''}`}>{lang}</button>
              ))}
            </div>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Zatvori meni' : 'Otvori meni'} aria-expanded={isOpen} aria-controls="mobile-menu" className="md:hidden text-gold p-2 relative z-120">
            {isOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
          </button>
        </div>
      </nav>
      <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigacijski meni" className={`fixed inset-0 w-full h-dvh bg-hyde-bg z-105 flex flex-col items-center justify-center transition-all duration-700 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center gap-12 text-center">
          <Link href={`/${currentLocale}/menu`} onClick={(e) => handleNavClick(e, `/${currentLocale}/menu`)} className="text-[18px] uppercase tracking-[0.8em] text-white/80 hover:text-gold transition-all">{dict.menu}</Link>
          <Link href={`/${currentLocale}/#gallery`} onClick={(e) => handleNavClick(e, `/${currentLocale}/#gallery`)} className="text-[18px] uppercase tracking-[0.8em] text-white/80 hover:text-gold transition-all">{dict.gallery}</Link>
          <Link href={`/${currentLocale}/#about`} onClick={(e) => handleNavClick(e, `/${currentLocale}/#about`)} className="text-[18px] uppercase tracking-[0.8em] text-white/80 hover:text-gold transition-all">{dict.philosophy}</Link>
          <Link href={`/${currentLocale}/#location`} onClick={(e) => handleNavClick(e, `/${currentLocale}/#location`)} className="text-[18px] uppercase tracking-[0.8em] text-white/80 hover:text-gold transition-all">{dict.contact}</Link>
          <div className="flex gap-6 mt-8 pt-8 border-t border-white/10 text-[14px] uppercase tracking-[0.5em]">
            {['hr', 'en', 'de', 'it'].map((lang) => (
              <button key={lang} onClick={() => { const s = [...segments]; s[1] = lang; router.push(s.join('/')) }} className={`transition-colors ${lang === currentLocale ? 'text-gold font-medium' : 'text-white/40'}`}>{lang}</button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}