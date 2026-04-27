'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { usePathname, useRouter } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const scrollDirection = useScrollDirection()
  const [isAtTop, setIsAtTop] = useState(true)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setIsAtTop(window.scrollY < 50)
    window.addEventListener('scroll', handleScroll)
    
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isOpen])

  const navLinks = [
    { name: 'Menu', href: '/menu' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Philosophy', href: '/#about' },
    { name: 'Contact', href: '/#location' },
  ]

  // POSEBNA FUNKCIJA ZA MOBILNE LINKOVE
  const handleMobileClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false)
    
    // Ako je link na istoj stranici (ima #)
    if (href.startsWith('/#')) {
      e.preventDefault()
      const targetId = href.replace('/#', '')
      
      // Ako smo već na početnoj, samo skrolaj
      if (pathname === '/') {
        setTimeout(() => {
          const element = document.getElementById(targetId)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 300) // Čekamo da se menu zatvori i body otključa
      } else {
        // Ako nismo na početnoj, odi na početnu s tim hashom
        router.push(href)
      }
    }
  }

  return (
    <>
      <nav className={`fixed top-0 w-full z-[110] transition-all duration-700 ease-in-out border-b 
        ${scrollDirection === 'down' && !isOpen ? '-translate-y-full' : 'translate-y-0'}
        ${isAtTop && !isOpen ? 'bg-transparent border-transparent py-8' : 'bg-[#070e08]/95 backdrop-blur-xl border-white/5 py-4'}
      `}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          
          {/* Desktop Left */}
          <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.5em] text-white/40 font-light">
            <Link href="/menu" className="hover:text-gold transition-all duration-300">Menu</Link>
            <Link href="/#gallery" className="hover:text-gold transition-all duration-300">Gallery</Link>
          </div>

          {/* Logo */}
          <Link href="/" onClick={() => setIsOpen(false)} className="relative w-32 h-10 md:w-52 md:h-16 transition-transform duration-700 hover:scale-105">
            <Image src="/images/logo.webp" alt="HYDE" fill className="object-contain mix-blend-screen" priority />
          </Link>

          {/* Desktop Right */}
          <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.5em] text-white/40 font-light text-right">
            <Link href="/#about" className="hover:text-gold transition-all duration-300">Philosophy</Link>
            <Link href="/#location" className="hover:text-gold transition-all duration-300">Contact</Link>
          </div>

          {/* Mobile Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-gold p-2 relative z-[120] transition-transform active:scale-90"
          >
            {isOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div className={`fixed inset-0 w-full h-[100dvh] bg-[#070e08] z-[105] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        
        {/* Pozadinski Logo (vidi se na mobu kad je menu otvoren) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <div className="relative w-72 h-72">
            <Image src="/images/logo.webp" alt="" fill className="object-contain mix-blend-screen" />
          </div>
        </div>

        <div className="relative z-[106] flex flex-col items-center gap-12 text-center">
          {navLinks.map((link, i) => (
            <Link 
              key={i} 
              href={link.href}
              onClick={(e) => handleMobileClick(e, link.href)}
              className={`text-[18px] uppercase tracking-[0.8em] text-white/80 hover:text-gold transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: isOpen ? `${i * 100}ms` : '0ms' }}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-12 h-px bg-gold/20 mt-4 animate-pulse"></div>
          <p className="text-[10px] text-gold tracking-[0.4em] uppercase opacity-60">Ljubuški</p>
        </div>
      </div>
    </>
  )
}