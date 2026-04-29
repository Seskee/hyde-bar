'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import type { NavbarDict } from '@/types'

export default function Navbar({ dict }: { dict: NavbarDict }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)
  const [isHidden, setIsHidden] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const lastScrollYRef = useRef(0)
  const isOpenRef = useRef(false)

  const pathname = usePathname()
  const router = useRouter()
  const segments = pathname.split('/')
  const currentLocale = segments[1] || 'hr'

  // Sinkronizira isOpen u ref bez ponovnog mountanja glavnog effecta
  useEffect(() => {
    isOpenRef.current = isOpen
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Glavni effect — montira se JEDNOM, nema re-subscribea na svaki scroll
  useEffect(() => {
    lastScrollYRef.current = window.scrollY
    setIsAtTop(window.scrollY < 50)

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsAtTop(currentScrollY < 50)
      if (currentScrollY > lastScrollYRef.current && currentScrollY > 100 && !isOpenRef.current) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }
      lastScrollYRef.current = currentScrollY
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id)
      })
    }, { threshold: 0.5 })

    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section))

    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpenRef.current) setIsOpen(false)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      observer.disconnect()
    }
  }, [])

  const handleLocaleChange = (newLocale: string) => {
    const newSegments = [...segments]
    newSegments[1] = newLocale
    router.push(newSegments.join('/'))
    setIsOpen(false)
  }

  const NavLink = ({ href, children, sectionId }: { href: string, children: string, sectionId?: string }) => {
    const isActive = activeSection === sectionId
    return (
      <Link
        href={href}
        className={`relative transition-all duration-500 link-underline drop-shadow-md
        ${isActive ? 'text-gold font-semibold' : 'text-white/80 font-medium hover:text-white'}`}
      >
        {children}
        {isActive && (
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gold rounded-full" />
        )}
      </Link>
    )
  }

  const mobileNavItems = [
    { id: 'menu', path: `/${currentLocale}/menu`, label: dict.menu },
    { id: 'gallery', path: `/${currentLocale}/#gallery`, label: dict.gallery },
    { id: 'about', path: `/${currentLocale}/#about`, label: dict.philosophy },
    { id: 'location', path: `/${currentLocale}/#location`, label: dict.contact }
  ]

  return (
    <>
      <nav className={`fixed top-0 w-full z-[9998] transition-all duration-700 ease-in-out border-b 
        ${isHidden ? '-translate-y-full' : 'translate-y-0'} 
        ${isAtTop && !isOpen ? 'bg-transparent border-transparent py-8' : 'bg-hyde-bg/95 backdrop-blur-xl border-white/10 py-4 shadow-lg'}`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

          <div className="hidden md:flex flex-1 justify-start gap-12 text-[12px] uppercase tracking-[0.3em] items-center">
            <NavLink href={`/${currentLocale}/menu`}>{dict.menu}</NavLink>
            <NavLink href={`/${currentLocale}/#gallery`} sectionId="gallery">{dict.gallery}</NavLink>
          </div>

          <Link
            href={`/${currentLocale}`}
            onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="relative shrink-0 w-32 h-10 md:w-52 md:h-16 transition-transform duration-700 hover:scale-105 drop-shadow-xl"
          >
            <Image src="/images/logo.webp" alt="HYDE" fill sizes="(max-width: 768px) 128px, 208px" className="object-contain mix-blend-screen" loading="eager" fetchPriority="high" priority />
          </Link>

          <div className="hidden md:flex flex-1 justify-end gap-12 text-[12px] uppercase tracking-[0.3em] items-center">
            <NavLink href={`/${currentLocale}/#about`} sectionId="about">{dict.philosophy}</NavLink>
            <NavLink href={`/${currentLocale}/#location`} sectionId="location">{dict.contact}</NavLink>

            <div className="flex gap-4 pl-8 border-l border-white/20 drop-shadow-md">
              {['hr', 'en', 'de', 'it'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLocaleChange(lang)}
                  className={`transition-colors uppercase font-medium ${lang === currentLocale ? 'text-gold' : 'text-white/50 hover:text-white'}`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gold p-2 relative z-[9999]" aria-label="Toggle Menu">
            {isOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 w-full h-dvh bg-hyde-bg/95 backdrop-blur-2xl z-[9997] flex flex-col items-center justify-center transition-all duration-700 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center gap-10 text-center">
          <div className="flex flex-col items-center gap-10">
            {mobileNavItems.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="text-[18px] uppercase tracking-[0.5em] text-white/90 font-medium hover:text-gold transition-all drop-shadow-md"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="w-16 h-px bg-gold/40 my-6" />

          <div className="flex gap-8 text-[14px] uppercase tracking-[0.3em] font-medium">
            {['hr', 'en', 'de', 'it'].map((lang) => (
              <button
                key={lang}
                aria-label={`Promijeni jezik na ${lang.toUpperCase()}`}
                onClick={() => handleLocaleChange(lang)}
                className={`transition-colors ${lang === currentLocale ? 'text-gold' : 'text-white/40 hover:text-white'}`}
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