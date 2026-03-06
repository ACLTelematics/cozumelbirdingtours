import { useTranslations, useLocale } from 'next-intl'

const reviews = [
  {
    name: 'Peter H Kokemueller',
    country: 'Jacksonville, Florida',
    date: 'Dec 2025',
    title: 'Saw the most amazing birds!',
    text: 'OMG, what a fantastic tour! We saw SO MANY amazing birds with Melba and in the process we really got to fully explore Cozumel. Melba is so sweet and lovely and she has so much knowledge concerning the local bird population. Forget the "cattle car" ship tours and spend the day with Melba instead.',
  },
  {
    name: 'Jeff M',
    country: 'USA',
    date: 'Feb 2026',
    title: 'Excellent Cozumel Birding Tour',
    text: 'We had a fantastic tour with Melba looking for the endemic birds of Cozumel. Melba is knowledgeable, fun and laid-back. She got us on all of our target birds, including Cozumel wren, Cozumel vireo, Cozumel emerald, white-crowned pigeon and more. It was a pleasure birding with a Cozumel local who knows the birds and habitats so well.',
  },
  {
    name: 'Jessica A',
    country: 'México',
    date: 'Jan 2026',
    title: 'Amazing discovery',
    text: 'Super glad I did the tour with Melba as I wanted to try something new because I had never birded and the amount of birds she sought and taught me was amazing. I was fascinated with the tour and wanted to go more times with her.',
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
            <span className="font-semibold text-gray-700">5.0/5</span>
            <span className="text-gray-400">on TripAdvisor</span>
          </div>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-[#FAFAFA] rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col"
            >
              <div className="text-yellow-400 text-xl mb-2">⭐⭐⭐⭐⭐</div>
              <p className="font-semibold text-[#263238] mb-1">{review.title}</p>
              <p className="text-xs text-gray-400 mb-4">{review.date}</p>
              <p className="text-gray-600 leading-relaxed mb-6 italic flex-grow">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1FB6B1] flex items-center justify-center text-white font-bold flex-shrink-0">
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

        {/* TripAdvisor Button */}
        <div className="text-center mt-12">
          <a
            href="https://www.tripadvisor.com/Attraction_Review-g150809-d34046189-Reviews-Cozumel_Birding_Tours-Cozumel_Yucatan_Peninsula.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#34E0A1] hover:bg-[#00B087] text-black font-bold py-3 px-8 rounded-full transition duration-300 shadow-md hover:shadow-lg"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
            {locale === 'en' ? 'Read all reviews on TripAdvisor' : 'Ver todas las reseñas en TripAdvisor'}
          </a>
        </div>

      </div>
    </section>
  )
}