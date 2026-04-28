'use client'
import { useEffect, useState } from 'react'
import { Phone, MapPin } from 'lucide-react'
import { CONTACT } from '@/lib/constants'

export function MobileActions() {
  const [mounted, setMounted] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setShow(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!mounted || !show) return null

  return (
    <div className="fixed bottom-6 left-0 w-full flex md:hidden justify-center px-6" style={{ zIndex: 10000000 }}>
      <div className="bg-[#0f0f0f] border border-white/20 rounded-full flex w-full max-w-[360px] shadow-2xl">
        <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="flex-1 flex items-center justify-center gap-3 py-4 text-[#d4af37] border-r border-white/10 text-[10px] font-bold uppercase tracking-widest active:bg-white/5 rounded-l-full">
          <Phone size={14} /> Poziv
        </a>
        <a href={CONTACT.googleMapsPin} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-3 py-4 text-white text-[10px] font-bold uppercase tracking-widest active:bg-white/5 rounded-r-full">
          <MapPin size={14} className="text-[#d4af37]" /> Lokacija
        </a>
      </div>
    </div>
  )
}