'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const scrollDirection = useScrollDirection()
  const [isAtTop, setIsAtTop] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsAtTop(window.scrollY < 50)
    window.addEventListener('scroll', handleScroll)
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false)
    
    if (href.startsWith('/#') && pathname === '/') {
      e.preventDefault()
      const targetId = href.replace('/#', '')
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
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
          
          {/* LIJEVO */}
          <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.5em] text-white/40 font-light">
            <Link href="/menu" className="hover:text-gold transition-all duration-300 link-underline">Menu</Link>
            <Link href="/#gallery" onClick={(e) => handleNavClick(e, '/#gallery')} className="hover:text-gold transition-all duration-300 link-underline">Gallery</Link>
          </div>

          {/* LOGO */}
          <Link href="/" onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="relative w-32 h-10 md:w-52 md:h-16 transition-transform duration-700 hover:scale-105">
            <Image src="/images/logo.webp" alt="HYDE" fill className="object-contain mix-blend-screen" priority />
          </Link>

          {/* DESNO */}
          <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.5em] text-white/40 font-light text-right">
            <Link href="/#about" onClick={(e) => handleNavClick(e, '/#about')} className="hover:text-gold transition-all duration-300 link-underline">Philosophy</Link>
            <Link href="/#location" onClick={(e) => handleNavClick(e, '/#location')} className="hover:text-gold transition-all duration-300 link-underline">Contact</Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gold p-2 relative z-[120]">
            {isOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <div className={`fixed inset-0 w-full h-[100dvh] bg-[#070e08] z-[105] flex flex-col items-center justify-center transition-all duration-700 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center gap-12 text-center">
          {[
            { name: 'Menu', href: '/menu' },
            { name: 'Gallery', href: '/#gallery' },
            { name: 'Philosophy', href: '/#about' },
            { name: 'Contact', href: '/#location' },
          ].map((link, i) => (
            <Link 
              key={i} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[18px] uppercase tracking-[0.8em] text-white/80 hover:text-gold transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}