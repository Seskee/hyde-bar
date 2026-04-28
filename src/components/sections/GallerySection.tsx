'use client'
import { useState } from 'react'
import Image from 'next/image'
import type { GalleryDict } from '@/types'
import dynamic from 'next/dynamic'

// SENIOR TRIK: Dinamički import sprječava da Lightbox sruši/sakrije galeriju na početku
const Lightbox = dynamic(() => import('yet-another-react-lightbox'), { ssr: false })
import 'yet-another-react-lightbox/styles.css'

export default function GallerySection({ dict }: { dict: GalleryDict }) {
  const [index, setIndex] = useState(-1)

  const images = [
    { src: '/images/interijer1.webp', span: 'md:col-span-8', label: dict.img1 },
    { src: '/images/interijer3.webp', span: 'md:col-span-4', label: dict.img2 },
    { src: '/images/interijer2.webp', span: 'md:col-span-4', label: dict.img3 },
    { src: '/images/interijer4.webp', span: 'md:col-span-8', label: dict.img4 },
  ]

  const slides = images.map(img => ({ src: img.src, alt: img.label }))

  return (
    <section id="gallery" className="py-24 md:py-48 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* NASLOV */}
        <div className="mb-20 reveal active">
          <span className="text-gold text-[10px] tracking-[0.8em] uppercase block mb-6 opacity-50 font-medium">{dict.badge}</span>
          <h2 className="font-heading text-5xl md:text-8xl text-white italic lowercase leading-none">{dict.title}</h2>
        </div>
        
        {/* GRID SLIKA */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          {images.map((img, i) => (
            <div 
              key={i} 
              onClick={() => setIndex(i)} 
              className={`${img.span} relative h-100 md:h-137.5 overflow-hidden group reveal cursor-pointer`} 
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 66vw"
                className="object-cover transition-all duration-[2.5s] ease-out scale-105 md:scale-100 md:grayscale-[0.6] group-hover:scale-110 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
              <div className="absolute bottom-10 left-10 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                <span className="text-gold text-[10px] tracking-[0.5em] uppercase font-light italic">{img.label}</span>
              </div>
              <div className="absolute inset-0 border border-white/5 group-hover:border-gold/20 transition-colors duration-700 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX KOMPONENTA */}
      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
        styles={{ container: { backgroundColor: "rgba(7, 14, 8, 0.98)" } }} // Savršeno crno-zelena HYDE pozadina
      />
    </section>
  )
}