'use client'
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    lenisRef.current = new Lenis({ duration: 1.2, smoothWheel: true, wheelMultiplier: 1 })
    
    let rafId: number
    function raf(time: number) { 
      lenisRef.current?.raf(time)
      rafId = requestAnimationFrame(raf) 
    }
    rafId = requestAnimationFrame(raf)

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
      cancelAnimationFrame(rafId)
      lenisRef.current?.destroy()
      observer.disconnect()
      clearTimeout(timer) 
    }
  }, [pathname])

  return <>{children}</>
}