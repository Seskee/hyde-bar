import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-hyde-bg border-t border-gold/10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 mb-24">
          
          {/* Col 1: Logo & Info */}
          <div className="col-span-1">
            <div className="relative w-32 h-12 mb-6">
              <Image src="/images/logo.webp" alt="HYDE Logo" fill className="object-contain object-left" />
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-[200px]">
              A sanctuary of flavor and atmosphere in the heart of Varaždin.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-gold text-[10px] uppercase tracking-[0.3em] mb-8 font-medium">Explore</h4>
            <ul className="space-y-4 text-white/60 text-xs uppercase tracking-widest">
              <li><Link href="#menu" className="hover:text-gold transition-colors">The Menu</Link></li>
              <li><Link href="#gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link href="#about" className="hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link href="#location" className="hover:text-gold transition-colors">Reservations</Link></li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="text-gold text-[10px] uppercase tracking-[0.3em] mb-8 font-medium">Contact</h4>
            <ul className="space-y-4 text-white/60 text-xs tracking-widest uppercase">
              <li>Ulica Kralja Tomislava 12</li>
              <li>Varaždin, Croatia</li>
              <li className="pt-2 text-white">+385 42 000 000</li>
              <li className="text-white">hello@hydebar.hr</li>
            </ul>
          </div>

          {/* Col 4: Social */}
          <div>
            <h4 className="text-gold text-[10px] uppercase tracking-[0.3em] mb-8 font-medium">Follow</h4>
            <div className="flex gap-6">
              <Link href="#" className="text-white/40 hover:text-gold transition-colors text-xs uppercase tracking-widest">Instagram</Link>
              <Link href="#" className="text-white/40 hover:text-gold transition-colors text-xs uppercase tracking-widest">Facebook</Link>
            </div>
            <div className="mt-12 p-4 bg-hyde-emerald/10 border border-hyde-emerald/20 rounded-sm">
              <p className="text-[10px] text-hyde-emerald-light uppercase tracking-widest">Open Tonight</p>
              <p className="text-xs text-white/80 mt-1">18:00 — 01:00</p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/20 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} HYDE BAR & DINE. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-white/20 uppercase tracking-[0.2em]">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}