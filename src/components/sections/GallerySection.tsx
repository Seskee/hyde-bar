import Image from 'next/image'

export default function GallerySection() {
  return (
    <section id="gallery" className="w-full max-w-7xl mx-auto px-6 md:px-12 py-32">
      
      {/* Header Section */}
      <div className="mb-24 md:mb-32 md:w-2/3 lg:w-1/2">
        <h2 className="font-heading text-5xl md:text-6xl text-[var(--gold)] mb-6">
          Atmosphere
        </h2>
        <p className="font-sans text-lg text-[var(--text-muted)] max-w-xl leading-relaxed">
          A visual journey through HYDE. Deep botanical greens, striking shadows, and the quiet theater of fine dining.
        </p>
      </div>

      {/* Asymmetric Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-32">
        
        {/* Slika 1: Velika slika lijevo (Spans 8 cols) */}
        <div className="col-span-1 md:col-span-8 group relative overflow-hidden bg-[var(--bg-secondary)] border border-[var(--gold-border)]">
          <div className="aspect-[16/9] md:aspect-auto md:h-[600px] w-full relative">
            <Image 
              src="/images/interijer1.webp" 
              alt="The Dining Room" 
              fill
              className="object-cover object-center filter brightness-75 group-hover:brightness-100 transition-all duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-[10px] text-[var(--gold)] tracking-[0.2em] uppercase font-medium mb-2 block">The Dining Room</span>
            <h3 className="font-heading text-3xl text-[var(--gold)]">Botanical Sanctuary</h3>
          </div>
        </div>

        {/* Slika 2: Visoka slika desno (Spans 4 cols) */}
        <div className="col-span-1 md:col-span-4 group relative overflow-hidden bg-[var(--bg-secondary)] border border-[var(--gold-border)] mt-12 md:mt-0">
          <div className="aspect-[3/4] md:aspect-auto md:h-[600px] w-full relative">
            <Image 
              src="/images/interijer2.webp" 
              alt="Mixology" 
              fill
              className="object-cover object-center filter brightness-75 group-hover:brightness-100 transition-all duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-[10px] text-[var(--gold)] tracking-[0.2em] uppercase font-medium mb-2 block">Mixology</span>
            <h3 className="font-heading text-3xl text-[var(--gold)]">Flora & Spirits</h3>
          </div>
        </div>

        {/* Slika 3: Kvadratna slika lijevo ispod velike (Spans 4 cols) */}
        <div className="col-span-1 md:col-span-4 group relative overflow-hidden bg-[var(--bg-secondary)] border border-[var(--gold-border)] md:-mt-12">
          <div className="aspect-[1/1] md:aspect-auto md:h-[400px] w-full relative">
            <Image 
              src="/images/interijer3.webp" 
              alt="Details" 
              fill
              className="object-cover object-center filter brightness-75 group-hover:brightness-100 transition-all duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Slika 4: Široka slika desno ispod visoke (Spans 8 cols) */}
        <div className="col-span-1 md:col-span-8 group relative overflow-hidden bg-[var(--bg-secondary)] border border-[var(--gold-border)]">
          <div className="aspect-[16/9] md:aspect-auto md:h-[400px] w-full relative">
            <Image 
              src="/images/interijer4.webp" 
              alt="Culinary Art" 
              fill
              className="object-cover object-center filter brightness-75 group-hover:brightness-100 transition-all duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-[10px] text-[var(--gold)] tracking-[0.2em] uppercase font-medium mb-2 block">Atmosphere</span>
            <h3 className="font-heading text-3xl text-[var(--gold)]">Precision & Texture</h3>
          </div>
        </div>

      </div>
    </section>
  )
}