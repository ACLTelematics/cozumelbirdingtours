import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery | Birds of Cozumel',
  description: 'Discover the most beautiful birds of Cozumel through our photo gallery. Witness the incredible birdlife of the island with Cozumel Birding Tours.',
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
