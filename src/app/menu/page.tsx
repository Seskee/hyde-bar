import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Menu | HYDE bar & dine',
  description: 'Explore the culinary collection of HYDE in Ljubuški. From ember-roasted maitake to premium aged ribeye and signature cocktails.',
}

export default function MenuPage() {
  const categories = [
    {
      title: "The Starters",
      items: [
        { name: 'Ember-Roasted Maitake', desc: 'Black garlic emulsion, wild onion ash, cured egg yolk', price: '24' },
        { name: 'Venison Tartare', desc: 'Juniper berry, fermented plum, smoked marrow toast', price: '32' },
        { name: 'Hokkaido Scallop', desc: 'Green apple dashi, finger lime, cold-pressed shiso oil', price: '28' }
      ]
    },
    {
      title: "Main Collection",
      items: [
        { name: 'Aged Ribeye', desc: '28-day aged Black Angus, bone marrow jus, roasted garlic', price: '42' },
        { name: 'Black Cod Misoyaki', desc: 'Turnip dashi, compressed kelp, sea bean', price: '38' },
        { name: 'Duck Breast', desc: 'Blackberry gastrique, sunchoke purée, charred endive', price: '36' }
      ]
    }
  ]

  return (
    <main className="bg-[#070e08] min-h-screen">
      <Navbar />
      <div className="pt-64 pb-32 px-6 max-w-7xl mx-auto">
        
        {/* HEADER SEKCIJA - POVEĆANO */}
        <header className="text-center mb-52">
          {/* Povećano na 8xl (mob) i 12rem (desktop) */}
          <h1 className="font-heading text-8xl md:text-[12rem] italic text-white lowercase leading-none tracking-tighter animate-slow-reveal">
            The Menu
          </h1>
          
          {/* Povećano na 14px s ogromnim trackingom */}
          <p className="text-gold text-[12px] md:text-[14px] tracking-[1.2em] md:tracking-[1.5em] uppercase mt-16 opacity-80 font-light ml-[1.5em]">
            Ljubuški Selection
          </p>
          
          {/* Suptilna linija ispod naslova */}
          <div className="w-px h-24 bg-gradient-to-b from-gold/40 to-transparent mx-auto mt-16 opacity-30"></div>
        </header>

        {categories.map((cat, idx) => (
          <section key={idx} className="mb-48 reveal active">
            <h2 className="font-heading text-gold text-2xl md:text-3xl uppercase tracking-[0.5em] mb-24 text-center italic">{cat.title}</h2>
            <div className="space-y-28">
              {cat.items.map((item, i) => (
                <div key={i} className="max-w-3xl mx-auto text-center group">
                  <div className="mb-6">
                    {/* Naslov jela - lowercase italic za editorial look */}
                    <h3 className="font-heading text-4xl md:text-6xl text-white group-hover:text-gold transition-all duration-700 lowercase italic tracking-tight">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-white/30 text-[11px] md:text-[13px] uppercase tracking-[0.3em] mb-8 font-light leading-relaxed px-4 md:px-12">
                    {item.desc}
                  </p>
                  <span className="text-gold font-sans text-base md:text-lg tracking-widest opacity-90 italic">
                    €{item.price}
                  </span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
      <Footer />
    </main>
  )
}