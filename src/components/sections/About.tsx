import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-32 md:py-48 scroll-reveal">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        <div className="lg:col-span-5 order-2 lg:order-1">
          <span className="text-gold text-[10px] tracking-[0.6em] uppercase block mb-6">Our Philosophy</span>
          <h2 className="font-heading text-5xl md:text-7xl text-white mb-10 italic lowercase leading-none">
            Botanical <span className="text-gold">Noir</span>
          </h2>
          <p className="font-sans text-white/50 text-sm md:text-lg leading-relaxed mb-10 uppercase tracking-[0.15em] font-light">
            Dizajniran kao utočište od svakodnevice, naš prostor spaja tamnu botaniku i baršunaste tonove smaragda. Svaki detalj, od mramornih stolova do prigušene rasvjete, stvoren je za potpuno prepuštanje osjetilima.
          </p>
          <div className="w-24 h-px bg-gold/20"></div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="relative aspect-[4/5] md:aspect-[16/9] overflow-hidden group">
            <Image 
              src="/images/interijer2.webp" 
              alt="HYDE Emerald Velvet" 
              fill 
              className="object-cover transition-transform duration-[3s] group-hover:scale-110"
            />
            {/* Emerald Overlay Effect */}
            <div className="absolute inset-0 bg-hyde-emerald/10 mix-blend-overlay"></div>
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]"></div>
          </div>
        </div>

      </div>
    </section>
  )
}