'use client'
import { useState, useEffect, useRef } from 'react'

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null)
  
  // useRef pamti vrijednost u pozadini bez okidanja re-rendera komponenti!
  const lastScrollY = useRef(0)

  useEffect(() => {
    lastScrollY.current = window.scrollY

    const updateScrollDirection = () => {
      const scrollY = window.scrollY
      const diff = scrollY - lastScrollY.current

      // Mijenjamo smjer samo ako je pomak veći od 10px (sprječava trzanje - jitter)
      if (Math.abs(diff) > 10) {
        setScrollDirection(diff > 0 ? 'down' : 'up')
        lastScrollY.current = scrollY > 0 ? scrollY : 0
      }
    }

    // passive: true je tu za maksimalne performanse na mobitelima
    window.addEventListener('scroll', updateScrollDirection, { passive: true })
    
    return () => window.removeEventListener('scroll', updateScrollDirection)
  }, []) // ← PRAZAN NIZ! Zlatno pravilo: listener se dodaje i briše samo JEDNOM.

  return scrollDirection
}