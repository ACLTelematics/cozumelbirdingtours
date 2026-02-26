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
      {/* Slider */}
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

      {/* Tira delgada horizontal en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-white/20 backdrop-blur-md py-3">
        <div className="flex items-center justify-center gap-6 flex-wrap px-4">
          <p className="text-[#1FB6B1] font-medium tracking-widest uppercase text-sm">
            {t('subtitle')}
          </p>
          <span className="text-white/40 hidden md:block">|</span>
          <h1 className="text-xl md:text-2xl font-bold text-white leading-tight">
            {t('title')}
          </h1>
          <span className="text-white/40 hidden md:block">|</span>
          <p className="text-sm text-gray-200">
            {t('description')}
          </p>
        </div>

        {/* Dots dentro de la tira */}
        <div className="flex justify-center gap-2 mt-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === selectedIndex ? 'bg-white w-6' : 'bg-white/50 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}