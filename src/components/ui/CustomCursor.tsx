'use client'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false) 
  
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  
  // Opruge za ultra-brzu reakciju bez laga
  const springX = useSpring(mouseX, { stiffness: 1000, damping: 40, mass: 0.1 })
  const springY = useSpring(mouseY, { stiffness: 1000, damping: 40, mass: 0.1 })

  useEffect(() => {
    setMounted(true)
    
    // Na mobitelima i tabletima ne želimo ovaj kursor
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false) 
    const handleMouseEnter = () => setIsVisible(true)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      // Detektiraj je li kursor iznad nečega klikabilnog
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    window.addEventListener('mouseover', handleMouseOver, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave) 
    document.addEventListener('mouseenter', handleMouseEnter)
    
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseleave', handleMouseLeave) 
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [mouseX, mouseY])

  if (!mounted) return null

  // Ako korisnik u browseru forsira mobile view, sakrij kursor i tu
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null

  return (
    <motion.div
      className="fixed top-0 left-0 bg-[#d4af37] rounded-full pointer-events-none hidden md:block"
      style={{ 
        x: springX, 
        y: springY, 
        translateX: '-50%', 
        translateY: '-50%',
        zIndex: 9999999 // Iznad svega osim preloadera
      }}
      // Dimenzije i prozirnost idu u 'animate' kako bi Framer Motion to ispravno animirao
      animate={{
        width: isHovering ? 50 : 16,
        height: isHovering ? 50 : 16,
        opacity: !isVisible ? 0 : isHovering ? 0.3 : 1,
      }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 25 
      }}
    />
  )
}