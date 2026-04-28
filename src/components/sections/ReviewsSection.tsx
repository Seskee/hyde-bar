'use client'
import { useState, useEffect } from 'react'
import { Star, StarHalf, ChevronLeft, ChevronRight } from 'lucide-react'
import { CONTACT } from '@/lib/constants'

const reviews = [
  {
    text: "Savršen spoj ambijenta i gastronomije. Svaki zalogaj je umjetnost, a kokteli su priča za sebe. Najbolje mjesto u Hercegovini.",
    author: "Marko M.",
  },
  {
    text: "Atmosfera koja te prebaci u neki drugi svijet. Usluga na vrhunskom nivou, a dry-aged ribeye je apsolutno savršenstvo.",
    author: "Ana S.",
  },
  {
    text: "Botanical noir koncept u punom sjaju. Od ulaska do deserta, iskustvo koje budi sva čula. Definitivno se vraćamo.",
    author: "Ivan K.",
  }
]

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Auto-play logika (mijenja recenziju svakih 6 sekundi)
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 6000)
    return () => clearInterval(timer)
  }, [currentIndex])

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
      setIsAnimating(false)
    }, 500)
  }

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
      setIsAnimating(false)
    }, 500)
  }

  return (
    <section className="py-32 bg-[bg-hyde-bg] overflow-hidden reveal">
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
            Google Reviews
          </span>
        </div>

        {/* SLIDER RECENZIJA */}
        <div className="relative min-h-50 flex items-center justify-center">
          
          {/* Lijeve i desne kontrole */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 md:-left-12 text-white/20 hover:text-gold transition-colors p-2 z-10"
          >
            <ChevronLeft size={32} strokeWidth={1} />
          </button>

          <div className={`transition-all duration-500 max-w-2xl px-12 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <p className="font-heading text-2xl md:text-4xl text-white/90 leading-[1.6] italic font-light tracking-wide mb-8">
              "{reviews[currentIndex].text}"
            </p>
            <p className="font-sans text-[11px] text-gold uppercase tracking-[0.3em]">
              — {reviews[currentIndex].author}
            </p>
          </div>

          <button 
            onClick={handleNext}
            className="absolute right-0 md:-right-12 text-white/20 hover:text-gold transition-colors p-2 z-10"
          >
            <ChevronRight size={32} strokeWidth={1} />
          </button>
        </div>

        {/* CTA GUMB */}
        <div className="mt-24">
          <a 
            href={CONTACT.googleReviewsUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 group border border-white/10 hover:border-gold/50 px-10 py-5 transition-all duration-500"
          >
            <span className="text-[10px] text-white/60 group-hover:text-gold uppercase tracking-[0.4em] transition-colors">
              Share Your Experience
            </span>
            <div className="w-8 h-px bg-white/20 group-hover:bg-gold transition-colors"></div>
          </a>
        </div>

      </div>
    </section>
  )
}