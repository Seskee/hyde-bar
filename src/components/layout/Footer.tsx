'use client'
import Link from 'next/link'
import Image from 'next/image'
// DODANO: Star i StarHalf
import { Instagram, Facebook, Mail, MapPin, Star, StarHalf } from 'lucide-react' 
import { CONTACT } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-[bg-hyde-bg] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* GLAVNI RED: 3 STUPCA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start mb-16 text-center md:text-left">
          
          {/* 1. LOKACIJA */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="text-gold text-[10px] uppercase tracking-[0.4em] font-medium mb-2">Ljubuški</h4>
            <div className="flex items-center gap-3 text-white/30 text-[10px] uppercase tracking-[0.2em] font-light hover:text-white transition-colors cursor-pointer">
              <MapPin size={12} className="text-gold/50" />
              <span>{CONTACT.address}</span>
            </div>
          </div>

          {/* 2. CENTAR: LOGO, SOCIALS & REVIEWS */}
          <div className="flex flex-col items-center justify-center gap-8 order-first md:order-0">
            <Link href="/" className="relative w-28 h-10 opacity-80 hover:opacity-100 transition-opacity">
              <Image src="/images/logo.webp" alt="HYDE Logo" fill className="object-contain mix-blend-screen" />
            </Link>
            
            {/* Društvene mreže */}
            <div className="flex items-center gap-8">
              <Link href="https://instagram.com" target="_blank" className="text-white/30 hover:text-gold transition-all duration-500 transform hover:scale-110">
                <Instagram size={18} strokeWidth={1.5} />
              </Link>
              <Link href="https://facebook.com" target="_blank" className="text-white/30 hover:text-gold transition-all duration-500 transform hover:scale-110">
                <Facebook size={18} strokeWidth={1.5} />
              </Link>
              <Link href={`mailto:${CONTACT.email}`} className="text-white/30 hover:text-gold transition-all duration-500 transform hover:scale-110">
                <Mail size={18} strokeWidth={1.5} />
              </Link>
            </div>

            {/* DODANO: Google Reviews ocjena */}
            <a 
              href={CONTACT.googleReviewsUrl} // <- Pobrini se da ovo postoji u constants.ts
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 group -mt-2.5 cursor-pointer"
            >
              <div className="flex text-gold/50 group-hover:text-gold transition-colors duration-500">
                <Star size={10} fill="currentColor" />
                <Star size={10} fill="currentColor" />
                <Star size={10} fill="currentColor" />
                <Star size={10} fill="currentColor" />
                <StarHalf size={10} fill="currentColor" />
              </div>
              <span className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-light group-hover:text-white transition-colors duration-500">
                4.6 / 5 na Googleu
              </span>
            </a>
          </div>

          {/* 3. KONTAKT */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <h4 className="text-gold text-[10px] uppercase tracking-[0.4em] font-medium mb-2">Inquiry</h4>
            <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-light hover:text-white transition-colors">
              {CONTACT.phone}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-light hover:text-white transition-colors">
              {CONTACT.email}
            </a>
          </div>

        </div>

        {/* BOTTOM BAR: FINALNI TOUCH */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[8px] text-gold uppercase tracking-[0.6em] opacity-60">
            Botanical Noir • Established 2024
          </p>
          
          <div className="flex gap-8 text-[8px] text-white/20 uppercase tracking-[0.3em]">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <span className="hidden md:inline font-light text-white/10 italic tracking-widest">Designed for Excellence</span>
          </div>
        </div>

      </div>
    </footer>
  )
}