import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full mt-32 border-t border-[var(--gold-border)] bg-[#040805] relative overflow-hidden">
      <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-[var(--gold)]/10"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 py-24 px-6 md:px-12 max-w-7xl mx-auto text-center md:text-left">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="font-heading text-2xl font-light tracking-[0.2em] text-[var(--text-primary)] mb-4">HYDE</Link>
          <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--text-subtle)]">
            © {new Date().getFullYear()} HYDE. Culinary Excellence.
          </p>
        </div>
        
        {/* Links */}
        <div className="flex flex-col items-center md:items-start space-y-4 text-[10px] tracking-[0.15em] uppercase text-[var(--text-muted)]">
          <Link href="#location" className="hover:text-[var(--gold)] transition-colors">Location</Link>
          <Link href="#location" className="hover:text-[var(--gold)] transition-colors">Hours</Link>
          <Link href="#contact" className="hover:text-[var(--gold)] transition-colors">Contact</Link>
          <Link href="#" className="hover:text-[var(--gold)] transition-colors">Privacy</Link>
        </div>
        
        {/* Extra Info */}
        <div className="flex flex-col items-center md:items-end text-[10px] tracking-[0.15em] uppercase text-[var(--text-subtle)]">
          <p className="mb-2 text-[var(--gold)]">Fine Dining & Lounge Bar</p>
          <p>Varaždin, Croatia</p>
        </div>

      </div>
    </footer>
  )
}