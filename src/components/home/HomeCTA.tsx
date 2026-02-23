'use client'

import { useTranslations, useLocale } from 'next-intl'

export default function HomeCTA() {
  const t = useTranslations('home.cta')
  const locale = useLocale()

  const message = locale === 'en'
    ? 'Hello! I am interested in your birding tours in Cozumel.'
    : 'Hola! Me interesa informacion sobre sus tours de avistamiento en Cozumel.'

  const whatsappUrl = `https://wa.me/5219871234567?text=${encodeURIComponent(message)}`

  return (
    <section className="py-20 bg-[#1FB6B1]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          {t('title')}
        </h2>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-[#1FB6B1] hover:bg-[#263238] hover:text-white font-semibold px-10 py-4 rounded-full text-lg transition-colors duration-300"
        >
          💬 {t('button')}
        </a>
      </div>
    </section>
  )
}