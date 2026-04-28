import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['hr', 'en', 'de', 'it']
const defaultLocale = 'hr'

// 1. FUNKCIJA KOJA ČITA JEZIK IZ KORISNIKOVOG MOBITELA/PREGLEDNIKA
function getPreferredLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get('accept-language')
  if (!acceptLanguage) return defaultLocale

  const preferredLangs = acceptLanguage
    .split(',')
    .map(lang => lang.split(';')[0].trim().substring(0, 2).toLowerCase())

  for (let lang of preferredLangs) {
    // SENIOR TRIK: Grupiranje balkanskih jezika na 'hr'
    if (['bs', 'sr', 'me', 'cnr'].includes(lang)) {
      lang = 'hr'
    }

    if (locales.includes(lang)) {
      return lang
    }
  }

  // Svi ostali (Španjolci, Francuzi, itd.) idu na engleski
  return 'en'
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Provjeri ima li putanja već jezik u sebi
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // 2. OVDJE SE DETEKTIRA KORISNIKOV JEZIK
  // Ako korisnik upiše samo "localhost:3000" ili "hydebar.ba" bez jezika:
  const locale = getPreferredLocale(request)

  // 3. AUTOMATSKO PREUSMJERAVANJE
  request.nextUrl.pathname = `/${locale}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  // Ignoriraj slike i Next.js sistemske datoteke
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
}