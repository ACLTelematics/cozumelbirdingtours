import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'

const tours = [
  {
    slug: 'morning-birding',
    duration: '4h',
    price: 120,
    maxPeople: 6,
    location: 'East Coast',
    emoji: '🌅',
  },
  {
    slug: 'full-day-adventure',
    duration: '8h',
    price: 220,
    maxPeople: 4,
    location: 'Full Island',
    emoji: '🗺️',
  },
  {
    slug: 'photography-tour',
    duration: '6h',
    price: 180,
    maxPeople: 3,
    location: 'Best Spots',
    emoji: '📷',
  },
]

const tourNames: Record<string, Record<string, string>> = {
  'morning-birding': { en: 'Morning Birding Tour', es: 'Tour Matutino' },
  'full-day-adventure': { en: 'Full Day Adventure', es: 'Aventura Día Completo' },
  'photography-tour': { en: 'Photography Tour', es: 'Tour Fotográfico' },
}

const tourDesc: Record<string, Record<string, string>> = {
  'morning-birding': {
    en: 'Early morning birding focusing on Cozumel endemic species.',
    es: 'Avistamiento matutino enfocado en especies endémicas de Cozumel.',
  },
  'full-day-adventure': {
    en: 'Complete island coverage visiting multiple habitats.',
    es: 'Cobertura completa de la isla visitando múltiples hábitats.',
  },
  'photography-tour': {
    en: 'Specialized tour for bird photographers.',
    es: 'Tour especializado para fotógrafos de aves.',
  },
}

export default function FeaturedTours() {
  const t = useTranslations('home.featured')
  const td = useTranslations('tours')
  const locale = useLocale()

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#1565C0] mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-500">{t('subtitle')}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.slug}
              className="bg-[#FAFAFA] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-[#1FB6B1] to-[#2E7D32] flex items-center justify-center">
                <span className="text-6xl">{tour.emoji}</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#263238] mb-2">
                  {tourNames[tour.slug][locale]}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {tourDesc[tour.slug][locale]}
                </p>

                {/* Meta */}
                <div className="flex gap-4 text-sm text-gray-500 mb-6">
                  <span>⏱ {tour.duration}</span>
                  <span>📍 {tour.location}</span>
                  <span>👥 {locale === 'en' ? 'Max' : 'Máx'} {tour.maxPeople}</span>
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#1565C0]">
                    ${tour.price} <span className="text-sm font-normal text-gray-400">USD</span>
                  </span>
                  <Link
                    href={`/${locale}/tours/${tour.slug}`}
                    className="bg-[#F57C00] hover:bg-[#1FB6B1] text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
                  >
                    {td('viewDetails')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
