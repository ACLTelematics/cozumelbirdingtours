import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

export default function Footer() {
  const t = useTranslations('nav')
  const f = useTranslations('footer')
  const locale = useLocale()

  return (
    <footer className="bg-[#1A1A1A] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Col 1: About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🦜</span>
              <span className="font-bold text-white text-lg">
                Cozumel Birding
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {locale === 'en'
                ? 'Expert birding tours in Cozumel, México. Discover endemic species with local guides.'
                : 'Tours de avistamiento de aves en Cozumel, México. Descubre especies endémicas con guías locales.'}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {locale === 'en' ? 'Quick Links' : 'Enlaces'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href={`/${locale}`} className="hover:text-[#1FB6B1] transition-colors">{t('home')}</Link></li>
              <li><Link href={`/${locale}/tours`} className="hover:text-[#1FB6B1] transition-colors">{t('tours')}</Link></li>
              <li><Link href={`/${locale}/gallery`} className="hover:text-[#1FB6B1] transition-colors">{t('gallery')}</Link></li>
              <li><Link href={`/${locale}/contact`} className="hover:text-[#1FB6B1] transition-colors">{t('contact')}</Link></li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {locale === 'en' ? 'Contact' : 'Contacto'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span>📧</span>
                <span>info@cozumelbirding.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📱</span>
                <span>+52 987 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>Cozumel, Quintana Roo, México</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {locale === 'en' ? 'Hours' : 'Horarios'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>{locale === 'en' ? 'Monday – Saturday' : 'Lunes – Sábado'}</li>
              <li className="text-[#1FB6B1] font-medium">5:00 AM – 2:00 PM</li>
              <li className="mt-2 text-gray-400">
                {locale === 'en' ? 'WhatsApp available all day' : 'WhatsApp disponible todo el día'}
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Cozumel Birding Tours. {f('rights')}.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#1FB6B1] transition-colors">Facebook</a>
            <a href="#" className="hover:text-[#1FB6B1] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#1FB6B1] transition-colors">TripAdvisor</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
