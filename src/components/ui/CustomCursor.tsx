'use client'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  
  // Još brže postavke (stiffness 1200)
  const springX = useSpring(mouseX, { stiffness: 1200, damping: 50, mass: 0.1 })
  const springY = useSpring(mouseY, { stiffness: 1200, damping: 50, mass: 0.1 })

  useEffect(() => {
    setMounted(true)
    const isMobile = window.matchMedia('(pointer: coarse)').matches
    if (isMobile) return

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [mouseX, mouseY])

  if (!mounted) return null

  return (
    <motion.div
      className="fixed top-0 left-0 w-5 h-5 bg-[#d4af37] rounded-full pointer-events-none hidden md:block"
      style={{ 
        x: springX, 
        y: springY, 
        translateX: '-50%', 
        translateY: '-50%',
        zIndex: 10000000 // Povećano na 10 milijuna
      }}
    />
  )
}