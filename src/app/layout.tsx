import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import '@/styles/globals.css'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Luxury Bar & Fine Dining in Varaždin`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'restoran Varaždin',
    'fine dining Varaždin',
    'bar Varaždin',
    'HYDE bar',
    'cocktail bar Varaždin',
    'večera Varaždin',
    'restaurant Varaždin Croatia',
  ],
  authors: [{ name: 'HYDE bar & dine' }],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
    languages: {
      'hr-HR': '/hr',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'hr_HR',
    alternateLocale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Luxury Bar & Fine Dining`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HYDE bar & dine — Varaždin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Luxury Bar & Fine Dining`,
    description: SITE_DESCRIPTION,
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#070e08',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: '+385-42-000-000',
  email: 'hello@hydebar.hr',
  image: `${SITE_URL}/images/og-image.jpg`,
  servesCuisine: ['European', 'Fine Dining', 'Contemporary'],
  priceRange: '€€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ulica Kralja Tomislava 12',
    addressLocality: 'Varaždin',
    postalCode: '42000',
    addressCountry: 'HR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 46.3044,
    longitude: 16.3378,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday'], opens: '12:00', closes: '23:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday','Saturday'], opens: '12:00', closes: '01:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '12:00', closes: '22:00' },
  ],
  hasMenu: `${SITE_URL}/#menu`,
  acceptsReservations: true,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hr" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
