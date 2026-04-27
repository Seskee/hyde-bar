import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24 md:py-40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        
        {/* TEKST - Dolazi prvi na mobitelu ako je order-2 lg:order-1 */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="w-12 h-px bg-gold mb-8"></div>
          <h2 className="font-heading text-4xl md:text-6xl text-gold mb-8 italic lowercase">Philosophy</h2>
          <p className="font-sans text-white/50 text-sm md:text-lg leading-relaxed mb-8 uppercase tracking-widest">
            U HYDE-u vjerujemo da odsustvo svjetla pojačava osjetila. Naš kulinarski pristup fokusira se na teksturu, aromu i čistoću sezonskih sastojaka u srcu Ljubuškog.
          </p>
        </div>

        {/* SLIKA - Iznad teksta na mobitelu */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="relative aspect-[4/5] md:aspect-[16/9] overflow-hidden border border-white/5">
            <Image 
              src="/images/interijer2.webp" 
              alt="HYDE atmosphere" 
              fill 
              className="object-cover grayscale"
            />
          </div>
        </div>

      </div>
    </section>
  )
}