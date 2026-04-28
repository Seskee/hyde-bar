import { getDictionary } from '@/lib/get-dictionary'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import GallerySection from '@/components/sections/GallerySection'
import ReviewsSection from '@/components/sections/ReviewsSection'
import LocationSection from '@/components/sections/LocationSection'
import Footer from '@/components/layout/Footer'

import type { Metadata } from 'next'

// OVO GENERIRA SEO ZA SVAKI JEZIK POSEBNO
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale as any)

  return {
    title: dict.seo.title,
    description: dict.seo.description,
    keywords: ['restoran Ljubuški', 'fine dining Hercegovina', 'HYDE bar', 'kokteli', 'dry aged meso', 'botanical noir'],
    // Ovo je najvažnije za Google - povezuje sve jezike!
    alternates: {
      languages: {
        'hr': '/hr',
        'en': '/en',
        'de': '/de',
        'it': '/it',
      },
    },
    openGraph: {
      title: dict.seo.title,
      description: dict.seo.description,
      url: `https://hydebar.ba/${locale}`,
      siteName: 'HYDE bar & dine',
      images: [
        {
          url: '/images/interijer1.webp', // Slika koja se prikazuje kad pošalješ link na WhatsApp
          width: 1200,
          height: 630,
        },
      ],
      locale: locale,
      type: 'website',
    },
  }
}

// U Next.js 15, params je Promise, pa ga moramo "otpakirati"
export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  // 1. Čitamo koji je jezik u URL-u (npr. 'en' iz hydebar.ba/en)
  const { locale } = await params
  
  // 2. Povlačimo točan JSON file (rječnik) za taj jezik
  const dict = await getDictionary(locale as any)

  return (
    <main>
      <Navbar dict={dict.navbar} />
      
      {/* 3. Šaljemo točno određeni dio rječnika u svaku komponentu */}
      <Hero dict={dict.hero} />
      <About dict={dict.about} />
      <GallerySection dict={dict.gallery} />
      <ReviewsSection dict={dict.reviews} />
      <LocationSection dict={dict.location} />
      <Footer dict={dict.footer} />
    </main>
  )
}