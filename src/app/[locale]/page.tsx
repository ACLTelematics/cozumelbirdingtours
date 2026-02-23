import { useTranslations } from 'next-intl'
import Hero from '@/components/home/Hero'
import FeaturedTours from '@/components/home/FeaturedTours'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Testimonials from '@/components/home/Testimonials'
import HomeCTA from '@/components/home/HomeCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedTours />
      <WhyChooseUs />
      <Testimonials />
      <HomeCTA />
    </>
  )
}
