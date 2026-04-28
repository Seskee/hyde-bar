import { getDictionary } from '@/lib/get-dictionary'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import GallerySection from '@/components/sections/GallerySection'
import ReviewsSection from '@/components/sections/ReviewsSection'
import LocationSection from '@/components/sections/LocationSection'
import Footer from '@/components/layout/Footer'
import { SITE_URL } from '@/lib/constants'

import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale as any)

  return {
    title: dict.seo.title,
    description: dict.seo.description,
    keywords: ['restoran Ljubuški', 'fine dining Hercegovina', 'HYDE bar', 'kokteli', 'dry aged meso', 'botanical noir'],
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        // ← ISPRAVKA #16: dodan x-default
        'x-default': `${SITE_URL}/hr`,
        'hr': `${SITE_URL}/hr`,
        'en': `${SITE_URL}/en`,
        'de': `${SITE_URL}/de`,
        'it': `${SITE_URL}/it`,
      },
    },
    openGraph: {
      title: dict.seo.title,
      description: dict.seo.description,
      url: `${SITE_URL}/${locale}`,
      siteName: 'HYDE bar & dine',
      images: [
        {
          // ← ISPRAVKA #15: apsolutni URL za WhatsApp/FB
          url: `${SITE_URL}/images/interijer1.webp`,
          width: 1200,
          height: 630,
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.seo.title,
      description: dict.seo.description,
      images: [`${SITE_URL}/images/interijer1.webp`],
    },
  }
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale as any)

  return (
    <main>
      <Navbar dict={dict.navbar} />
      <Hero dict={dict.hero} />
      <About dict={dict.about} />
      <GallerySection dict={dict.gallery} />
      <ReviewsSection dict={dict.reviews} />
      <LocationSection dict={dict.location} />
      <Footer dict={dict.footer} />
    </main>
  )
}