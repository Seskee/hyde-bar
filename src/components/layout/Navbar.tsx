import Link from 'next/link'
import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--bg-primary)]/80 backdrop-blur-md border-b border-[var(--gold-border)]">
      <div className="flex justify-between items-center w-full px-6 md:px-12 py-6 max-w-[1920px] mx-auto">
        
        {/* Lijevi Linkovi (Desktop) */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="#menu" className="text-[12px] lg:text-[14px] uppercase tracking-widest text-gold border-b border-gold/50 pb-1 hover:text-gold-light transition-colors">Menu</Link>
          <Link href="#gallery" className="text-[12px] lg:text-[14px] uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors">Gallery</Link>
          <Link href="#about" className="text-[12px] lg:text-[14px] uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors">About</Link>
        </div>

        {/* Centralni Logo */}
        <Link href="/" className="font-heading text-3xl font-light tracking-[0.3em] text-text-primary hover:scale-95 transition-transform duration-300">
          HYDE
        </Link>

        {/* Desni Gumbi */}
        <div className="flex items-center gap-6">
          <Link href="#contact" className="hidden md:inline-flex items-center justify-center text-[12px] uppercase tracking-widest text-gold border border-gold/50 px-8 py-3 hover:bg-gold/10 transition-colors duration-300">
            Reserve
          </Link>
          {/* Hamburger Menu (Mobile) */}
          <button aria-label="Open menu" className="md:hidden text-text-primary hover:text-gold transition-colors">
            <Menu className="w-8 h-8 font-light" />
          </button>
        </div>
      </div>
    </nav>
  )
}