import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

const locales = ['hr', 'en', 'de', 'it'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages = locales.map(locale => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1,
    alternates: {
      languages: Object.fromEntries(locales.map(l => [l, `${SITE_URL}/${l}`])),
    },
  }))

  const menuPages = locales.map(locale => ({
    url: `${SITE_URL}/${locale}/menu`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
    alternates: {
      languages: Object.fromEntries(locales.map(l => [l, `${SITE_URL}/${l}/menu`])),
    },
  }))

  return [...mainPages, ...menuPages]
}