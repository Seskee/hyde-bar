'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true, wheelMultiplier: 1 })
    let rafId: number
    function raf(time: number) { lenis.raf(time); rafId = requestAnimationFrame(raf) }
    rafId = requestAnimationFrame(raf)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          observer.unobserve(entry.target) // ← ISPRAVKA: Uklanja element iz praćenja nakon učitavanja
        }
      })
    }, { threshold: 0.05 })

    const timer = setTimeout(() => { document.querySelectorAll('.reveal').forEach((el) => observer.observe(el)) }, 400)

    return () => { cancelAnimationFrame(rafId); lenis.destroy(); observer.disconnect(); clearTimeout(timer) }
  }, [pathname])

  return <>{children}</>
}