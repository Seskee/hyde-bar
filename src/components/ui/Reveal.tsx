'use client'
import { motion } from 'framer-motion'

export function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2, ease: [0.2, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}