'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          // z-index je visok, ali NIŽI od kursora i gumba
          className="fixed inset-0 z-[99999] bg-[#0c0c0c] flex items-center justify-center pointer-events-auto"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-32 h-16 relative"
          >
            <Image src="/images/logo.webp" alt="Loading" fill className="object-contain mix-blend-screen" priority />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}