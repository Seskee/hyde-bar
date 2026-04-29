'use client'
import { useState, useMemo, useRef } from 'react'
import Image from 'next/image'
import type { GalleryDict } from '@/types'
import dynamic from 'next/dynamic'

const Lightbox = dynamic(() => import('yet-another-react-lightbox'), { ssr: false })
import 'yet-another-react-lightbox/styles.css'

export default function GallerySection({ dict }: { dict: GalleryDict }) {
  const [index, setIndex] = useState(-1)
  const [activeSlide, setActiveSlide] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const images = useMemo(() => [
    { src: '/images/interijer1.webp', span: 'md:col-span-8', label: dict.img1 },
    { src: '/images/interijer3.webp', span: 'md:col-span-4', label: dict.img2 },
    { src: '/images/interijer2.webp', span: 'md:col-span-4', label: dict.img3 },
    { src: '/images/interijer4.webp', span: 'md:col-span-8', label: dict.img4 },
  ], [dict])

  const slides = useMemo(() => images.map(img => ({ src: img.src, alt: img.label })), [images])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 50) {
      if (diff > 0) setActiveSlide(prev => Math.min(prev + 1, images.length - 1))
      else setActiveSlide(prev => Math.max(prev - 1, 0))
    }
  }

  return (
    <section id="gallery" className="py-24 md:py-48 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 reveal active">
          <span className="text-gold text-[10px] tracking-[0.8em] uppercase block mb-6 opacity-50 font-medium">{dict.badge}</span>
          <h2 className="font-heading text-5xl md:text-8xl text-white italic lowercase leading-none">{dict.title}</h2>
        </div>

        {/* MOBILE SLIDER */}
        <div className="md:hidden">
          <div
            className="relative h-[70vw] max-h-[450px] overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {images.map((img, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ${i === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                onClick={() => setIndex(i)}
              >
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  loading="lazy"
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-6 left-6 text-gold text-[10px] tracking-[0.5em] uppercase font-light italic">
                  {img.label}
                </span>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`rounded-full transition-all duration-300 ${i === activeSlide ? 'w-6 h-1.5 bg-gold' : 'w-1.5 h-1.5 bg-white/30'}`}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP GRID - ostaje isto */}
        <div className="hidden md:grid grid-cols-12 gap-10">
          {images.map((img, i) => (
            <div
              key={i}
              role="button"
              tabIndex={0}
              aria-label={`Otvori sliku ${img.label}`}
              onKeyDown={(e) => e.key === 'Enter' && setIndex(i)}
              onClick={() => setIndex(i)}
              className={`${img.span} relative h-137.5 overflow-hidden group reveal cursor-pointer cursor-view`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                loading="lazy"
                sizes="(max-width: 1200px) 33vw, 66vw"
                className="object-cover transition-all duration-[2.5s] ease-out grayscale-[0.6] group-hover:scale-110 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
              <div className="absolute bottom-10 left-10 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                <span className="text-gold text-[10px] tracking-[0.5em] uppercase font-light italic">{img.label}</span>
              </div>
              <div className="absolute inset-0 border border-white/5 group-hover:border-gold/20 transition-colors duration-700 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
        styles={{ container: { backgroundColor: "rgba(11, 33, 19, 0.98)" } }}
      />
    </section>
  )
}