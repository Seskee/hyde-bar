import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          hr: `${SITE_URL}/hr`,
          en: `${SITE_URL}/en`,
          de: `${SITE_URL}/de`,
          it: `${SITE_URL}/it`
        },
      },
    },
  ]
}
