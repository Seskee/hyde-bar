import type { Metadata } from 'next'
import CustomCursor from '@/components/ui/CustomCursor'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import '@/styles/globals.css'
import { SITE_NAME, SITE_URL, GOOGLE_REVIEW_COUNT, GOOGLE_RATING } from '@/lib/constants'
import { getDictionary } from '@/lib/get-dictionary'
import ClientWrapper from '@/components/layout/ClientWrapper'

// DODANO: 'latin-ext' za ispravan prikaz hrvatskih znakova
const cormorant = Cormorant_Garamond({ subsets: ['latin', 'latin-ext'], weight: ['300', '400', '500', '600', '700'], variable: '--font-cormorant', display: 'swap' })
const jost = Jost({ subsets: ['latin', 'latin-ext'], weight: ['200', '300', '400', '500'], variable: '--font-jost', display: 'swap' })

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  return {
    title: { default: `${SITE_NAME} — Ljubuški`, template: `%s | ${SITE_NAME}` },
    description: dict.seo.description,
    icons: { icon: '/favicon.ico' },
    alternates: { canonical: `${SITE_URL}/${locale}` },
    openGraph: {
      title: `${SITE_NAME} — Ljubuški`, description: dict.seo.description, url: `${SITE_URL}/${locale}`, siteName: SITE_NAME,
      images: [{ url: `${SITE_URL}/images/interijer1.webp`, width: 1200, height: 630, alt: `${SITE_NAME} Interior` }],
      locale: locale, type: 'website',
    },
    twitter: { card: 'summary_large_image', title: `${SITE_NAME} — Ljubuški`, description: dict.seo.description, images: [`${SITE_URL}/images/interijer1.webp`] },
  }
}

export default async function RootLayout({ children, params }: { children: React.ReactNode, params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  const jsonLd = {
    "@context": "https://schema.org", "@type": "Restaurant", "name": SITE_NAME, "image": `${SITE_URL}/images/interijer1.webp`,
    "description": dict.seo.description, "url": SITE_URL,
    "address": { "@type": "PostalAddress", "streetAddress": "Zvonimirova", "addressLocality": "Ljubuški", "postalCode": "88320", "addressCountry": "BA" },
    "telephone": "+38763992444", "servesCuisine": "Fine Dining, Contemporary, Cocktail Bar", "priceRange": "$$$",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": GOOGLE_RATING.toString(), "reviewCount": GOOGLE_REVIEW_COUNT },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "07:00", "closes": "01:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "01:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "12:00", "closes": "00:00" }
    ]
  }

  return (
    <html lang={locale} className={`${cormorant.variable} ${jost.variable} scroll-smooth`}>
      <body className="bg-hyde-bg text-[#e8e2d6] antialiased">
        <noscript>
          <div className="fixed top-0 left-0 w-full z-1000 bg-gold text-hyde-bg px-6 py-2 text-center text-[10px] uppercase tracking-widest font-medium">
            {/* @ts-ignore */}
            {dict.noScript || "Za potpuno iskustvo, omogućite JavaScript."}
          </div>
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <CustomCursor />
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  )
}