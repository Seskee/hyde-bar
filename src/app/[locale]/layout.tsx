import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import '@/styles/globals.css'
import { SITE_NAME, SITE_URL } from '@/lib/constants'
import { getDictionary } from '@/lib/get-dictionary'

// Named imports
import { CustomCursor } from '@/components/ui/CustomCursor'
import { MobileActions } from '@/components/layout/MobileActions'
import { Preloader } from '@/components/ui/Preloader'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import ClientWrapper from '@/components/layout/ClientWrapper'

const cormorant = Cormorant_Garamond({ subsets: ['latin', 'latin-ext'], variable: '--font-cormorant', display: 'swap' })
const jost = Jost({ subsets: ['latin', 'latin-ext'], variable: '--font-jost', display: 'swap' })

export default async function RootLayout({ children, params }: { children: React.ReactNode, params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return (
    <html lang={locale} className={`${cormorant.variable} ${jost.variable} scroll-smooth`}>
      <body className="bg-[#0c0c0c] text-[#e8e2d6] antialiased overflow-x-hidden relative">
        
        {/* Prvo UI koji mora biti IZNAD svega */}
        <CustomCursor />
        <MobileActions dict={dict.actions} />
        <ScrollProgress />
        <Preloader />

        {/* Glavni sadržaj */}
        <ClientWrapper>{children}</ClientWrapper>

        <div className="grain-overlay" style={{ pointerEvents: 'none' }} />
      </body>
    </html>
  )
}