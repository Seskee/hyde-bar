import hrDict from '@/dictionaries/hr.json'

export type Locale = 'hr' | 'en' | 'de' | 'it'
export type Dictionary = typeof hrDict
export type ActionsDict = Dictionary['actions']

// Izvedeni tipovi za komponente kako bismo izbjegli 'any'
export type NavbarDict = Dictionary['navbar']
export type HeroDict = Dictionary['hero']
export type AboutDict = Dictionary['about']
export type GalleryDict = Dictionary['gallery']
export type ReviewsDict = Dictionary['reviews']
export type LocationDict = Dictionary['location']
export type MenuDict = Dictionary['menu']
export type FooterDict = Dictionary['footer']