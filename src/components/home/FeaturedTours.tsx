'use client'
import { useLocale } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'

const tours = [
  {
    slug: 'observacion-aves',
    image: '/images/tours/tour-1.jpg',
    emoji: '🦜',
    duration: { en: '4-5 hours', es: '4-5 horas' },
    price: '1,799',
    transport: true,
    name: { en: 'Bird Watching Tour', es: 'Tour de Observación de Aves' },
    short: {
      en: 'Discover the diversity of local birdlife with an expert local guide from Cozumel.',
      es: 'Descubre la diversidad de la avifauna local acompañado de un guía local de Cozumel.',
    },
  },
  {
    slug: 'sabor-naturaleza',
    image: '/images/tours/tour-2.jpg',
    emoji: '🌿',
    duration: { en: '5 hours', es: '5 horas' },
    price: '2,099',
    transport: true,
    name: { en: 'Cozumel Flavor & Nature', es: 'Sabor y Naturaleza de Cozumel' },
    short: {
      en: 'Cenote, Cedral village, island tour and authentic local food. A complete Cozumel experience.',
      es: 'Cenote, poblado del Cedral, vuelta a la isla y comida local auténtica. Una experiencia completa.',
    },
  },
  {
    slug: 'punta-sur',
    image: '/images/tours/tour-3.jpg',
    emoji: '🦩',
    duration: { en: '3 hours', es: '3 horas' },
    price: '2,199',
    priceNote: { en: 'Boat tour / From $1,399 walking', es: 'Tour en lancha / Desde $1,399 a pie' },
    transport: false,
    name: { 
      en: 'Sunrise & Bird Watching at Punta Sur',
      es: 'Amanecer y Observación de Aves en Punta Sur'
    },
    short: {
      en: 'Discover unique species in the ecological reserve. Choose mangrove boat tour or walking tour.',
      es: 'Descubre especies únicas en la reserva ecológica. Elige recorrido en lancha por manglar o tour a pie.',
    },
  },
]

export default function FeaturedTours() {
  const locale = useLocale()
  const l = locale as 'en' | 'es'

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#1565C0] mb-4">
            {locale === 'en' ? 'Featured Tours' : 'Tours Destacados'}
          </h2>
          <p className="text-lg text-gray-500">
            {locale === 'en'
              ? 'Discover our most popular experiences in Cozumel'
              : 'Descubre nuestras experiencias más populares en Cozumel'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.slug}
              className="bg-[#FAFAFA] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-[#1FB6B1]/30 to-[#2E7D32]/30 flex items-center justify-center overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.name[l]}
                  fill
                  className="object-cover"
                  onError={(e: any) => { e.currentTarget.style.display = 'none' }}
                />
                <span className="text-6xl opacity-20 absolute select-none">{tour.emoji}</span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[#263238] mb-2">
                  {tour.emoji} {tour.name[l]}
                </h3>
                <p className="text-gray-500 text-sm mb-4 flex-1">{tour.short[l]}</p>

                {/* Meta */}
                <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-6">
                  <span>⏱ {tour.duration[l]}</span>
                  <span>👥 {locale === 'en' ? 'min 2 pax' : 'mín 2 pax'}</span>
                  <span>{tour.transport
                    ? <span className="text-green-600">🚐 {locale === 'en' ? 'Transport incl.' : 'Transporte incl.'}</span>
                    : <span className="text-gray-400">🚶 {locale === 'en' ? 'No transport' : 'Sin transporte'}</span>}
                  </span>
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                  <div>
                    <span className="text-2xl font-bold text-[#1565C0]">${tour.price}</span>
                    <span className="text-xs text-gray-400 ml-1">MXN</span>
                    {tour.priceNote && (
                      <div className="text-xs text-gray-500 mt-1">
                        {tour.priceNote[l]}
                      </div>
                    )}
                  </div>
                  <Link
                    href={`/${locale}/tours`}
                    className="bg-[#F57C00] hover:bg-[#1FB6B1] text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
                  >
                    {locale === 'en' ? 'View Details' : 'Ver Detalles'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ver todos */}
        <div className="text-center mt-12">
          <Link
            href={`/${locale}/tours`}
            className="inline-flex items-center gap-2 border-2 border-[#1FB6B1] text-[#1FB6B1] hover:bg-[#1FB6B1] hover:text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            {locale === 'en' ? 'See All Tours' : 'Ver Todos los Tours'} →
          </Link>
        </div>
      </div>
    </section>
  )
}
