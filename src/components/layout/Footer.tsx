import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaTiktok, FaTripadvisor } from 'react-icons/fa'

export default function Footer() {
  const t = useTranslations('nav')
  const f = useTranslations('footer')
  const locale = useLocale()

  return (
    <footer className="bg-gradient-to-br from-[#006064] to-[#1B5E20] text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Col 1: Logo + About */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Cozumel Birding Tours"
                width={160}
                height={60}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              {locale === 'en'
                ? 'Discover native species from  Cozumel.'
                : ' Descubre las aves de cozumel.'}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {locale === 'en' ? 'Quick Links' : 'Enlaces'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}`} className="hover:text-white transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/tours`} className="hover:text-white transition-colors">
                  {t('tours')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/gallery`} className="hover:text-white transition-colors">
                  {t('gallery')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="hover:text-white transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {locale === 'en' ? 'Contact' : 'Contacto'}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span>📧</span>
                <span> cozumelbirdingtours@gmail.com </span>
              </li>
              <li className="flex items-center gap-2">
                <span>📱</span>
                <span>+52 987 113 4222</span>
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
              <li className="text-yellow-300 font-medium">5:00 AM – 2:00 PM</li>
              <li className="mt-2 text-gray-300">
                {locale === 'en'
                  ? 'WhatsApp available all day'
                  : 'WhatsApp disponible todo el día'}
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
        <p>© 2026 Cozumel Birding Tours. {f('rights')}. Powered by{' '}
  <a 
    href="https://www.facebook.com/telematicscoz/" 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{ color: '#0CB7F2' }} 
    className="font-semibold hover:underline transition-colors"
  >
    ACL Systems
  </a>
</p>   
          <div className="flex gap-4 items-center">
            <a href="https://www.facebook.com/p/Cozumel-Birding-Tours-100095294263434/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <FaFacebook size={22} />
            </a>
            <a href="https://www.instagram.com/Cozumelbirdingtours" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <FaInstagram size={22} />
            </a>
            <a href="https://www.tiktok.com/@cozumelbirdingtours" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <FaTiktok size={22} />
            </a>
            <a href="https://www.tripadvisor.com/Attraction_Review-g150809-d34046189-Reviews-Cozumel_Birding_Tours-Cozumel_Yucatan_Peninsula.html" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <FaTripadvisor size={22} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}