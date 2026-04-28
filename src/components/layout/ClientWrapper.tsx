'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Inicijalizacija Lenis Smooth Scrolla
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Reveal animacije (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active')
      })
    }, { threshold: 0.05 })

    // Malo čekamo da se DOM smiri prije skeniranja
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    }, 400)

    return () => {
      lenis.destroy()
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [pathname])

  return <>{children}</>
}