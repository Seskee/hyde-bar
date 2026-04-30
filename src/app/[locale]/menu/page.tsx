import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { getDictionary } from '@/lib/get-dictionary'
import { SITE_URL } from '@/lib/constants'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  return {
    title: `${dict.menuPage.title} | HYDE bar & dine`,
    description: dict.seo.menuDescription,
    alternates: {
      canonical: `${SITE_URL}/${locale}/menu`,
      languages: {
        'x-default': `${SITE_URL}/hr/menu`,
        'hr': `${SITE_URL}/hr/menu`,
        'en': `${SITE_URL}/en/menu`,
        'de': `${SITE_URL}/de/menu`,
        'it': `${SITE_URL}/it/menu`,
      },
    },
    openGraph: {
      title: `${dict.menuPage.title} | HYDE bar & dine`,
      description: dict.seo.menuDescription,
      url: `${SITE_URL}/${locale}/menu`,
      siteName: 'HYDE bar & dine',
      images: [{ url: `${SITE_URL}/images/interijer3.webp`, width: 1200, height: 630 }],
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${dict.menuPage.title} | HYDE bar & dine`,
      description: dict.seo.menuDescription,
      images: [`${SITE_URL}/images/interijer3.webp`],
    },
  }
}

const SECTION_BACKGROUNDS = ['bg-[#0a1a0d]', 'bg-[#111111]']

export default async function MenuPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  const formatPrice = (price: string) => locale === 'en' ? `€${price}` : `${price} €`

  const categories = [
    {
      title: dict.menuPage.starters,
      items: [
        { name: 'Ember-Roasted Maitake', desc: 'Black garlic emulsion, wild onion ash, cured egg yolk',    price: '24' },
        { name: 'Venison Tartare',        desc: 'Juniper berry, fermented plum, smoked marrow toast',       price: '32' },
        { name: 'Hokkaido Scallop',       desc: 'Green apple dashi, finger lime, cold-pressed shiso oil',   price: '28' },
      ],
    },
    {
      title: dict.menuPage.mains,
      items: [
        { name: 'Aged Ribeye',        desc: '28-day aged Black Angus, bone marrow jus, roasted garlic',  price: '42' },
        { name: 'Black Cod Misoyaki', desc: 'Turnip dashi, compressed kelp, sea bean',                   price: '38' },
        { name: 'Duck Breast',        desc: 'Blackberry gastrique, sunchoke purée, charred endive',      price: '36' },
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar dict={dict.navbar} />

      {/* Hero header */}
      <div className="bg-hyde-bg pt-64 pb-24 px-6">
        <header className="max-w-7xl mx-auto text-center">
          <h1 className="font-heading text-8xl md:text-[12rem] italic text-white lowercase leading-none tracking-tighter">
            {dict.menuPage.title}
          </h1>
          <p className="text-gold text-[13px] md:text-[16px] tracking-[1.2em] md:tracking-[1.5em] uppercase mt-16 opacity-90 font-light ml-[1.5em]">
            {dict.menuPage.subtitle}
          </p>
          <div className="w-px h-24 bg-gradient-to-b from-gold/40 to-transparent mx-auto mt-16 opacity-30" />
        </header>
      </div>

      {/* Kategorije */}
      {categories.map((cat, sectionIndex) => (
        <section
          key={sectionIndex}
          className={`${SECTION_BACKGROUNDS[sectionIndex % SECTION_BACKGROUNDS.length]} py-24`}
        >
          <div className="max-w-4xl mx-auto px-6">

            {/* Naslov kategorije */}
            <div className="flex items-center gap-6 mb-20">
              <div className="flex-1 md:flex-none md:w-8 h-px bg-gold/40" />
              <span className="text-gold text-[12px] md:text-[13px] tracking-[0.8em] uppercase opacity-80 font-medium shrink-0">
                {cat.title}
              </span>
              <div className="flex-1 h-px bg-white/15" />
            </div>

            {/* Stavke */}
            <div>
              {cat.items.map((item, i) => (
                <div key={i}>
                  <div className="group cursor-default py-7 active:opacity-70 transition-opacity duration-150">

                    {/* Naziv + cijena: uvijek u istom redu, na svim veličinama ekrana */}
                    <div className="flex items-baseline justify-between gap-4 mb-3">
                      <h3 className="font-heading text-[22px] md:text-4xl text-white group-hover:text-gold transition-colors duration-500 lowercase italic tracking-tight leading-snug">
                        {item.name}
                      </h3>
                      <span className="font-sans text-gold text-base md:text-lg shrink-0 tabular-nums">
                        {formatPrice(item.price)}
                      </span>
                    </div>

                    {/* Opis */}
                    <p className="text-[#d4cbb8] text-[14px] md:text-[13px] tracking-[0.06em] font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Razdjelnik */}
                  {i < cat.items.length - 1 && (
                    <div className="flex items-center gap-4">
                      <div className="flex-1 h-px bg-white/15" />
                      <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                      <div className="flex-1 h-px bg-white/15" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Quote */}
      <div className={`${SECTION_BACKGROUNDS[categories.length % SECTION_BACKGROUNDS.length]} py-32`}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-px h-12 bg-gold/30 mx-auto mb-12" />
          <p className="font-heading text-2xl md:text-3xl text-gold/70 italic leading-relaxed">
            {dict.menu.quote}
          </p>
          <div className="w-px h-12 bg-gold/30 mx-auto mt-12" />
        </div>
      </div>

      <Footer dict={dict.footer} />
    </main>
  )
}