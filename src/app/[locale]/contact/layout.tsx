import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact & Book | Cozumel Birding Tours',
  description: 'Book your birdwatching tour in Cozumel. Contact Lic. Melba Aguilera via WhatsApp or email to check availability and reserve your experience.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
