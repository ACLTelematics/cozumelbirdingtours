'use client'
import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const photos = [
  { src: '/images/gallery/gallery-1.jpg', alt: 'Gallery 1' },
  { src: '/images/gallery/gallery-2.jpg', alt: 'Gallery 2' },
  { src: '/images/gallery/gallery-3.jpg', alt: 'Gallery 3' },
  { src: '/images/gallery/gallery-4.jpg', alt: 'Gallery 4' },
  { src: '/images/gallery/gallery-5.jpg', alt: 'Gallery 5' },
]

export default function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null)

  const prev = () => setSelected((i) => (i! > 0 ? i! - 1 : photos.length - 1))
  const next = () => setSelected((i) => (i! < photos.length - 1 ? i! + 1 : 0))

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#1FB6B1] font-medium tracking-widest uppercase text-sm mb-2">
            Cozumel · México
          </p>
          <h1 className="text-4xl font-bold text-[#263238]">Galería</h1>
          <p className="text-gray-500 mt-2">Descubre las aves más hermosas de Cozumel</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl cursor-pointer group shadow-md hover:shadow-xl transition-shadow duration-300"
              style={{ aspectRatio: '1/1' }}
              onClick={() => setSelected(i)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-3xl">🔍</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
          onClick={() => setSelected(null)}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelected(null)}
          >
            <X size={32} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 text-white hover:text-gray-300 transition-colors"
            onClick={(e) => { e.stopPropagation(); prev() }}
          >
            <ChevronLeft size={48} />
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-3xl"
            style={{ aspectRatio: '1/1' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[selected].src}
              alt={photos[selected].alt}
              fill
              className="object-contain rounded-xl"
            />
          </div>

          {/* Next */}
          <button
            className="absolute right-4 text-white hover:text-gray-300 transition-colors"
            onClick={(e) => { e.stopPropagation(); next() }}
          >
            <ChevronRight size={48} />
          </button>

          {/* Counter */}
          <p className="absolute bottom-4 text-white/70 text-sm">
            {selected + 1} / {photos.length}
          </p>
        </div>
      )}
    </main>
  )
}
