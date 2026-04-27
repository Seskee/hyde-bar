import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Menu | HYDE bar & dine',
  description: 'Explore the culinary collection of HYDE in Ljubuški. From ember-roasted maitake to premium aged ribeye.',
}

export default function MenuPage() {
  const starters = [
    { name: 'Ember-Roasted Maitake', desc: 'Black garlic emulsion, cured egg yolk, wild onion ash', price: '24' },
    { name: 'Venison Tartare', desc: 'Juniper berry, fermented plum, smoked marrow toast', price: '32' }
  ]

  return (
    <main className="bg-hyde-bg min-h-screen">
      <Navbar />
      <div className="pt-48 pb-32 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-32">
          <span className="text-gold text-[10px] tracking-[0.8em] uppercase block mb-4">Taste the Night</span>
          <h1 className="font-heading text-6xl md:text-8xl text-white lowercase italic tracking-tight">The Menu</h1>
          <div className="w-24 h-px bg-gold/30 mx-auto mt-12"></div>
        </div>

        <section className="mb-24">
          <h2 className="font-heading text-gold text-4xl mb-16 text-center italic tracking-widest lowercase">Starters</h2>
          <div className="grid gap-16">
            {starters.map((item, i) => (
              <div key={i} className="group text-center">
                <div className="flex flex-col items-center gap-2 mb-4">
                  <h3 className="font-heading text-3xl text-white group-hover:text-gold transition-all duration-700 lowercase italic tracking-wide">{item.name}</h3>
                  <div className="w-8 h-px bg-gold/20"></div>
                  <span className="text-gold font-sans tracking-widest text-sm">€{item.price}</span>
                </div>
                <p className="text-white/30 text-[10px] uppercase tracking-[0.2em] max-w-xs mx-auto leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}