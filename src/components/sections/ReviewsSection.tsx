'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import { Star, StarHalf, ChevronLeft, ChevronRight } from 'lucide-react'
import { CONTACT } from '@/lib/constants'
import type { ReviewsDict } from '@/types'
import MagneticWrapper from '@/components/ui/MagneticWrapper'

export default function ReviewsSection({ dict }: { dict: ReviewsDict }) {
  const reviews = [
    { text: dict.review1, author: "Marko M." },
    { text: dict.review2, author: "Ana S." },
    { text: dict.review3, author: "Ivan K." }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  
  // MICRO-FIX: Referenca za timeout koja sprječava curenje memorije (memory leak)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleNext = useCallback(() => {
    setIsAnimating(true)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => { 
      setCurrentIndex(i => (i + 1) % reviews.length)
      setIsAnimating(false) 
    }, 400)
  }, [reviews.length])

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => { 
      setCurrentIndex(i => (i - 1 + reviews.length) % reviews.length)
      setIsAnimating(false) 
    }, 400)
  }

  useEffect(() => {
    const timer = setInterval(handleNext, 7000)
    return () => {
      clearInterval(timer)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [handleNext])

  return (
    <section className="relative py-32 bg-hyde-bg overflow-hidden reveal">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] md:w-[40%] h-[60%] bg-hyde-emerald opacity-15 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-20 flex flex-col items-center justify-center">
          <div className="flex gap-1 mb-6 text-gold drop-shadow-md">
            <Star fill="currentColor" size={20} strokeWidth={1} />
            <Star fill="currentColor" size={20} strokeWidth={1} />
            <Star fill="currentColor" size={20} strokeWidth={1} />
            <Star fill="currentColor" size={20} strokeWidth={1} />
            <StarHalf fill="currentColor" size={20} strokeWidth={1} />
          </div>
          <h2 className="font-heading text-6xl md:text-7xl text-white italic lowercase leading-none">
            4.6<span className="text-3xl text-white/40">/5</span>
          </h2>
          <span className="text-gold text-[11px] tracking-[0.6em] uppercase mt-6 opacity-90 font-medium">
            {dict.subtitle}
          </span>
        </div>

        <div className="relative min-h-50 flex items-center justify-center">
          <div className="absolute left-0 md:-left-12 z-10">
            <MagneticWrapper>
              <button aria-label="Prethodna recenzija" onClick={handlePrev} className="text-white/50 hover:text-gold transition-colors p-4">
                <ChevronLeft size={32} strokeWidth={1} />
              </button>
            </MagneticWrapper>
          </div>
          
          <div className="max-w-2xl px-12 transition-all duration-400 ease-in-out" style={{ opacity: isAnimating ? 0 : 1, transform: isAnimating ? 'scale(0.98)' : 'scale(1)' }}>
            <p className="font-heading text-2xl md:text-4xl text-white/95 leading-[1.6] italic font-normal tracking-wide mb-8">"{reviews[currentIndex].text}"</p>
            <p className="font-sans text-[12px] text-gold uppercase tracking-[0.3em] font-medium">— {reviews[currentIndex].author}</p>
          </div>
          
          <div className="absolute right-0 md:-right-12 z-10">
            <MagneticWrapper>
              <button aria-label="Sljedeća recenzija" onClick={handleNext} className="text-white/50 hover:text-gold transition-colors p-4">
                <ChevronRight size={32} strokeWidth={1} />
              </button>
            </MagneticWrapper>
          </div>
        </div>

        <div className="mt-24">
          <MagneticWrapper>
            <a href={CONTACT.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 group border border-gold/40 hover:border-gold/80 px-10 py-5 transition-all duration-500 bg-white/5 backdrop-blur-md">
              <span className="text-[11px] text-white/90 group-hover:text-gold uppercase tracking-[0.4em] transition-colors font-medium">{dict.shareBtn}</span>
              <div className="w-8 h-px bg-gold/40 group-hover:bg-gold transition-colors"></div>
            </a>
          </MagneticWrapper>
        </div>
      </div>
    </section>
  )
}