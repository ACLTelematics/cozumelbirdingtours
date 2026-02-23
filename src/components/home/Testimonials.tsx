import { useTranslations, useLocale } from 'next-intl'

const reviews = [
  {
    name: 'John D.',
    country: 'USA',
    en: 'Amazing experience! Saw species I have never seen before. The guide was incredibly knowledgeable.',
    es: '¡Experiencia increíble! Vi especies que nunca había visto. El guía tenía un conocimiento impresionante.',
  },
  {
    name: 'Marie L.',
    country: 'France',
    en: 'Professional guide, incredible photography opportunities. Will definitely come back!',
    es: 'Guía profesional, increíbles oportunidades fotográficas. ¡Definitivamente volveré!',
  },
  {
    name: 'Sarah M.',
    country: 'Canada',
    en: 'Small group made it very personal. We spotted over 40 species in just one morning!',
    es: 'El grupo pequeño lo hizo muy personal. ¡Vimos más de 40 especies en una sola mañana!',
  },
]

export default function Testimonials() {
  const t = useTranslations('home.testimonials')
  const locale = useLocale()

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#1565C0] mb-4">
            {t('title')}
          </h2>
          <div className="flex items-center justify-center gap-2 text-lg">
            <span className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</span>
            <span className="font-semibold text-gray-700">4.9/5</span>
            <span className="text-gray-400">on TripAdvisor</span>
          </div>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-[#FAFAFA] rounded-2xl p-8 border border-gray-100 shadow-sm"
            >
              <div className="text-yellow-400 text-xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{locale === 'en' ? review.en : review.es}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1FB6B1] flex items-center justify-center text-white font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-[#263238]">{review.name}</p>
                  <p className="text-sm text-gray-400">{review.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
