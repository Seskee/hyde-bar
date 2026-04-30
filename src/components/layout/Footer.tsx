'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Mail, MapPin, Star, StarHalf } from 'lucide-react' 
import { CONTACT } from '@/lib/constants'
import type { FooterDict } from '@/types'
import { usePathname } from 'next/navigation'

export default function Footer({ dict }: { dict: FooterDict }) {
  const pathname = usePathname()
  const currentLocale = pathname.split('/')[1] || 'hr'

  return (
    <footer id="footer-section" className="bg-hyde-bg border-t border-white/10 pt-20 pb-10 relative z-[10]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start mb-16 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="text-gold text-[11px] uppercase tracking-[0.4em] font-medium mb-2">{dict.location}</h4>
            <div className="flex items-center gap-3 text-white/60 text-[11px] uppercase tracking-[0.2em] font-normal hover:text-white transition-colors cursor-pointer">
              <MapPin size={14} className="text-gold/80" /><span>{CONTACT.address}</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-8 order-first md:order-0">
            <Link href="/" className="relative w-28 h-10 opacity-90 hover:opacity-100 transition-opacity">
              <Image src="/images/logo.webp" alt="HYDE Logo" fill sizes="(max-width: 768px) 112px, 112px" loading="eager" fetchPriority="high" className="object-contain mix-blend-screen" priority />
            </Link>
            <div className="flex items-center gap-8">
              <Link href="https://www.instagram.com/hyde_bar_dine/" target="_blank" rel="noopener noreferrer" aria-label="Posjetite naš Instagram profil" className="text-white/60 hover:text-gold transition-all duration-500 transform hover:scale-110"><Instagram size={20} strokeWidth={1.5} /></Link>
              <Link href="https://www.facebook.com/profile.php?id=61563303958158" target="_blank" rel="noopener noreferrer" aria-label="Posjetite našu Facebook stranicu" className="text-white/60 hover:text-gold transition-all duration-500 transform hover:scale-110"><Facebook size={20} strokeWidth={1.5} /></Link>
              <Link href={`mailto:${CONTACT.email}`} aria-label="Pošaljite nam email" className="text-white/60 hover:text-gold transition-all duration-500 transform hover:scale-110"><Mail size={20} strokeWidth={1.5} /></Link>
            </div>
            <a href={CONTACT.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group -mt-2.5 cursor-pointer">
              <div className="flex text-gold/80 group-hover:text-gold transition-colors duration-500">
                <Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><StarHalf size={12} fill="currentColor" />
              </div>
              <span className="text-white/60 text-xs uppercase tracking-[0.3em] font-normal group-hover:text-white transition-colors duration-500">{dict.ratingText}</span>
            </a>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <h4 className="text-gold text-[11px] uppercase tracking-[0.4em] font-medium mb-2">{dict.inquiry}</h4>
            <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="text-white/60 text-[11px] uppercase tracking-[0.2em] font-normal hover:text-white transition-colors">{CONTACT.phone}</a>
            <a href={`mailto:${CONTACT.email}`} className="text-white/60 text-[11px] uppercase tracking-[0.2em] font-normal hover:text-white transition-colors">{CONTACT.email}</a>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gold uppercase tracking-[0.6em] opacity-80">{dict.established}</p>
          <div className="flex gap-8 text-xs text-white/60 uppercase tracking-[0.3em]">
            <Link href={`/${currentLocale}`} className="hover:text-white transition-colors">{dict.privacy}</Link>
            <Link href={`/${currentLocale}`} className="hover:text-white transition-colors">{dict.terms}</Link>
            <span className="hidden md:inline font-normal text-white/60 italic tracking-widest">{dict.designed}</span>
          </div>
        </div>
        
      </div>
    </footer>
  )
}