import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 md:px-12 mt-32 md:mt-40 mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* Tekst - Lijeva strana */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="w-12 h-[1px] bg-[var(--gold)] mb-8"></div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-[var(--gold)] mb-6 leading-tight">
            The Philosophy of Shadows
          </h2>
          <p className="font-sans text-[var(--text-muted)] mb-6 text-lg leading-relaxed">
            At HYDE, we believe that the absence of light heightens the senses. Our culinary approach strips away distraction, focusing entirely on texture, aroma, and the purity of seasonal ingredients.
          </p>
          <p className="font-sans text-[var(--text-muted)] mb-10 text-lg leading-relaxed">
            Designed as a sanctuary from the bustling city, the space embraces a dark botanical aesthetic—where lush greenery meets deep, moody tones, creating an atmosphere of quiet exclusivity.
          </p>
          <Link href="#menu" className="inline-flex items-center gap-4 group">
            <span className="text-[12px] text-[var(--gold)] tracking-[0.15em] uppercase font-medium">Discover Our Story</span>
            <div className="w-8 h-[1px] bg-[var(--gold)] group-hover:w-16 transition-all duration-300"></div>
          </Link>
        </div>

        {/* Slike - Desna strana */}
        <div className="lg:col-span-7 order-1 lg:order-2 relative">
          {/* Glavna velika slika */}
          <div className="aspect-[4/3] w-full relative overflow-hidden border border-[var(--gold-border)]">
            <Image 
              src="/images/interijer2.webp" 
              alt="HYDE interijer"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
          {/* Manja slika koja preklapa glavnu (vidljiva samo na većim ekranima) */}
          <div className="hidden md:block absolute -bottom-12 -left-12 w-3/5 aspect-square overflow-hidden border border-[var(--gold-border)] shadow-2xl z-10">
            <Image 
              src="/images/interijer3.webp" 
              alt="HYDE detalji"
              fill
              className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              sizes="33vw"
            />
          </div>
        </div>

      </div>
    </section>
  )
}