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
  <div className="w-44 h-56 rounded-lg overflow-hidden border-4 border-white shadow-lg bg-gray-200">
    <Image
      src="/images/foto.jpg"
      alt="Melba Aguilera"
      width={176}
      height={224}
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
                ? 'Hi, I\'m Melba. I was raised in Cozumel, an island unique for its biodiversity. For more than 7 years I have been sharing the extraordinary birdlife of this place with visitors from around the world. My passion for birds and nature is what drives me every morning to go out into the field, observe, learn and teach. I invite you to join me and live an authentic and unforgettable experience, connecting with the nature of Cozumel through its birds.'
                : 'Hola, soy Melba. Crecí en Cozumel, una isla única por su biodiversidad. Desde hace más de 7 años me dedico a compartir con visitantes de todo el mundo la extraordinaria vida aviaria que habita este lugar. Mi pasión por las aves y la naturaleza es lo que me impulsa cada mañana a salir al campo, observar, aprender y enseñar. Te invito a acompañarme y vivir una experiencia auténtica e inolvidable, conectando con la naturaleza de Cozumel a través de sus aves.'
              }
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="bg-white/20 text-white text-sm px-4 py-1 rounded-full">
                {locale === 'en' ? '7 Years Experience' : '7 Años de Experiencia'}
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