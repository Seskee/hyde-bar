import 'server-only' // Sigurnost: ovo se izvršava samo na serveru

const dictionaries = {
  hr: () => import('@/dictionaries/hr.json').then((module) => module.default),
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  de: () => import('@/dictionaries/de.json').then((module) => module.default),
  it: () => import('@/dictionaries/it.json').then((module) => module.default),
}

export const getDictionary = async (locale: 'hr' | 'en' | 'de' | 'it') => 
  dictionaries[locale]()