'use client'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function MagneticWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    // Magnetski efekt radi samo na desktopu (uređaji s mišem)
    if (window.matchMedia('(pointer: coarse)').matches) return

    const { clientX, clientY } = e
    const { width, height, left, top } = ref.current!.getBoundingClientRect()
    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)
    setPosition({ x: x * 0.35, y: y * 0.35 })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      // Dok se pritišće (na mobitelu ili desktopu), gumb se malo smanji
      whileTap={{ scale: 0.95 }}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block" // Osigurava da omot ne "pobjegne" preko cijelog ekrana
    >
      {children}
    </motion.div>
  )
}