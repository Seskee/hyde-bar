'use client'
import type { MenuDict } from '@/types'

// DODAJ NOVU SEKCIJU OVDJE — sve ostalo se automatski hendla
const MENU_SECTIONS = [
  {
    id: 'starters',
    title: 'Starters',
    items: [
      { name: 'Ember-Roasted Maitake', desc: 'Black garlic emulsion, cured egg yolk, wild onion ash', price: '24' },
      { name: 'Hokkaido Scallop Crudo', desc: 'Green apple dashi, finger lime, cold-pressed shiso oil', price: '28' },
      { name: 'Venison Tartare', desc: 'Juniper berry, fermented plum, smoked marrow toast', price: '32' },
    ]
  },
  {
    id: 'mains',
    title: 'Main Course',
    items: [
      { name: 'Dry-Aged Côte de Boeuf', desc: 'Bone marrow butter, charred leek, black truffle jus', price: '68' },
      { name: 'Wild Sea Bass', desc: 'Saffron beurre blanc, samphire, compressed cucumber', price: '52' },
      { name: 'Aged Duck Breast', desc: 'Fermented cherry, celeriac purée, duck fat crouton', price: '48' },
    ]
  },
]

// Naizmjenične pozadine — dodaj koliko god sekcija, automatski se izmjenjuju
const SECTION_BACKGROUNDS = [
  'bg-[#07120a]',   // tamno zelena
  'bg-hyde-bg',     // crna
]

export default function MenuSection({ dict }: { dict: MenuDict }) {
  return (
    <>
      {/* Hero header — iznad sekcija */}
      <div className="bg-hyde-bg pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-gold text-[10px] tracking-[0.8em] uppercase opacity-70">{dict.badge}</span>
          <h2 className="font-heading text-5xl md:text-7xl text-white mt-4 italic lowercase">{dict.title}</h2>
          <div className="w-20 h-px bg-gold/30 mx-auto mt-8" />
        </div>
      </div>

      {/* Sekcije s naizmjeničnim pozadinama */}
      {MENU_SECTIONS.map((section, sectionIndex) => (
        <section
          key={section.id}
          id={`menu-${section.id}`}
          className={`${SECTION_BACKGROUNDS[sectionIndex % SECTION_BACKGROUNDS.length]} py-24 transition-colors duration-500`}
        >
          {/* Gradient prijelaz s prethodne sekcije */}
          {sectionIndex > 0 && (
            <div className={`h-24 -mt-24 mb-0 bg-gradient-to-b pointer-events-none
              ${sectionIndex % 2 === 0 ? 'from-hyde-bg to-[#07120a]' : 'from-[#07120a] to-hyde-bg'}`}
            />
          )}

          <div className="max-w-4xl mx-auto px-6">

            {/* Naslov sekcije */}
            <div className="flex items-center gap-6 mb-16">
              <div className="w-8 h-px bg-gold/40" />
              <span className="text-gold text-[10px] tracking-[0.6em] uppercase opacity-70 font-medium">
                {section.title}
              </span>
              <div className="flex-1 h-px bg-white/6" />
            </div>

            {/* Stavke menija */}
            <div>
              {section.items.map((item, i) => (
                <div key={i}>
                  <div className="group cursor-default py-8">
                    <div className="flex justify-between items-baseline mb-3">
                      <h3 className="font-heading text-2xl md:text-3xl text-white group-hover:text-gold transition-colors duration-500">
                        {item.name}
                      </h3>
                      <span className="font-sans text-gold text-lg ml-8 shrink-0">€{item.price}</span>
                    </div>
                    <p className="font-sans text-white/40 text-sm md:text-base italic max-w-md">
                      {item.desc}
                    </p>
                  </div>

                  {/* Razdjelnik — ne prikazuje se nakon zadnje stavke */}
                  {i < section.items.length - 1 && (
                    <div className="flex items-center gap-4">
                      <div className="flex-1 h-px bg-white/6" />
                      <div className="w-1 h-1 rounded-full bg-gold/30" />
                      <div className="flex-1 h-px bg-white/6" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Quote — ispod svih sekcija */}
      <div className={`${SECTION_BACKGROUNDS[(MENU_SECTIONS.length) % SECTION_BACKGROUNDS.length]} pb-32`}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-12 border border-gold/10 bg-white/2 text-center">
            <p className="font-heading text-xl text-gold italic">{dict.quote}</p>
          </div>
        </div>
      </div>
    </>
  )
}