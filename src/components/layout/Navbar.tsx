import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-hyde-bg/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-6">
        <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/60">
          <Link href="#menu" className="hover:text-gold transition-colors">Menu</Link>
          <Link href="#about" className="hover:text-gold transition-colors">About</Link>
        </div>
        
        <Link href="/" className="font-heading text-2xl text-white tracking-[0.3em]">HYDE</Link>
        
        <Link href="#contact" className="text-[10px] uppercase tracking-widest bg-gold px-6 py-2 text-black hover:bg-gold-light transition-colors">
          Reserve
        </Link>
      </div>
    </nav>
  )
}