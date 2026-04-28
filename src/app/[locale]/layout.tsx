import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import '@/styles/globals.css'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants'
import ClientWrapper from '@/components/layout/ClientWrapper'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
})

// SEO Metapodaci sa Open Graph slikom za WhatsApp / Instagram
export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Ljubuški`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: `${SITE_NAME} — Ljubuški`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/images/interijer1.webp`, // Apsolutni link potreban za WhatsApp/FB
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} Interior`,
      },
    ],
    locale: 'hr_HR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // OVO JE JSON-LD SCHEMA ZA RESTORAN (Google SEO Booster)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": SITE_NAME,
    "image": `${SITE_URL}/images/interijer1.webp`,
    "description": SITE_DESCRIPTION,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Zvonimirova",
      "addressLocality": "Ljubuški",
      "postalCode": "88320",
      "addressCountry": "BA"
    },
    "telephone": "+38763992444",
    "servesCuisine": "Fine Dining, Contemporary, Cocktail Bar",
    "priceRange": "$$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.6",
      "reviewCount": "150" // Možeš ažurirati broj s vremena na vrijeme
    }
  }

  return (
    <html lang="hr" className={`${cormorant.variable} ${jost.variable} scroll-smooth`}>
      <body className="bg-hyde-bg text-[#e8e2d6] antialiased">
        
        {/* INJEKTIRANJE SCHEMA MARKUPA ZA GOOGLE */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Wrapper koji brine o Lenisu i animacijama */}
        <ClientWrapper>
          {children}
        </ClientWrapper>
        
      </body>
    </html>
  )
}