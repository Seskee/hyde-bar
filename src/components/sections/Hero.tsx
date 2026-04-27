import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Pozadinska slika */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/interijer1.webp"
          alt="HYDE Interior"
          fill
          priority
          className="object-cover object-center brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-hyde-bg/60 via-transparent to-hyde-bg"></div>
      </div>

      {/* Tekst */}
      <div className="relative z-10 text-center px-6">
        <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-gold mb-6 tracking-tighter">
          HYDE
        </h1>
        <p className="font-sans text-lg md:text-xl text-white/80 max-w-xl mx-auto uppercase tracking-[0.3em] font-light">
          Bar & Fine Dine
        </p>
        <div className="mt-12">
          <button className="px-10 py-4 border border-gold text-gold text-xs uppercase tracking-widest hover:bg-gold hover:text-black transition-all duration-500">
            Explore Experience
          </button>
        </div>
      </div>
    </section>
  )
}