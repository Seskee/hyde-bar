import type { NextConfig } from 'next'

const isDev = process.env.NODE_ENV === 'development'

// FIX #2: CSP koristi nonce umjesto 'unsafe-inline' za produkciju
// Nonce se generira u middleware.ts i čita u layout.tsx
// U dev modu zadržavamo 'unsafe-eval' za Next.js hot reload
const getCspHeader = (nonce: string) => `
  default-src 'self';
  script-src 'self' 'nonce-${nonce}' ${isDev ? "'unsafe-eval'" : ''};
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https:;
  font-src 'self' data: https://fonts.gstatic.com;
  frame-src 'self' https://www.google.com https://maps.google.com https://googleusercontent.com;
  connect-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  compress: true,
  poweredByHeader: false,
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        // Napomena: CSP s nonceom se postavlja dinamički u layout.tsx
        // Ovi statički headeri su fallback bez nonce-a
        // Za potpunu nonce implementaciju, CSP header postavi u middleware
      ],
    },
    {
      source: '/fonts/(.*)',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
    },
    {
      source: '/images/(.*)',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
    },
  ],
}

export default nextConfig
export { getCspHeader }