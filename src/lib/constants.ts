import type { MenuCategory, NavLink } from '@/types'

export const SITE_NAME = 'HYDE bar & dine'
export const SITE_URL = 'https://hydebar.hr'
export const SITE_DESCRIPTION =
  'A sanctuary of flavour and atmosphere in the heart of Varaždin. Premium cocktails, fine dining, and unforgettable evenings.'

export const NAV_LINKS: NavLink[] = [
  { label: 'The Experience', href: '#experience' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
]

export const MENU_DATA: MenuCategory[] = [
  {
    id: 'starters',
    label: 'Starters',
    items: [
      {
        name: 'Beef Tartare',
        description: 'Hand-cut sirloin, smoked egg yolk, caper vinaigrette, toasted brioche',
        price: '16 €',
        tag: 'signature',
      },
      {
        name: 'Burrata & Heirloom Tomato',
        description: 'Stracciatella, aged balsamic, wild basil oil, Maldon salt',
        price: '14 €',
      },
      {
        name: 'Seared Scallops',
        description: 'Cauliflower purée, pancetta crisp, hazelnut brown butter, micro herbs',
        price: '19 €',
        tag: 'new',
      },
      {
        name: 'Mushroom Velouté',
        description: 'Wild porcini, truffle cream, chestnut foam, chive oil',
        price: '12 €',
        tag: 'vegetarian',
      },
      {
        name: 'Duck Liver Terrine',
        description: 'Cognac reduction, fig chutney, Melba toast, pickled onion pearls',
        price: '17 €',
      },
    ],
  },
  {
    id: 'mains',
    label: 'Main Courses',
    items: [
      {
        name: 'Dry-Aged Ribeye 300g',
        description: '28-day aged Black Angus, bone marrow jus, roasted garlic, truffle fries',
        price: '38 €',
        tag: 'signature',
      },
      {
        name: 'Pan-Seared Sea Bass',
        description: 'Saffron beurre blanc, fennel confit, samphire, citrus gremolata',
        price: '29 €',
      },
      {
        name: 'Roasted Duck Breast',
        description: 'Cherry jus, parsnip purée, glazed turnip, duck skin tuile',
        price: '32 €',
      },
      {
        name: 'Slow-Braised Lamb Shoulder',
        description: '48-hour rosemary lamb, pommes aligot, roasted root vegetables',
        price: '34 €',
      },
      {
        name: 'Forest Mushroom Risotto',
        description: 'Aged Parmigiano-Reggiano, black truffle shavings, crispy sage',
        price: '22 €',
        tag: 'vegetarian',
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      {
        name: 'Valrhona Chocolate Fondant',
        description: '70% dark chocolate, tonka bean ice cream, hazelnut praline',
        price: '11 €',
        tag: 'signature',
      },
      {
        name: 'Crème Brûlée Classique',
        description: 'Madagascan vanilla, caramelised crust, seasonal berry compote',
        price: '9 €',
      },
      {
        name: 'Mille-Feuille',
        description: 'Caramelised puff pastry, Chantilly cream, passion fruit curd',
        price: '10 €',
        tag: 'new',
      },
      {
        name: 'Artisan Cheese Board',
        description: 'Three artisan cheeses, honeycomb, walnut crisp, grape chutney',
        price: '14 €',
      },
    ],
  },
]

export const OPENING_HOURS = [
  { days: 'Mon – Thu', hours: '12:00 – 23:00' },
  { days: 'Fri – Sat', hours: '12:00 – 01:00' },
  { days: 'Sunday', hours: '12:00 – 22:00' },
]

export const CONTACT = {
  address: 'Ulica Kralja Tomislava 12, 42000 Varaždin',
  phone: '+385 42 000 000',
  email: 'hello@hydebar.hr',
  instagram: 'https://instagram.com/hydebardine',
  facebook: 'https://facebook.com/hydebardine',
}
