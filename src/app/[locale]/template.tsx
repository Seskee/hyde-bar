'use client'
import { motion } from 'framer-motion'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Tamno zeleni ekran koji se lagano rastvara (fade-out) kod dolaska na novu stranicu */}
      <motion.div
        className="fixed inset-0 z-[9999] bg-hyde-bg pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      
      {/* Sadržaj stranice koji blago izranja odozdo */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  )
}