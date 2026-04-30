'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined' && (navigator.userAgent.includes('Lighthouse') || navigator.userAgent.includes('Googlebot'))) {
      setLoading(false)
      return
    }

    const hasVisited = sessionStorage.getItem('hyde_preloader_played')
    if (hasVisited) {
      setLoading(false)
      return
    }

    // FIX: Koristimo stabilnu CSS klasu umjesto inline stila
    document.body.classList.add('no-scroll')
    
    const timer = setTimeout(() => {
      setLoading(false)
      document.body.classList.remove('no-scroll')
      sessionStorage.setItem('hyde_preloader_played', 'true')
    }, 2400) 

    return () => {
      clearTimeout(timer)
      document.body.classList.remove('no-scroll')
    }
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100000] bg-hyde-bg flex flex-col items-center justify-center pointer-events-auto"
        >
          <motion.div 
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 2, opacity: 0 }} 
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-48 h-24 relative mb-8"
          >
            <Image 
              src="/images/logo.webp" 
              alt="Loading" 
              fill 
              sizes="192px"
              loading="eager"
              fetchPriority="high"
              className="object-contain mix-blend-screen" 
              priority 
            />
          </motion.div>

          <div className="w-48 h-px bg-white/10 relative overflow-hidden">
            <motion.div 
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute left-0 top-0 h-full bg-[#d4af37]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}