import ThemeProvider from '@/components/ThemeProvider'
import ScrollProgress from '@/components/ScrollProgress'
import BackToTop from '@/components/BackToTop'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Marquee from '@/components/sections/Marquee'
import Products from '@/components/sections/Products'
import Process from '@/components/sections/Process'
import About from '@/components/sections/About'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Products />
          <Process />
          <About />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  )
}
