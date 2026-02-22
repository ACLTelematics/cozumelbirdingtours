import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
//import WhatsAppButton from '@/components/layout/WhatsAppButton'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cozumel Birding Tours',
  description: 'Discover 200+ bird species in Cozumel, México',
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
	  {/* <WhatsAppButton /> */}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
