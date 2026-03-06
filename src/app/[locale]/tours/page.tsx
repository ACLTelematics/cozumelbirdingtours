'use client'

import { useLocale } from 'next-intl'
import Image from 'next/image'

const birding = [
  {
    slug: 'observacion-aves',
    image: '/images/tours/tour-1.jpg',
    emoji: '🦜',
    name: { en: 'Bird Watching Tour', es: 'Tour de Observación de Aves' },
    short: {
      en: 'Discover the diversity of local birdlife accompanied by an expert local guide from Cozumel.',
      es: 'Descubre la diversidad de la avifauna local acompañado de un guía local de Cozumel.',
    },
    duration: { en: '4-5 hours', es: '4-5 horas' },
    price: '1,799',
    priceNote: { en: 'per person · min 2', es: 'por pax · mín 2' },
    transport: true,
    includes: {
      en: ['Expert guide', 'Binoculars', 'Field guide', 'Water', 'Transport'],
      es: ['Guía experta', 'Binoculares', 'Guía de campo', 'Agua', 'Transporte'],
    },
  },
  {
    slug: 'sabor-naturaleza',
    image: '/images/tours/tour-2.jpg',
    emoji: '🌿',
    name: { en: 'Cozumel Flavor & Nature Tour', es: 'Sabor y Naturaleza de Cozumel' },
    short: {
      en: 'Explore a cenote, visit the Cedral village, tour the island\'s east side, and enjoy authentic local food.',
      es: 'Explora un cenote, visita el poblado del Cedral, vuelta por el este y disfruta de comida local auténtica.',
    },
    duration: { en: '5 hours', es: '5 horas' },
    price: '2,099',
    priceNote: { en: 'per person · min 2', es: 'por pax · mín 2' },
    transport: true,
    includes: {
      en: ['Expert guide', 'Water', 'Local meal', 'Transport'],
      es: ['Guía experta', 'Agua', 'Comida local', 'Transporte'],
    },
  },
  {
    slug: 'punta-sur',
    image: '/images/tours/tour-3.jpg',
    emoji: '🦩',
    name: { en: 'Punta Sur — Birds & Mangrove Boat', es: 'Punta Sur — Aves y Lancha en Manglar' },
    short: {
      en: 'Discover unique species in the ecological reserve with a mangrove boat ride and specialized equipment.',
      es: 'Descubre especies únicas en la reserva ecológica con recorrido en lancha por el manglar y equipo incluido.',
    },
    duration: { en: '3 hours', es: '3 horas' },
    price: '1,999',
    priceNote: { en: 'per person · min 2', es: 'por pax · mín 2' },
    transport: false,
    includes: {
      en: ['Expert guide', 'Boat ride', 'Binoculars', 'Water'],
      es: ['Guía experta', 'Recorrido en lancha', 'Binoculares', 'Agua'],
    },
  },
]

const combos = [
  {
    slug: 'aves-abejas',
    image: '/images/tours/tour-4.jpg',
    emoji: '🐝',
    name: { en: 'Birds & Mayan Bees', es: 'Aves y Abejas Mayas' },
    short: {
      en: 'Discover Cozumel\'s nature with bird watching combined with a fascinating journey into the world of the Mayan Melipona bee.',
      es: 'Descubre la naturaleza de Cozumel con avistamiento de aves y un fascinante recorrido sobre la abeja melipona maya.',
    },
    options: [
      {
        label: { en: 'Full Tour', es: 'Tour Completo' },
        duration: { en: '5 hours', es: '5 horas' },
        price: '2,399',
        transport: true,
        priceNote: { en: 'per person · min 2', es: 'por pax · mín 2' },
      },
      {
        label: { en: 'Short Tour', es: 'Tour Corto' },
        duration: { en: '2.5 hours', es: '2.5 horas' },
        price: '1,499',
        transport: false,
        priceNote: { en: 'per person · min 2', es: 'por pax · mín 2' },
      },
    ],
    includes: {
      en: ['Expert guide', 'Binoculars', 'Melipona bee experience', 'Water'],
      es: ['Guía experta', 'Binoculares', 'Experiencia abeja melipona', 'Agua'],
    },
  },
  {
    slug: 'aves-acuarelas',
    image: '/images/tours/tour-5.jpg',
    emoji: '🎨',
    name: { en: 'Birds & Watercolors', es: 'Aves y Acuarelas' },
    short: {
      en: 'Enjoy bird watching then unleash your creativity with a watercolor session. A local artist guides you to paint your favorite bird.',
      es: 'Disfruta avistamiento de aves y al finalizar pinta tu ave favorita guiado por una artista local en acuarela.',
    },
    duration: { en: '6 hours', es: '6 horas' },
    price: '2,399',
    priceNote: { en: 'per person · min 2', es: 'por pax · mín 2' },
    transport: true,
    includes: {
      en: ['Expert guide', 'Watercolor session', 'Art materials', 'Water', 'Transport'],
      es: ['Guía experta', 'Sesión de acuarela', 'Materiales de arte', 'Agua', 'Transporte'],
    },
  },
  {
    slug: 'aves-sabores',
    image: '/images/tours/tour-6.jpg',
    emoji: '🌮',
    name: { en: 'Birds & Local Flavors', es: 'Aves y Sabores Locales' },
    short: {
      en: 'An afternoon bird watching experience followed by authentic local tacos. Nature and gastronomy combined.',
      es: 'Una experiencia vespertina de avistamiento seguida de auténticos tacos locales. Naturaleza y gastronomía.',
    },
    duration: { en: '5 hours', es: '5 horas' },
    price: '2,099',
    priceNote: { en: 'per person · min 2', es: 'por pax · mín 2' },
    transport: true,
    includes: {
      en: ['Expert guide', 'Binoculars', 'Local tacos', 'Water', 'Transport'],
      es: ['Guía experta', 'Binoculares', 'Tacos locales', 'Agua', 'Transporte'],
    },
  },
]

const extras = [
  {
    slug: 'clases-pintura',
    image: '/images/tours/tour-7.jpg',
    emoji: '🖌️',
    name: { en: 'Painting Classes in Cozumel', es: 'Clases de Pintura en Cozumel' },
    short: {
      en: 'Local artist María Guadalupe Arguero offers watercolor classes — no experience needed. Sea, sunsets or nature animals.',
      es: 'La artista local María Guadalupe Arguero ofrece clases de acuarela sin experiencia necesaria. Mar, atardeceres o animales.',
    },
    duration: { en: '2 hours', es: '2 horas' },
    price: '699',
    priceNote: { en: 'per person', es: 'por pax' },
    transport: false,
    includes: {
      en: ['Local artist guide', 'Art materials'],
      es: ['Artista local', 'Materiales de arte'],
    },
  },
  {
    slug: 'circulo-cacao',
    image: '/images/tours/tour-8.jpg',
    emoji: '🍫',
    name: { en: 'Cacao Circle Experience', es: 'Experiencia Círculo de Cacao' },
    short: {
      en: 'Aku Meraki uses music as medicine to create transformative holistic cacao circle experiences.',
      es: 'Aku Meraki usa la música como medicina para crear experiencias holísticas y transformadoras en círculo de cacao.',
    },
    duration: { en: '1.5 - 2 hours', es: '1.5 - 2 horas' },
    price: '1,699',
    priceNote: { en: 'per person · min 3', es: 'por pax · mín 3' },
    transport: false,
    includes: {
      en: ['Musical guide', 'Cacao ceremony'],
      es: ['Guía musical', 'Ceremonia de cacao'],
    },
  },
  {
    slug: 'pesca-profunda',
    image: '/images/tours/tour-9.jpg',
    emoji: '🎣',
    name: { en: 'Deep Sea Fishing', es: 'Pesca Profunda' },
    short: {
      en: 'Mr. Mezo — Fierro Viejo — a Cozumel native who has spent his life at sea. Deep sea fishing with specialized equipment.',
      es: 'El Sr. Mezo, Fierro Viejo, cozumeleño de toda la vida. Pesca en aguas profundas con equipo especializado.',
    },
    duration: { en: '4h (half day) · 8h (full day)', es: '4h (medio día) · 8h (día completo)' },
    price: '7,199',
    priceNote: { en: 'half day · full day $10,599', es: 'medio día · día completo $10,599' },
    transport: false,
    note: {
      en: '⚠️ Dock fee not included',
      es: '⚠️ Cuota del muelle no incluida',
    },
    includes: {
      en: ['Experienced captain', 'Specialized fishing equipment'],
      es: ['Capitán experimentado', 'Equipo de pesca especializado'],
    },
  },
]

function TourCard({ tour, locale }: { tour: any; locale: string }) {
  const l = locale as 'en' | 'es'
  const whatsappMsg = encodeURIComponent(
    locale === 'en'
      ? `Hello! I am interested in: ${tour.name.en}`
      : `Hola! Me interesa: ${tour.name.es}`
  )
  const whatsappUrl = `https://wa.me/5219871134222?text=${whatsappMsg}`

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">

      {/* Photo */}
      <div className="relative h-44 bg-gradient-to-br from-[#1FB6B1]/30 to-[#2E7D32]/30 flex items-center justify-center overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.name[l]}
          fill
          className="object-cover"
          onError={(e: any) => { e.currentTarget.style.display = 'none' }}
        />
        <span className="text-6xl opacity-20 absolute select-none">{tour.emoji}</span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-bold text-[#263238] mb-2 leading-snug">
          {tour.emoji} {tour.name[l]}
        </h3>
        <p className="text-gray-500 text-sm mb-4 flex-1">{tour.short[l]}</p>

        {/* Options (for tours with multiple pricing) */}
        {tour.options ? (
          <div className="space-y-2 mb-4">
            {tour.options.map((opt: any, i: number) => (
              <div key={i} className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2 text-sm">
                <div>
                  <span className="font-semibold text-[#263238]">{opt.label[l]}</span>
                  <span className="text-gray-400 ml-2">· {opt.duration[l]}</span>
                  <span className="ml-2">
                    {opt.transport
                      ? <span className="text-xs text-green-600">🚐 {locale === 'en' ? 'Transport' : 'Transporte'}</span>
                      : <span className="text-xs text-gray-400">🚶 {locale === 'en' ? 'No transport' : 'Sin transporte'}</span>}
                  </span>
                </div>
                <span className="font-bold text-[#1565C0]">${opt.price} <span className="text-xs font-normal text-gray-400">MXN</span></span>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-4">
            <span>⏱ {tour.duration[l]}</span>
            <span>👥 {tour.priceNote[l]}</span>
            <span>{tour.transport
              ? <span className="text-green-600">🚐 {locale === 'en' ? 'Transport included' : 'Transporte incluido'}</span>
              : <span className="text-gray-400">🚶 {locale === 'en' ? 'No transport' : 'Sin transporte'}</span>}
            </span>
          </div>
        )}

        {/* Includes */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tour.includes[l].map((item: string, i: number) => (
            <span key={i} className="text-xs bg-green-50 text-green-700 px-2.5 py-1 rounded-full">
              ✓ {item}
            </span>
          ))}
        </div>

        {/* Note */}
        {tour.note && (
          <div className="mb-4 p-2 bg-yellow-50 rounded-lg border border-yellow-100">
            <p className="text-xs text-yellow-800">{tour.note[l]}</p>
          </div>
        )}

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          {!tour.options && (
            <div>
              <span className="text-xl font-bold text-[#1565C0]">${tour.price}</span>
              <span className="text-xs text-gray-400 ml-1">MXN</span>
            </div>
          )}
          {tour.options && <div />}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F57C00] hover:bg-[#1FB6B1] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors ml-auto"
          >
            {locale === 'en' ? 'Book Now' : 'Reservar'}
          </a>
        </div>
      </div>
    </div>
  )
}

function SectionDivider({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="flex-1 h-px bg-gray-200" />
      <h2 className="text-xl font-bold text-[#263238] whitespace-nowrap">{title}</h2>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  )
}

export default function ToursPage() {
  const locale = useLocale()

  return (
    <div className="min-h-screen bg-[#FAFAFA]">

      {/* Header */}
      <section className="bg-gradient-to-r from-[#2E7D32] to-[#1FB6B1] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {locale === 'en' ? 'Our Tours' : 'Nuestros Tours'}
          </h1>
          <p className="text-lg text-white/90">
            {locale === 'en'
              ? 'Authentic experiences in Cozumel with local expert guides'
              : 'Experiencias auténticas en Cozumel con guías locales expertos'}
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 space-y-16">

        {/* Birding */}
        <div>
          <SectionDivider title={locale === 'en' ? '🦜 Bird Watching Tours' : '🦜 Recorridos de Observación de Aves'} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {birding.map(tour => <TourCard key={tour.slug} tour={tour} locale={locale} />)}
          </div>
        </div>

        {/* Combos */}
        <div>
          <SectionDivider title={locale === 'en' ? '✨ Combos' : '✨ Combos'} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {combos.map(tour => <TourCard key={tour.slug} tour={tour} locale={locale} />)}
          </div>
        </div>

        {/* Extras */}
        <div>
          <SectionDivider title={locale === 'en' ? '🌟 Other Activities' : '🌟 Otras Actividades'} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extras.map(tour => <TourCard key={tour.slug} tour={tour} locale={locale} />)}
          </div>
        </div>

        {/* Footer note */}
        <div className="p-5 bg-white rounded-xl border border-gray-100 shadow-sm text-center">
          <p className="text-gray-500 text-sm">
            🚐 {locale === 'en'
              ? 'Tours that include transport offer hotel pickup in Cozumel.'
              : 'Los tours que incluyen transporte cuentan con recogida en hotel en Cozumel.'}
          </p>
        </div>

      </section>
    </div>
  )
}