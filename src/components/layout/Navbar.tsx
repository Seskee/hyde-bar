'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Zaključaj skrolanje kad je menu otvoren
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navLinks = [
    { name: 'Menu', href: '/menu' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Philosophy', href: '/#about' },
    { name: 'Contact', href: '/#location' },
  ]

  return (
    <>
      {/* GLAVNA TRAKA (Uvijek vidljiva) */}
      <nav className="fixed top-0 w-full z-[110] border-b border-white/5 bg-hyde-bg/95 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 md:py-5">
          
          {/* DESKTOP LIJEVO */}
          <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.4em] text-white/40 font-light">
            <Link href="/menu" className="hover:text-gold transition-all duration-500">Menu</Link>
            <Link href="/#gallery" className="hover:text-gold transition-all duration-500">Gallery</Link>
          </div>

          {/* LOGO (Centar) */}
          <Link href="/" className="relative w-28 h-10 md:w-52 md:h-16 transition-transform duration-700 hover:scale-105">
            <Image 
              src="/images/logo.webp" 
              alt="HYDE Logo" 
              fill 
              className="object-contain mix-blend-screen"
              priority
            />
          </Link>

          {/* DESKTOP DESNO */}
          <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.4em] text-white/40 font-light text-right">
            <Link href="/#about" className="hover:text-gold transition-all duration-500">Philosophy</Link>
            <Link href="/#location" className="hover:text-gold transition-all duration-500">Contact</Link>
          </div>

          {/* MOBILNI GUMB (Hamburger / X) */}
          <button 
            className="md:hidden text-gold p-2 relative z-[120]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* MOBILNI MENU OVERLAY */}
      <div 
        className={`fixed inset-0 w-full h-full bg-[#070e08] z-[100] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        {/* Suptilni logo u pozadini menija */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
          <div className="relative w-[70%] aspect-square">
            <Image src="/images/logo.webp" alt="" fill className="object-contain" />
          </div>
        </div>

        <div className="relative z-[101] flex flex-col items-center gap-10">
          {navLinks.map((link, i) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className={`text-[14px] uppercase tracking-[0.6em] text-white hover:text-gold transition-all duration-300 ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: isOpen ? `${i * 100}ms` : '0ms' }}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="w-12 h-px bg-gold/30 mt-8"></div>
          
          <div className="flex flex-col items-center gap-4 mt-4 text-center">
             <p className="text-[9px] text-gold tracking-[0.4em] uppercase">Ljubuški</p>
             <p className="text-[10px] text-white/30 tracking-[0.2em]">Zvonimirova, Ljubuški 88320</p>
             <p className="text-[10px] text-white/30 tracking-[0.2em]">+387 63 992 444</p>
          </div>
        </div>
      </div>
    </>
  )
}