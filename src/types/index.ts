export interface MenuItem {
  name: string
  description: string
  price: string
  tag?: 'new' | 'signature' | 'vegetarian'
}

export interface MenuCategory {
  id: string
  label: string
  items: MenuItem[]
}

export interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
}

export interface NavLink {
  label: string
  href: string
}

export type Locale = 'hr' | 'en'
