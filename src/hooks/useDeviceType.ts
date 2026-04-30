'use client'
import { useState, useEffect } from 'react'

export function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    // Ako je pointer: coarse, radi se o touch uređaju (mobitel/tablet)
    setIsTouch(window.matchMedia('(pointer: coarse)').matches)
  }, [])

  return isTouch
}