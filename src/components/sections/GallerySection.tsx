import Image from 'next/image'

const images = [
  { src: '/images/interijer1.webp', span: 'col-span-8', label: 'The Lounge' },
  { src: '/images/interijer2.webp', span: 'col-span-4', label: 'Mixology' },
  { src: '/images/interijer3.webp', span: 'col-span-4', label: 'Fine Dine' },
  { src: '/images/interijer4.webp', span: 'col-span-8', label: 'Details' },
]

export default function GallerySection() {
  return (
    <section id="gallery" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {images.map((img, i) => (
            <div key={i} className={`${img.span} relative h-[400px] overflow-hidden group border border-white/5`}>
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-gold text-[10px] tracking-widest uppercase">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}