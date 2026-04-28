import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['hr', 'en', 'de', 'it']
const defaultLocale = 'hr'

function getPreferredLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get('accept-language')
  if (!acceptLanguage) return defaultLocale
  const preferredLangs = acceptLanguage.split(',').map(lang => lang.split(';')[0].trim().substring(0, 2).toLowerCase())
  for (let lang of preferredLangs) {
    if (['bs', 'sr', 'me', 'cnr'].includes(lang)) lang = 'hr'
    if (locales.includes(lang)) return lang
  }
  return 'en'
}

export function middleware(request: NextRequest) {
  // 1. NONCE ZA XSS ZAŠTITU (Sigurnost)
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
  
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  let response = NextResponse.next()

  // 2. I18N ROUTING
  if (!pathnameHasLocale && !pathname.match(/\.(.*)$/)) {
    const locale = getPreferredLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname === '/' ? '' : pathname}`
    response = NextResponse.redirect(request.nextUrl)
  }

  // 3. POSTAVLJANJE CSP HEADERA
  response.headers.set('x-nonce', nonce)
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' ${process.env.NODE_ENV === 'development' ? "'unsafe-eval'" : ''};
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https:;
    font-src 'self' data: https://fonts.gstatic.com;
    frame-src 'self' https://www.google.com https://googleusercontent.com;
    connect-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `
  response.headers.set('Content-Security-Policy', cspHeader.replace(/\s{2,}/g, ' ').trim())
  
  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
}