'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useScrollDirection } from '@/hooks/useScrollDirection'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const scrollDirection = useScrollDirection()
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => setIsAtTop(window.scrollY < 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 w-full z-[110] transition-all duration-700 ease-in-out border-b 
        ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}
        ${isAtTop ? 'bg-transparent border-transparent py-8' : 'bg-hyde-bg/90 backdrop-blur-xl border-white/5 py-4'}
      `}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.5em] text-white/40 font-light">
            <Link href="/menu" className="hover:text-gold transition-all duration-300">Menu</Link>
            <Link href="/#gallery" className="hover:text-gold transition-all duration-300">Gallery</Link>
          </div>

          <Link href="/" className="relative w-32 h-10 md:w-52 md:h-16 transition-transform duration-700 hover:scale-105">
            <Image src="/images/logo.webp" alt="HYDE" fill className="object-contain mix-blend-screen" priority />
          </Link>

          <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.5em] text-white/40 font-light">
            <Link href="/#about" className="hover:text-gold transition-all duration-300">Philosophy</Link>
            <Link href="/#location" className="hover:text-gold transition-all duration-300">Contact</Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gold p-2 relative z-[120]">
            {isOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
          </button>
        </div>
      </nav>

      {/* Full screen menu remains the same as previous version but with better typography */}
      <div className={`fixed inset-0 w-full h-full bg-[#070e08] z-[105] flex flex-col items-center justify-center transition-all duration-700 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center gap-12 text-center">
          {['Menu', 'Gallery', 'Philosophy', 'Contact'].map((item, i) => (
            <Link 
              key={item} 
              href={item === 'Menu' ? '/menu' : `/#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-[18px] uppercase tracking-[0.8em] text-white/80 hover:text-gold transition-all"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}