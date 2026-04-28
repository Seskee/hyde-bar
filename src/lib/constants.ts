// FIX #1: SITE_URL ide u .env.local, nikad hardcoded u kodu
export const SITE_NAME = 'HYDE bar & dine'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hydebar.ba'
export const SITE_DESCRIPTION =
  'Premium cocktail bar & fine dining experience in the heart of Ljubuški. Where botanical noir meets culinary excellence.'

// FIX #7: Konstante za structured data umjesto hardcoded vrijednosti
export const GOOGLE_RATING = 4.6
export const GOOGLE_REVIEW_COUNT = 150 // ← ažuriraj periodički

export const CONTACT = {
  address: 'Zvonimirova, Ljubuški 88320',
  phone: '+387 63 992 444',
  email: 'hello@hydebar.ba',

  // ✅ ISPRAVNI embed format — pb= format koji Google stvarno prikazuje
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.4284523676235!2d17.548189776646837!3d43.19673170000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134b1125abb01313%3A0x4b629248cae3f543!2sHyde%20bar%20%26%20dine!5e0!3m2!1shr!2sba!4v1714300000000!5m2!1shr!2sba',

  // Link za otvaranje u Google Maps aplikaciji
  googleMapsPin:
    'https://www.google.com/maps/place/Hyde+bar+%26+dine/@43.1967317,17.5505915,17z/data=!3m1!4b1!4m6!3m5!1s0x134b1125abb01313:0x4b629248cae3f543!8m2!3d43.1967317!4d17.5505915!16s%2Fg%2F11vwnkfr5p',

  googleReviewsUrl:
    'https://search.google.com/local/writereview?placeid=ChIJExOwqyURSxMRQ_XjykiSYks',
}