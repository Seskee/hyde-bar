import { getDictionary } from '@/lib/get-dictionary'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import GallerySection from '@/components/sections/GallerySection'
import ReviewsSection from '@/components/sections/ReviewsSection'
import LocationSection from '@/components/sections/LocationSection'
import Footer from '@/components/layout/Footer'
import { SITE_URL, CONTACT } from '@/lib/constants'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return {
    title: dict.seo.title, description: dict.seo.description, keywords: dict.seo.keywords,
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: { 'x-default': `${SITE_URL}/hr`, 'hr': `${SITE_URL}/hr`, 'en': `${SITE_URL}/en`, 'de': `${SITE_URL}/de`, 'it': `${SITE_URL}/it` },
    },
    openGraph: { 
      title: dict.seo.title, 
      description: dict.seo.description, 
      url: `${SITE_URL}/${locale}`, 
      siteName: 'HYDE bar & dine', 
      images: [{ url: `${SITE_URL}/images/og-image.jpg`, width: 1200, height: 630 }], 
      locale: locale, 
      type: 'website' 
    },
    twitter: { 
      card: 'summary_large_image', 
      title: dict.seo.title, 
      description: dict.seo.description, 
      images: [`${SITE_URL}/images/og-image.jpg`] 
    },
  }
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  // FIX 1: JSON-LD Structured Data za Restorane (Savršen SEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "HYDE bar & dine",
    "image": `${SITE_URL}/images/og-image.jpg`,
    "url": SITE_URL,
    "telephone": CONTACT.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Zvonimirova",
      "addressLocality": "Ljubuški",
      "postalCode": "88320",
      "addressCountry": "BA"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.6",
      "reviewCount": "150"
    },
    "servesCuisine": "Fine Dining, Cocktails",
    "priceRange": "$$$"
  }

  return (
    <main>
      {/* Skripta koja se ne vidi na ekranu, ali ju Google čita */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Navbar dict={dict.navbar} />
      <Hero dict={dict.hero} />
      <About dict={dict.about} />
      <GallerySection dict={dict.gallery} />
      <ReviewsSection dict={dict.reviews} />
      <LocationSection dict={dict.location} actionsDict={dict.actions} />
      <Footer dict={dict.footer} />
    </main>
  )
}