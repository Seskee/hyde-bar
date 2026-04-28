import 'server-only'
import type { Locale, Dictionary } from '@/types'

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  hr: () => import('@/dictionaries/hr.json').then((module) => module.default),
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  de: () => import('@/dictionaries/de.json').then((module) => module.default),
  it: () => import('@/dictionaries/it.json').then((module) => module.default),
}

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  const safeLocale = ['hr', 'en', 'de', 'it'].includes(locale) ? (locale as Locale) : 'hr'
  return dictionaries[safeLocale]()
}