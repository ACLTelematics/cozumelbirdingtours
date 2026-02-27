'use client'
import { useLocale } from 'next-intl'
import Image from 'next/image'

export default function HomeCTA() {
  const locale = useLocale()

  return (
    <section className="py-20 bg-gradient-to-r from-[#F57C00] to-[#1FB6B1]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          
          {/* Foto */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-200 flex items-center justify-center">
              <Image
                src="/images/melba.jpg"
                alt="Melba Aguilera"
                width={160}
                height={160}
                className="object-cover w-full h-full"
                onError={(e: any) => { e.target.style.display = 'none' }}
              />
            </div>
          </div>

          {/* Bio */}
          <div className="text-white text-center md:text-left">
            <h2 className="text-3xl font-bold mb-1">Melba Aguilera</h2>
            <p className="text-white/80 text-sm mb-4">
              {locale === 'en' ? 'Certified Bird Guide · Cozumel' : 'Guía Certificada · Cozumel'}
            </p>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              {locale === 'en'
                ? 'Hi, I\'m Melba! I was born and raised in Cozumel, and for the past 5 years I\'ve dedicated myself to sharing the incredible birdlife of this island with visitors from around the world. My passion for birds and nature drives me every single morning. I invite you to join me for an unforgettable experience together.'
                : 'Hola, soy Melba. Nací y crecí en Cozumel, y durante los últimos 5 años me he dedicado a compartir la increíble vida aviaria de esta isla con visitantes de todo el mundo. Mi pasión por las aves y la naturaleza me impulsa cada mañana. Te invito a compartir conmigo una experiencia inolvidable.'
              }
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="bg-white/20 text-white text-sm px-4 py-1 rounded-full">
                {locale === 'en' ? '5 Years Experience' : '5 Años de Experiencia'}
              </span>
              <span className="bg-white/20 text-white text-sm px-4 py-1 rounded-full">
                {locale === 'en' ? 'Certified Guide' : 'Guía Certificada'}
              </span>
              <span className="bg-white/20 text-white text-sm px-4 py-1 rounded-full">
                {locale === 'en' ? 'Born in Cozumel' : 'Nativa de Cozumel'}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}