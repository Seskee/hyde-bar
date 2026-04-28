'use client'
import Image from 'next/image'

// 1. Dodajemo 'dict' prop
export default function GallerySection({ dict }: { dict: any }) {
  
  // 2. Prebacili smo niz unutar komponente kako bi mogao čitati 'dict' prijevode
  const images = [
    { src: '/images/interijer1.webp', span: 'md:col-span-8', label: dict.img1 },
    { src: '/images/interijer3.webp', span: 'md:col-span-4', label: dict.img2 },
    { src: '/images/interijer2.webp', span: 'md:col-span-4', label: dict.img3 },
    { src: '/images/interijer4.webp', span: 'md:col-span-8', label: dict.img4 },
  ]

  return (
    <section id="gallery" className="py-24 md:py-48 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 reveal">
          {/* 3. Mijenjamo fiksni tekst varijablama */}
          <span className="text-gold text-[10px] tracking-[0.8em] uppercase block mb-6 opacity-50 font-medium">
            {dict.badge}
          </span>
          <h2 className="font-heading text-5xl md:text-8xl text-white italic lowercase leading-none">
            {dict.title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          {images.map((img, i) => (
            <div 
              key={i} 
              className={`${img.span} relative h-[400px] md:h-[550px] overflow-hidden group reveal`}
              style={{ transitionDelay: `${i * 150}ms` }} // STAGGER EFFECT
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover transition-transform duration-[3s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
              <div className="absolute bottom-10 left-10 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                {/* Ovdje se automatski ispisuje prevedeni label za sliku */}
                <span className="text-gold text-[10px] tracking-[0.5em] uppercase font-light italic">{img.label}</span>
              </div>
              <div className="absolute inset-0 border border-white/5 group-hover:border-gold/20 transition-colors duration-700 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}