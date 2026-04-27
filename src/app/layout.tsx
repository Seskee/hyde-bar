'use client'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import '@/styles/globals.css'
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation' // DODANO
import Lenis from 'lenis'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() // Prati promjenu stranice

  useEffect(() => {
    // 1. Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // 2. Intersection Observer (Reveal animacija)
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.05
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    // Skeniraj elemente - timeout osigurava da je DOM spreman
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal')
      elements.forEach((el) => observer.observe(el))
    }, 100)

    return () => {
      lenis.destroy()
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [pathname]) // Re-run skripte na svakoj promjeni stranice!

  return (
    <html lang="hr" className={`${cormorant.variable} ${jost.variable} scroll-smooth`}>
      <head>
        <title>{`${SITE_NAME} — Ljubuški`}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
      </head>
      <body className="bg-[#070e08] text-[#e8e2d6] antialiased">
        {children}
      </body>
    </html>
  )
}