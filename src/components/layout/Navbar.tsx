'use client'

import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <span className="text-2xl">🦜</span>
            <span className="font-bold text-[#1565C0] text-lg">
              Cozumel Birding
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#263238] hover:text-[#1FB6B1] transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={toggleLocale}
              className="text-sm font-medium text-[#263238] hover:text-[#1FB6B1] transition-colors border border-gray-200 rounded-full px-3 py-1"
            >
              {locale === 'en' ? 'ES' : 'EN'}
            </button>

            {/* Book Now */}
            <Button
              asChild
              className="bg-[#F57C00] hover:bg-[#1FB6B1] text-white rounded-full px-6"
            >
              <Link href={`/${locale}/contact`}>
                {t('bookNow')}
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 flex flex-col gap-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#263238] hover:text-[#1FB6B1] font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={toggleLocale}
                className="text-sm font-medium border border-gray-200 rounded-full px-3 py-1"
              >
                {locale === 'en' ? 'ES' : 'EN'}
              </button>
              <Button
                asChild
                className="bg-[#F57C00] hover:bg-[#1FB6B1] text-white rounded-full px-6"
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
