import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import GallerySection from '@/components/sections/GallerySection'
import LocationSection from '@/components/sections/LocationSection'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <GallerySection />
      <LocationSection />
      <Footer />
    </main>
  )
}