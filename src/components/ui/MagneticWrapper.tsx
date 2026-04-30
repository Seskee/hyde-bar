'use client'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useIsTouchDevice } from '@/hooks/useDeviceType'

export default function MagneticWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const isTouch = useIsTouchDevice()

  const handleMouseMove = (e: React.MouseEvent) => {
    // FIX: Uklonjen matchMedia, koristimo centralni hook
    if (isTouch) return

    const { clientX, clientY } = e
    const { width, height, left, top } = ref.current!.getBoundingClientRect()
    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)
    setPosition({ x: x * 0.35, y: y * 0.35 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      whileTap={{ scale: 0.95 }}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  )
}