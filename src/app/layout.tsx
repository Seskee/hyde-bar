import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import '../styles/globals.css'
import { SITE_NAME, SITE_DESCRIPTION, CONTACT } from '@/lib/constants'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
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
    default: `${SITE_NAME} — Ljubuški`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hr" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="bg-[#070e08] text-[#e8e2d6] antialiased">
        {children}
      </body>
    </html>
  )
}