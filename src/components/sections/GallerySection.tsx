import Image from 'next/image'

const images = [
  { src: '/images/interijer1.webp', span: 'md:col-span-8', label: 'The Sanctuary' },
  { src: '/images/interijer3.webp', span: 'md:col-span-4', label: 'Fine Dine' },
  { src: '/images/interijer2.webp', span: 'md:col-span-4', label: 'Mixology' },
  { src: '/images/interijer4.webp', span: 'md:col-span-8', label: 'Nocturnal Details' },
]

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 md:py-32 px-6 scroll-reveal">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <h2 className="font-heading text-5xl md:text-7xl text-white italic lowercase">Atmosfera</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {images.map((img, i) => (
            <div key={i} className={`${img.span} relative h-[350px] md:h-[500px] overflow-hidden group`}>
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
              />
              {/* Luxury Frame Effect */}
              <div className="absolute inset-0 border border-white/5 group-hover:border-gold/20 transition-colors duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-gold text-[10px] tracking-[0.4em] uppercase font-light">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}