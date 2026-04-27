import Link from 'next/link'
import Image from 'next/image'
import { CONTACT } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-hyde-bg border-t border-white/5 pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <div className="relative w-48 h-20 mx-auto mb-16 opacity-60">
          <Image src="/images/logo.webp" alt="HYDE Logo" fill className="object-contain mix-blend-screen" />
        </div>

        <div className="w-px h-24 bg-gradient-to-b from-gold/40 to-transparent mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-[10px] uppercase tracking-[0.4em] text-white/30 mb-32">
          <div>
            <h4 className="text-gold mb-8 font-medium">Ljubuški</h4>
            <p className="leading-loose">{CONTACT.address}</p>
          </div>
          <div>
            <h4 className="text-gold mb-8 font-medium">Follow Us</h4>
            <div className="flex flex-col gap-5">
              <Link href="https://instagram.com" className="hover:text-white transition-all">Instagram</Link>
              <Link href="#" className="hover:text-white transition-all">Facebook</Link>
            </div>
          </div>
          <div>
            <h4 className="text-gold mb-8 font-medium">Inquiry</h4>
            <p className="leading-loose">{CONTACT.phone}<br/>{CONTACT.email}</p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5">
          <p className="text-[8px] text-white/10 uppercase tracking-[0.6em]">
            Botanical Noir • Ljubuški • Established 2024
          </p>
        </div>
      </div>
    </footer>
  )
}