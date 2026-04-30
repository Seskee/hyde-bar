'use client'
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import { useIsTouchDevice } from '@/hooks/useDeviceType'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const lenisRef = useRef<Lenis | null>(null)
  const isTouch = useIsTouchDevice()

  useEffect(() => {
    let rafId: number

    // 1. LENIS SMOOTH SCROLL (Samo za PC)
    if (!isTouch && !lenisRef.current) {
      lenisRef.current = new Lenis({ duration: 1.2, smoothWheel: true, wheelMultiplier: 1 })
      
      const raf = (time: number) => { 
        lenisRef.current?.raf(time)
        rafId = requestAnimationFrame(raf) 
      }
      rafId = requestAnimationFrame(raf)
    }

    // 2. VRAĆEN SKENER ZA STARE .reveal KLASE DA TI STRANICA NE BUDE NEVIDLJIVA
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.05 })

    const timer = setTimeout(() => { 
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el)) 
    }, 400)

    return () => { 
      if (lenisRef.current) {
        cancelAnimationFrame(rafId)
        lenisRef.current.destroy()
        lenisRef.current = null
      }
      observer.disconnect()
      clearTimeout(timer) 
    }
  }, [pathname, isTouch]) // Vraćen pathname da se animacije ponovno okinu kad promijeniš stranicu

  return <>{children}</>
}