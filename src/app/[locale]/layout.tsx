import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Cozumel Birding Tours | Expert Birdwatching Guide',
    template: '%s | Cozumel Birding Tours',
  },
  description: 'Discover the birds of Cozumel, México with Lic. Melba Aguilera, certified local guide. Authentic birdwatching tours and unique nature experiences.',
  keywords: [
    'birdwatching Cozumel',
    'birding tours Cozumel',
    'Cozumel birds',
    'bird watching Mexico',
    'Cozumel nature tours',
    'avistamiento de aves Cozumel',
    'tours de aves Cozumel',
    'guía de aves Cozumel',
    'Melba Aguilera',
    'Punta Sur birds',
  ],
  authors: [{ name: 'Lic. Melba Aguilera' }],
  creator: 'Cozumel Birding Tours',
  metadataBase: new URL('https://www.cozumelbirdingtours.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'es': '/es',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'es_MX',
    url: 'https://www.cozumelbirdingtours.com',
    siteName: 'Cozumel Birding Tours',
    title: 'Cozumel Birding Tours | Expert Birdwatching Guide',
    description: 'Discover the birds of Cozumel, México with a certified local guide. Authentic birdwatching tours and nature experiences.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cozumel Birding Tours',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cozumel Birding Tours | Expert Birdwatching Guide',
    description: 'Discover the birds of Cozumel, México with a certified local guide.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }
  const messages = await getMessages()
  return (
    <html lang={locale}>
      <body className="bg-[#FAFAFA] text-[#263238]">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}