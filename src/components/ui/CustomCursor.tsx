'use client'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useIsTouchDevice } from '@/hooks/useDeviceType'

export function CustomCursor() {
  const isTouch = useIsTouchDevice()
  const [isHovering, setIsHovering] = useState(false)
  // FIX: Vraćamo stari dobri React state za opacity, onaj "useMotionValue" je zaledio UI
  const [isVisible, setIsVisible] = useState(false) 
  
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  
  const springX = useSpring(mouseX, { stiffness: 1000, damping: 40, mass: 0.1 })
  const springY = useSpring(mouseY, { stiffness: 1000, damping: 40, mass: 0.1 })

  useEffect(() => {
    if (isTouch) return

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setIsVisible(true) 
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
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
  }, [mouseX, mouseY, isTouch])

  if (isTouch) return null

  return (
    <motion.div
      // FIX: Vraćen z-[9999999] da kursor 100% bude iznad svega
      className="fixed top-0 left-0 rounded-full pointer-events-none hidden md:block z-[9999999]"
      style={{ 
        x: springX, 
        y: springY, 
        translateX: '-50%', 
        translateY: '-50%'
      }}
      // FIX: Animiramo opacity bazirano na pravom stateu
      animate={{
        width: isHovering ? 50 : 16,
        height: isHovering ? 50 : 16,
        backgroundColor: isHovering ? "rgba(201, 168, 76, 0.3)" : "rgba(201, 168, 76, 1)",
        opacity: isVisible ? 1 : 0
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    />
  )
}