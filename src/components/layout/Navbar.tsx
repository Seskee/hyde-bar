import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-gold/10 bg-hyde-bg/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.3em] text-white/50">
          <Link href="#menu" className="hover:text-gold transition-colors">Menu</Link>
          <Link href="#gallery" className="hover:text-gold transition-colors">Gallery</Link>
        </div>

        {/* LOGO - Zamijenili smo tekst slikom */}
        <Link href="/" className="relative w-32 h-12 md:w-40 md:h-16">
          <Image 
            src="/images/logo.webp" 
            alt="HYDE Bar & Dine" 
            fill 
            className="object-contain"
            priority
          />
        </Link>

        <div className="flex items-center gap-6">
          <Link href="#location" className="hidden md:block text-[10px] uppercase tracking-widest text-white/50 hover:text-gold">
            Location
          </Link>
          <Link href="#location" className="text-[10px] uppercase tracking-widest bg-gold px-6 py-2.5 text-black hover:bg-gold-light transition-all font-medium emerald-glow">
            Reserve
          </Link>
        </div>
        
      </div>
    </nav>
  )
}