'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Onemogući skrol dok traje preloader
    document.body.style.overflow = 'hidden'
    const timer = setTimeout(() => {
      setLoading(false)
      document.body.style.overflow = ''
    }, 2800) // Ukupno trajanje sekvence

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          // Tailwind optimizacije: korištena varijabla bg-hyde-bg umjesto HEX, maknut custom z-index [100000] za z-50 ili sličan čisti naziv, ali ostavljen visok
          className="fixed inset-0 z-[100000] bg-hyde-bg flex flex-col items-center justify-center pointer-events-auto"
        >
          {/* Logo koji se na kraju zumira */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 20, opacity: 0 }} // Ekstremni zoom na izlazu
            // FIX TYPESCRIPTA: Nema 'exit' unutar transition.
            // Samo proslijedimo globalni transition objekt, framer motion to sam mapira.
            transition={{ 
              duration: 1.2, 
              ease: [0.76, 0, 0.24, 1] 
            }}
            className="w-40 h-20 relative mb-8"
          >
            <Image 
              src="/images/logo.webp" 
              alt="Loading" 
              fill 
              sizes="160px"
              loading="eager"
              fetchPriority="high"
              className="object-contain mix-blend-screen" 
              priority 
            />
          </motion.div>

          {/* Linija učitavanja */}
          <div className="w-48 h-px bg-white/10 relative overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 2, ease: "circInOut" }}
              className="absolute inset-0 w-full h-full bg-[#d4af37]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}