'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useState } from 'react'

const slides = [
  { image: '/images/hero/slide-1.jpg', alt: 'Cozumel birding tour' },
  { image: '/images/hero/slide-2.jpg', alt: 'Endemic birds Cozumel' },
  { image: '/images/hero/slide-3.jpg', alt: 'Bird watching Cozumel' },
  { image: '/images/hero/slide-4.jpg', alt: 'Tropical birds Mexico' },
  { image: '/images/hero/slide-5.jpg', alt: 'Nature tour Cozumel' },
]

export default function Hero() {
  const t = useTranslations('home.hero')
  const locale = useLocale()
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    })
  }, [emblaApi])

  return (
    <section className="relative h-[600px] overflow-hidden">
      <div ref={emblaRef} className="h-full">
        <div className="flex h-full">
          {slides.map((slide, i) => (
            <div key={i} className="relative flex-none w-full h-full">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute bottom-0 left-0 right-0 z-10 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-black/40 backdrop-blur-sm rounded-2xl px-10 py-8">
            <p className="text-[#1FB6B1] font-medium tracking-widest uppercase text-sm mb-3">
              {t('subtitle')}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {t('title')}
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-8">
              {t('description')}
            </p>
            <Link
              href={`/${locale}/tours`}
              className="inline-block bg-[#F57C00] hover:bg-[#1FB6B1] text-white font-semibold px-10 py-3 rounded-full text-base transition-colors duration-300"
            >
              {t('cta')}
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === selectedIndex ? 'bg-white w-6' : 'bg-white/50 w-2'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
