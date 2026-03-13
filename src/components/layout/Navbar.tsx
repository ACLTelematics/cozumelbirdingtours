'use client'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/tours`, label: t('tours') },
    { href: `/${locale}/gallery`, label: t('gallery') },
    { href: `/${locale}/contact`, label: t('contact') },
  ]

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'es' : 'en'
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath)
  }

  return (
    <nav
      className="fixed top-0 w-full z-50 border-b border-white/10"
      style={{
        background: 'linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 20%, rgba(245,124,0,0.55) 60%, rgba(0,119,182,0.75) 100%)',
        backdropFilter: 'blur(14px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo - lado izquierdo blanco */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Cozumel Birding Tours"
              width={153}
              height={43}
              priority
            />
          </Link>

{/* Desktop Links */}
<div className="hidden md:flex items-center gap-8">
  {navLinks.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className="relative font-semibold text-base tracking-wide group transition-all duration-300"
      style={{ color: '#2E7D32' }}
    >
      {link.label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F57C00] rounded-full transition-all duration-300 group-hover:w-full" />
    </Link>
  ))}
</div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language toggle */}
            <button
              onClick={toggleLocale}
              className="text-base font-bold text-white border-2 border-white rounded-full px-4 py-1.5 hover:bg-white/20 transition-all duration-300"
              style={{
                textShadow: '0 2px 4px rgba(245,124,0,0.9), 1px 1px 2px rgba(245,124,0,1)'
              }}
            >
              {locale === 'en' ? 'ES' : 'EN'}
            </button>

            {/* Book Now - Azul sólido */}
            <Button
              asChild
              className="text-white font-bold rounded-full px-8 py-2 text-base shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl border-0"
              style={{ 
                background: 'linear-gradient(135deg, #0096C7 0%, #023E8A 100%)',
                textShadow: '0 2px 4px rgba(245,124,0,0.6), 1px 1px 2px rgba(245,124,0,0.8)'
              }}
            >
              <Link href={`/${locale}/contact`}>
                {t('bookNow')}
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              textShadow: '0 2px 4px rgba(245,124,0,0.9)'
            }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="md:hidden py-4 flex flex-col gap-4 border-t border-white/20"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white font-semibold text-base hover:text-orange-200 transition-colors"
                style={{
                  textShadow: '0 2px 4px rgba(0, 245, 204, 0.9), 1px 1px 2px rgb(0, 245, 245)'
                }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={toggleLocale}
                className="text-base font-bold text-white border-2 border-white rounded-full px-4 py-1.5 hover:bg-white/20 transition-all duration-300"
                style={{
                  textShadow: '0 2px 4px rgba(0, 252, 76, 0.9)'
                }}
              >
                {locale === 'en' ? 'ES' : 'EN'}
              </button>
              <Button
                asChild
                className="text-white font-bold rounded-full px-8 text-base shadow-lg border-0"
                style={{ 
                  background: 'linear-gradient(135deg, #0096C7 0%, #023E8A 100%)',
                  textShadow: '0 2px 4px rgba(245,124,0,0.6)'
                }}
              >
                <Link href={`/${locale}/contact`}>
                  {t('bookNow')}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}