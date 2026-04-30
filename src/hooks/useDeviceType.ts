'use client'
import { useState, useEffect } from 'react'

export function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: coarse)')
    
    // Inicijalno postavljanje
    setIsTouch(mediaQuery.matches)

    // FIX: Slušač za promjenu na tabletima (orijentacija, spajanje miša)
    const handler = (e: MediaQueryListEvent) => setIsTouch(e.matches)
    mediaQuery.addEventListener('change', handler)
    
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return isTouch
}