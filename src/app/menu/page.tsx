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
        { name: 'Roasted Maitake', desc: 'Black garlic emulsion, wild onion ash', price: '24' },
        { name: 'Venison Tartare', desc: 'Juniper berry, fermented plum, smoked marrow', price: '32' }
      ]
    },
    {
      title: "Main Collection",
      items: [
        { name: 'Aged Ribeye', desc: '28-day aged, bone marrow jus, roasted garlic', price: '42' },
        { name: 'Black Cod', desc: 'Turnip dashi, compressed kelp, sea bean', price: '38' }
      ]
    }
  ]

  return (
    <main className="bg-hyde-bg min-h-screen">
      <Navbar />
      <div className="pt-64 pb-32 px-6 max-w-5xl mx-auto">
        <header className="text-center mb-40">
          <h1 className="text-editorial font-heading italic text-white lowercase">The Menu</h1>
          <p className="text-gold text-[10px] tracking-[1em] uppercase mt-12 opacity-60">Ljubuški Selection</p>
        </header>

        {categories.map((cat, idx) => (
          <section key={idx} className="mb-40">
            <h2 className="font-heading text-gold text-2xl uppercase tracking-[0.4em] mb-20 text-center">{cat.title}</h2>
            <div className="space-y-24">
              {cat.items.map((item, i) => (
                <div key={i} className="max-w-2xl mx-auto text-center group">
                  <div className="mb-4 overflow-hidden">
                    <h3 className="font-heading text-4xl md:text-5xl text-white group-hover:text-gold transition-all duration-700 lowercase italic tracking-tight">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-white/30 text-[11px] uppercase tracking-[0.3em] mb-6 font-light">{item.desc}</p>
                  <span className="text-gold font-sans text-sm tracking-widest opacity-80">€{item.price}</span>
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