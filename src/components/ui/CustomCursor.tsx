'use client'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [viewText, setViewText] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    // 1. POPRAVAK: Maknuli smo onu blokadu za touch ekrane! 
    // Sada se kursor garantirano pali čim se komponenta učita.
    setIsVisible(true)

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)

      const target = e.target as HTMLElement
      const isPointer = window.getComputedStyle(target).cursor === 'pointer' || target.closest('a') || target.closest('button') || target.closest('.yarl__button')
      setIsHovering(!!isPointer)

      const isGallery = target.closest('.cursor-view')
      setViewText(!!isGallery)
    }

    window.addEventListener('mousemove', moveCursor, { passive: true })
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [cursorX, cursorY])

  // Opcionalno: Sakrij kursor ako miš izađe van prozora preglednika
  useEffect(() => {
    const handleMouseOut = () => setIsVisible(false)
    const handleMouseOver = () => setIsVisible(true)
    document.addEventListener('mouseout', handleMouseOut)
    document.addEventListener('mouseover', handleMouseOver)
    return () => {
      document.removeEventListener('mouseout', handleMouseOut)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Središnja zlatna točkica */}
      <motion.div
        className="fixed pointer-events-none z-[999999] w-2 h-2 bg-gold rounded-full"
        style={{ 
          // 2. POPRAVAK: Pravilan Framer način pozicioniranja
          left: cursorX, 
          top: cursorY, 
          x: '-50%', 
          y: '-50%' 
        }}
      />
      {/* Vanjski prsten s oprugom */}
      <motion.div
        className="fixed pointer-events-none z-[999998] flex items-center justify-center rounded-full border border-gold/40 bg-hyde-emerald/20 backdrop-blur-sm"
        style={{ 
          // 2. POPRAVAK: Pravilan Framer način pozicioniranja
          left: cursorXSpring, 
          top: cursorYSpring, 
          x: '-50%', 
          y: '-50%' 
        }}
        animate={{
          width: isHovering || viewText ? 64 : 32,
          height: isHovering || viewText ? 64 : 32,
          opacity: 1
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
      >
        {viewText && <span className="text-[8px] text-gold tracking-widest font-light">VIEW</span>}
      </motion.div>
    </>
  )
}