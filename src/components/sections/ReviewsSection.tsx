'use client'
import { useState, useEffect, useCallback } from 'react'
import { Star, StarHalf, ChevronLeft, ChevronRight } from 'lucide-react'
import { CONTACT } from '@/lib/constants'
import type { ReviewsDict } from '@/types'

export default function ReviewsSection({ dict }: { dict: ReviewsDict }) {
  const reviews = [
    { text: dict.review1, author: "Marko M." },
    { text: dict.review2, author: "Ana S." },
    { text: dict.review3, author: "Ivan K." }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [mounted, setMounted] = useState(false) // Skeleton rješenje

  useEffect(() => { setMounted(true) }, [])

  const handleNext = useCallback(() => {
    setIsAnimating(prev => {
      if (prev) return prev
      setTimeout(() => { setCurrentIndex(i => (i + 1) % reviews.length); setIsAnimating(false) }, 500)
      return true
    })
  }, [reviews.length])

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => { setCurrentIndex(i => (i - 1 + reviews.length) % reviews.length); setIsAnimating(false) }, 500)
  }

  useEffect(() => {
    const timer = setInterval(handleNext, 6000)
    return () => clearInterval(timer)
  }, [handleNext])

  return (
    <section className="py-32 bg-hyde-bg overflow-hidden reveal">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* GOOGLE RATING HEADER */}
        <div className="mb-20 flex flex-col items-center justify-center">
          <div className="flex gap-1 mb-6 text-gold">
            <Star fill="currentColor" size={20} strokeWidth={1} />
            <Star fill="currentColor" size={20} strokeWidth={1} />
            <Star fill="currentColor" size={20} strokeWidth={1} />
            <Star fill="currentColor" size={20} strokeWidth={1} />
            <StarHalf fill="currentColor" size={20} strokeWidth={1} />
          </div>
          <h2 className="font-heading text-6xl md:text-7xl text-white italic lowercase leading-none">
            4.6<span className="text-3xl text-white/30">/5</span>
          </h2>
          <span className="text-gold text-[10px] tracking-[0.6em] uppercase mt-6 opacity-70">
            {dict.subtitle}
          </span>
        </div>

        {/* SLIDER RECENZIJA SA SKELETONOM */}
        <div className="relative min-h-50 flex items-center justify-center">
          <button onClick={handlePrev} className="absolute left-0 md:-left-12 text-white/20 hover:text-gold transition-colors p-2 z-10"><ChevronLeft size={32} strokeWidth={1} /></button>
          
          <div className={`transition-all duration-500 max-w-2xl px-12 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            {!mounted ? (
              <div className="animate-pulse space-y-4">
                 <div className="h-4 bg-white/10 rounded w-3/4 mx-auto"></div>
                 <div className="h-4 bg-white/10 rounded w-1/2 mx-auto"></div>
              </div>
            ) : (
              <>
                <p className="font-heading text-2xl md:text-4xl text-white/90 leading-[1.6] italic font-light tracking-wide mb-8">"{reviews[currentIndex].text}"</p>
                <p className="font-sans text-[11px] text-gold uppercase tracking-[0.3em]">— {reviews[currentIndex].author}</p>
              </>
            )}
          </div>
          
          <button onClick={handleNext} className="absolute right-0 md:-right-12 text-white/20 hover:text-gold transition-colors p-2 z-10"><ChevronRight size={32} strokeWidth={1} /></button>
        </div>

        {/* CTA GUMB */}
        <div className="mt-24">
          <a 
            href={CONTACT.googleReviewsUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 group border border-gold/30 md:border-white/10 hover:border-gold/50 px-10 py-5 transition-all duration-500"
          >
            <span className="text-[10px] text-gold md:text-white/60 group-hover:text-gold uppercase tracking-[0.4em] transition-colors">
              {dict.shareBtn}
            </span>
            <div className="w-8 h-px bg-gold/40 md:bg-white/20 group-hover:bg-gold transition-colors"></div>
          </a>
        </div>

      </div>
    </section>
  )
}