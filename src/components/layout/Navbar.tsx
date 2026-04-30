'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { useScroll, useMotionValueEvent } from 'framer-motion'
import type { NavbarDict } from '@/types'

export default function Navbar({ dict }: { dict: NavbarDict }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)
  const [isHidden, setIsHidden] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const pathname = usePathname()
  const router = useRouter()
  const segments = pathname.split('/')
  const currentLocale = segments[1] || 'hr'

  const modalRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  // Detekcija skrola za sakrivanje navbara
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0
    setIsAtTop(latest < 50)
    if (latest > 100 && latest > previous && !isOpen) setIsHidden(true)
    else setIsHidden(false)
  })

  // Lock scroll kad je meni otvoren
  useEffect(() => {
    if (isOpen) document.body.classList.add('no-scroll')
    else document.body.classList.remove('no-scroll')
    return () => document.body.classList.remove('no-scroll')
  }, [isOpen])

  // Intersection Observer za detekciju aktivne sekcije
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id)
      })
    }, { threshold: 0.5 })

    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Focus Trap za WCAG
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      const focusableElements = modalRef.current?.querySelectorAll('a[href], button:not([disabled])') as NodeListOf<HTMLElement>
      if (!focusableElements || focusableElements.length === 0) return
      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault(); lastElement.focus()
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault(); firstElement.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const handleLocaleChange = (newLocale: string) => {
    const newSegments = [...segments]
    newSegments[1] = newLocale
    router.push(newSegments.join('/'))
    setIsOpen(false)
  }

  // Funkcija koja forsira scroll čak i ako je hash isti
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname === `/${currentLocale}` || pathname === `/${currentLocale}/`) {
      const element = document.getElementById(id)
      if (element) {
        e.preventDefault()
        element.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      }
    }
  }

  const NavLink = ({ href, children, sectionId, isPage }: { href: string, children: string, sectionId?: string, isPage?: boolean }) => {
    // Određujemo je li link aktivan (bilo da je stranica ili sekcija)
    const isActive = isPage ? pathname.includes(href) : activeSection === sectionId

    return (
      <Link 
        href={href} 
        onClick={(e) => sectionId && handleScrollClick(e, sectionId)}
        className={`relative transition-all duration-500 link-underline drop-shadow-md p-2 -m-2 uppercase tracking-widest text-[11px] font-medium
          ${isActive ? 'text-gold' : 'text-white/80 hover:text-white'}`}
      >
        {children}
      </Link>
    )
  }

  return (
    <>
      <nav className={`fixed top-0 w-full z-[9998] transition-all duration-700 ease-in-out border-b backdrop-blur-xl ${isHidden ? '-translate-y-full' : 'translate-y-0'} ${isAtTop && !isOpen ? 'bg-transparent border-transparent py-8' : 'bg-hyde-bg/95 border-white/10 py-4 shadow-lg'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          
          {/* LIJEVA STRANA */}
          <div className="hidden md:flex flex-1 justify-start gap-12 items-center">
            <NavLink href={`/${currentLocale}/menu`} isPage>{dict.menu}</NavLink>
            <NavLink href={`/${currentLocale}/#gallery`} sectionId="gallery">{dict.gallery}</NavLink>
          </div>

          {/* LOGO */}
          <Link href={`/${currentLocale}`} onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="relative shrink-0 w-32 h-10 md:w-52 md:h-16 transition-transform duration-700 hover:scale-105 drop-shadow-xl">
            <Image src="/images/logo.webp" alt="HYDE" fill sizes="(max-width: 768px) 128px, 208px" className="object-contain mix-blend-screen" loading="eager" fetchPriority="high" priority />
          </Link>

          {/* DESNA STRANA */}
          <div className="hidden md:flex flex-1 justify-end gap-12 items-center">
            <NavLink href={`/${currentLocale}/#about`} sectionId="about">{dict.philosophy}</NavLink>
            <NavLink href={`/${currentLocale}/#location`} sectionId="location">{dict.contact}</NavLink>

            <div className="flex gap-4 pl-8 border-l border-white/20">
              {['hr', 'en', 'de', 'it'].map((lang) => (
                <button key={lang} onClick={() => handleLocaleChange(lang)} className={`transition-colors uppercase text-[11px] font-medium p-2 -m-2 ${lang === currentLocale ? 'text-gold' : 'text-white/50 hover:text-white'}`}>
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* MOBILNI GUMB */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gold p-3 relative z-[9999]" aria-expanded={isOpen} aria-label={isOpen ? "Zatvori izbornik" : "Otvori izbornik"}>
            {isOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
          </button>
        </div>
      </nav>

      {/* MOBILNI MENI */}
      <div ref={modalRef} className={`fixed inset-0 w-full h-dvh bg-hyde-bg/95 backdrop-blur-2xl z-[9997] flex flex-col items-center justify-center transition-all duration-700 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center gap-10 text-center">
          <div className="flex flex-col items-center gap-10">
            {/* Ručno mapiranje mobilnih stavki za preciznu kontrolu skrola */}
            <Link href={`/${currentLocale}/menu`} onClick={() => setIsOpen(false)} className="text-lg uppercase tracking-[0.2em] text-white/90 font-medium hover:text-gold transition-all">
              {dict.menu}
            </Link>
            <Link href={`/${currentLocale}/#gallery`} onClick={(e) => handleScrollClick(e, 'gallery')} className="text-lg uppercase tracking-[0.2em] text-white/90 font-medium hover:text-gold transition-all">
              {dict.gallery}
            </Link>
            <Link href={`/${currentLocale}/#about`} onClick={(e) => handleScrollClick(e, 'about')} className="text-lg uppercase tracking-[0.2em] text-white/90 font-medium hover:text-gold transition-all">
              {dict.philosophy}
            </Link>
            <Link href={`/${currentLocale}/#location`} onClick={(e) => handleScrollClick(e, 'location')} className="text-lg uppercase tracking-[0.2em] text-white/90 font-medium hover:text-gold transition-all">
              {dict.contact}
            </Link>
          </div>
          <div className="w-16 h-px bg-gold/40 my-6" />
          <div className="flex gap-8 text-sm uppercase tracking-widest font-medium">
            {['hr', 'en', 'de', 'it'].map((lang) => (
              <button key={lang} onClick={() => handleLocaleChange(lang)} className={`transition-colors p-3 ${lang === currentLocale ? 'text-gold' : 'text-white/40 hover:text-white'}`}>
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}