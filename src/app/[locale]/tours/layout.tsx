import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Birdwatching Tours in Cozumel | All Experiences',
  description: 'Explore all birdwatching tours and nature experiences in Cozumel with certified local guide Lic. Melba Aguilera. Birding tours, combos, painting, cacao circle and deep sea fishing.',
}

export default function ToursLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
