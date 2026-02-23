import { useTranslations } from 'next-intl'

const features = [
  { emoji: '🦜', key: 'endemic' },
  { emoji: '👨‍🏫', key: 'guides' },
  { emoji: '🌴', key: 'small' },
]

export default function WhyChooseUs() {
  const t = useTranslations('home.why')

  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#1565C0] mb-4">
            {t('title')}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((f) => (
            <div key={f.key} className="text-center">
              <div className="text-6xl mb-6">{f.emoji}</div>
              <h3 className="text-xl font-bold text-[#263238] mb-3">
                {t(f.key)}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {t(`${f.key}Desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
