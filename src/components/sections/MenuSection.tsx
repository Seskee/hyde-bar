'use client'
import type { MenuDict } from '@/types' // Uvozimo pravi tip!

export default function MenuSection({ dict }: { dict: MenuDict }) {
  const menuItems = [
    { name: 'Ember-Roasted Maitake', desc: 'Black garlic emulsion, cured egg yolk, wild onion ash', price: '24' },
    { name: 'Hokkaido Scallop Crudo', desc: 'Green apple dashi, finger lime, cold-pressed shiso oil', price: '28' },
    { name: 'Venison Tartare', desc: 'Juniper berry, fermented plum, smoked marrow toast', price: '32' },
  ]

  return (
    <section id="menu" className="py-32 bg-hyde-bg">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-gold text-[10px] tracking-[0.5em] uppercase">{dict.badge}</span>
          <h2 className="font-heading text-5xl md:text-6xl text-white mt-4">{dict.title}</h2>
          <div className="w-20 h-px bg-gold/30 mx-auto mt-8"></div>
        </div>

        <div className="space-y-16">
          {menuItems.map((item, i) => (
            <div key={i} className="group cursor-default">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-heading text-2xl md:text-3xl text-white group-hover:text-gold transition-colors duration-500">{item.name}</h3>
                <span className="font-sans text-gold text-lg">€{item.price}</span>
              </div>
              <p className="font-sans text-white/40 text-sm md:text-base italic max-w-md border-l border-gold/20 pl-4">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 border border-gold/10 bg-white/2 text-center">
          <p className="font-heading text-xl text-gold italic">{dict.quote}</p>
        </div>
      </div>
    </section>
  )
}