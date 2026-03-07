'use client'

import { useLocale } from 'next-intl'
import Image from 'next/image'

const birding = [
  {
    slug: 'observacion-aves',
    image: '/images/tours/tour-1.jpg',
    emoji: '🦜',
    name: { 
      en: 'Bird Watching Tour in Cozumel', 
      es: 'Recorridos de Observación de Aves en Cozumel' 
    },
    description: {
      en: 'Enjoy a bird watching tour and discover the incredible diversity of local birdlife accompanied by a local guide from Cozumel. During the tour you will observe resident and migratory bird species. Throughout the experience you will learn about bird behavior, their importance within the island\'s ecosystems and interesting facts about the region\'s biodiversity. This tour is ideal for nature lovers, photographers and anyone interested in learning more about Cozumel\'s wildlife while enjoying unique natural landscapes.',
      es: 'Disfruta de un tour de observación de aves y descubre la increíble diversidad de la avifauna local acompañado por un guía local de Cozumel. Durante el recorrido podrás observar especies de aves residentes y migratorias. A lo largo de la experiencia aprenderás sobre el comportamiento de las aves, su importancia dentro de los ecosistemas de la isla y algunos datos interesantes sobre la biodiversidad de la región. Este tour es ideal para amantes de la naturaleza, fotógrafos y cualquier persona interesada en conocer más de la vida silvestre de Cozumel mientras disfruta de paisajes naturales únicos.',
    },
    duration: { en: '4-5 hours', es: '4-5 horas' },
    price: '1,799',
    minPax: 2,
    transport: true,
    includes: {
      en: ['Expert local guide', 'Binoculars', 'Field guide', 'Water', 'Hotel pickup'],
      es: ['Guía local experta', 'Binoculares', 'Guía de campo', 'Agua', 'Recogida en hotel'],
    },
  },
  {
    slug: 'sabor-naturaleza',
    image: '/images/tours/tour-2.jpg',
    emoji: '🌿',
    name: { 
      en: 'Cozumel Flavor & Nature Tour', 
      es: 'Sabor y Naturaleza de Cozumel' 
    },
    description: {
      en: 'Interpretive tour of the cenote and its ecological importance within Cozumel\'s ecosystems. Swimming is not necessary, as the tour focuses on learning about the geology and life around these bodies of water. Afterward we will visit El Cedral village, one of the oldest settlements on the island, where you will learn about its history and traditions. We will continue with a panoramic tour of the island, including a stop on the east coast to enjoy the Caribbean Sea landscape and take photos. To end the experience, we will visit a local restaurant where you can enjoy authentic traditional food. An experience that combines nature, history, landscapes and local gastronomy.',
      es: 'Tour interpretativo del cenote y su importancia ecológica dentro de los ecosistemas de Cozumel. No es necesario nadar, ya que el enfoque del recorrido es aprender sobre la geología y la vida que habita alrededor de estos cuerpos de agua. Después visitaremos el poblado de El Cedral, uno de los asentamientos más antiguos de la isla, conocerás parte de su historia y tradiciones. Continuaremos con una vuelta panorámica por la isla, incluyendo una parada en la costa este para disfrutar del paisaje y tomar fotografías del mar Caribe. Para finalizar la experiencia, visitaremos un restaurante local donde podrás disfrutar de auténtica comida tradicional. Una experiencia que combina naturaleza, historia, paisajes y gastronomía local.',
    },
    duration: { en: '5 hours', es: '5 horas' },
    price: '2,099',
    minPax: 2,
    transport: true,
    includes: {
      en: ['Expert guide', 'Cenote interpretation', 'El Cedral visit', 'Island tour', 'Local meal', 'Water', 'Transport'],
      es: ['Guía experta', 'Interpretación del cenote', 'Visita El Cedral', 'Vuelta a la isla', 'Comida local', 'Agua', 'Transporte'],
    },
  },
  {
    slug: 'punta-sur',
    image: '/images/tours/tour-3.jpg',
    emoji: '🦩',
    name: { 
      en: 'Sunrise & Bird Watching at Punta Sur', 
      es: 'Amanecer y Observación de Aves en Punta Sur' 
    },
    description: {
      en: 'Discover unique species while exploring the stunning landscapes of the Punta Sur ecological reserve in Cozumel. This protected natural area is home to diverse ecosystems such as lagoons, mangroves, coastal dunes and beautiful Caribbean beaches, which serve as home to a wide variety of flora and fauna. During the tour you will have the opportunity to observe different bird species and learn about the island\'s ecosystems and the importance of their conservation. It is an ideal experience for nature lovers, bird watchers and photographers who want to discover the most natural side of Cozumel. The tour includes observation equipment and water for your comfort.',
      es: 'Descubre especies únicas mientras exploras los impresionantes paisajes de la reserva ecológica Punta Sur en Cozumel. Esta área natural protegida alberga diversos ecosistemas como lagunas, manglares, dunas costeras y hermosas playas del Caribe, que sirven de hogar a una gran variedad de flora y fauna. Durante el recorrido tendrás la oportunidad de observar diferentes especies de aves y aprender sobre los ecosistemas de la isla y la importancia de su conservación. Es una experiencia ideal para amantes de la naturaleza, observadores de aves y fotógrafos que desean descubrir el lado más natural de Cozumel. El tour incluye equipo de observación y agua para tu comodidad.',
    },
    duration: { en: '3 hours', es: '3 horas' },
    options: [
      {
        label: { en: 'Mangrove boat tour', es: 'Recorrido en lancha por manglar' },
        price: '2,199',
        transport: false,
      },
      {
        label: { en: 'Walking tour', es: 'Tour a pie' },
        price: '1,399',
        transport: false,
      },
    ],
    minPax: 2,
    includes: {
      en: ['Expert guide', 'Observation equipment', 'Water'],
      es: ['Guía experta', 'Equipo de observación', 'Agua'],
    },
  },
]

const combos = [
  {
    slug: 'aves-abejas',
    image: '/images/tours/tour-4.jpg',
    emoji: '🐝',
    name: { 
      en: 'Birds & Mayan Bees', 
      es: 'Aves y Abejas Mayas' 
    },
    description: {
      en: 'Discover the nature of Cozumel with our bird watching tour, combined with a fascinating tour about the Mayan Melipona bee. During this experience you will enjoy two activities within the same tour: first we will explore the natural environment to observe different bird species, and then you will learn more about the Melipona bee, a native stingless bee of great importance in the Mayan civilization culture. Throughout the tour you will learn about the region\'s biodiversity, the role of bees in ecosystems and their historical and cultural relevance. A unique experience that combines nature, culture and conservation.',
      es: 'Descubre la naturaleza de Cozumel con nuestro tour de observación de aves, combinado con un fascinante recorrido sobre la abeja melipona maya. Durante esta experiencia disfrutarás de dos actividades dentro de un mismo tour: primero exploraremos el entorno natural para observar distintas especies de aves, y después conocerás más sobre la abeja Melipona una abeja nativa sin aguijón de gran importancia en la cultura de la civilización maya. A lo largo del recorrido aprenderás sobre la biodiversidad de la región, el papel de las abejas en los ecosistemas y su relevancia histórica y cultural. Una experiencia única que combina naturaleza, cultura y conservación.',
    },
    duration: { en: '5 hours', es: '5 horas' },
    options: [
      {
        label: { en: 'Complete experience', es: 'Experiencia completa' },
        price: '2,399',
        duration: { en: '5 hours', es: '5 horas' },
        transport: true,
      },
      {
        label: { en: 'Express tour (Ideal for beginners)', es: 'Tour exprés (Ideal para principiantes)' },
        price: '1,499',
        duration: { en: '2.5 hours', es: '2.5 horas' },
        transport: false,
      },
    ],
    minPax: 2,
    includes: {
      en: ['Expert guide', 'Bird watching', 'Melipona bee experience', 'Water'],
      es: ['Guía experta', 'Observación de aves', 'Experiencia abeja melipona', 'Agua'],
    },
  },
  {
    slug: 'aves-acuarelas',
    image: '/images/tours/tour-5.jpg',
    emoji: '🎨',
    name: { 
      en: 'Birds & Watercolors', 
      es: 'Aves y Acuarelas' 
    },
    description: {
      en: 'Enjoy a bird watching tour in Cozumel and, at the end, let your creativity fly with a watercolor painting session. Watercolor artist María Guadalupe Arguero will guide you step by step to capture your favorite bird or any animal of your choice in a fun and relaxed class. No previous experience is necessary, just the desire to enjoy nature and art in a creative environment. A unique experience that combines bird watching and artistic expression.',
      es: 'Disfruta de un tour de observación de aves en Cozumel y, al finalizar, deja volar tu creatividad con una sesión de pintura en acuarela. La acuarelista María Guadalupe Arguero te guiará paso a paso para plasmar tu ave favorita o cualquier animal de tu preferencia en una clase divertida y relajada. No se necesita experiencia previa, solo ganas de disfrutar la naturaleza y el arte en un ambiente creativo. Una experiencia única que combina observación de aves y expresión artística.',
    },
    duration: { en: '6 hours', es: '6 horas' },
    price: '2,399',
    minPax: 2,
    transport: true,
    includes: {
      en: ['Expert guide', 'Watercolor session with artist', 'Art materials', 'Water', 'Transport'],
      es: ['Guía experta', 'Sesión de acuarela con artista', 'Materiales de arte', 'Agua', 'Transporte'],
    },
  },
  {
    slug: 'aves-sabores',
    image: '/images/tours/tour-6.jpg',
    emoji: '🌮',
    name: { 
      en: 'Birds & Local Flavors', 
      es: 'Aves y Sabores Locales' 
    },
    description: {
      en: 'Live an afternoon bird watching experience on the beautiful island of Cozumel, where you will have the opportunity to discover different species in their natural environment while enjoying the tranquility of the afternoon and the island\'s landscapes. During the tour you will learn about local birds, their behavior and the importance of conserving their habitats. At the end of the tour, enjoy authentic local tacos, a delicious way to close the experience and learn a little more about Mexican gastronomy. A perfect combination of nature and local flavors.',
      es: 'Vive una experiencia vespertina de observación de aves en la hermosa isla de Cozumel, donde tendrás la oportunidad de descubrir distintas especies en su entorno natural mientras disfrutas de la tranquilidad de la tarde y los paisajes de la isla. Durante el recorrido aprenderás sobre las aves locales, su comportamiento y la importancia de conservar sus hábitats. Al finalizar el tour, disfruta de auténticos tacos locales, una deliciosa forma de cerrar la experiencia y conocer un poco más de la gastronomía mexicana. Una combinación perfecta de naturaleza y sabores locales.',
    },
    duration: { en: '5 hours', es: '5 horas' },
    price: '2,099',
    minPax: 2,
    transport: true,
    includes: {
      en: ['Expert guide', 'Binoculars', 'Authentic local tacos', 'Water', 'Transport'],
      es: ['Guía experta', 'Binoculares', 'Tacos locales auténticos', 'Agua', 'Transporte'],
    },
  },
]

const extras = [
  {
    slug: 'clases-pintura',
    image: '/images/tours/tour-7.jpg',
    emoji: '🖌️',
    name: { 
      en: 'Painting Classes in Cozumel', 
      es: 'Clases de Pintura en Cozumel' 
    },
    description: {
      en: 'María Guadalupe Arguero is a local artist focused on painting who offers watercolor technique classes for people of all levels. No previous experience is necessary to participate. During the class you can choose the theme that inspires you most, such as seascapes, sunsets or nature animals, while you learn step by step the basics of this beautiful artistic technique in a relaxed and creative environment.',
      es: 'María Guadalupe Arguero es una artista local enfocada en la pintura que ofrece clases de técnica en acuarela para personas de todos los niveles. No se necesita experiencia previa para participar. Durante la clase podrás elegir el tema que más te inspire, como paisajes del mar, atardeceres o animales de la naturaleza, mientras aprendes paso a paso las bases de esta hermosa técnica artística en un ambiente relajado y creativo.',
    },
    duration: { en: '2 hours', es: '2 horas' },
    price: '699',
    minPax: 1,
    transport: false,
    includes: {
      en: ['Local artist instructor', 'All art materials'],
      es: ['Instructora artista local', 'Todos los materiales de arte'],
    },
  },
  {
    slug: 'circulo-cacao',
    image: '/images/tours/tour-8.jpg',
    emoji: '🍫',
    name: { 
      en: 'Cacao Circle Experience', 
      es: 'Experiencia Círculo de Cacao' 
    },
    description: {
      en: 'Aku Meraki is a musical artist specialized in guiding cacao circles, using music as medicine with a holistic approach. Through songs, sounds and conscious connection, she creates transformative experiences that invite introspection and well-being, nourishing body, mind and spirit. During this experience participants will be able to connect with the energy of cacao, music and the present moment in an atmosphere of harmony and openness.',
      es: 'Aku Meraki es una artista musical especializada en guiar círculos de cacao, utilizando la música como medicina y con un enfoque holístico. A través de cantos, sonidos y conexión consciente, crea experiencias transformadoras que invitan a la introspección y al bienestar, nutriendo cuerpo, mente y espíritu. Durante esta experiencia los participantes podrán conectar con la energía del cacao, la música y el momento presente en un ambiente de armonía y apertura.',
    },
    duration: { en: '1.5 - 2 hours', es: '1.5 - 2 horas' },
    price: '1,699',
    minPax: 3,
    transport: false,
    includes: {
      en: ['Musical guide', 'Cacao ceremony', 'Holistic experience'],
      es: ['Guía musical', 'Ceremonia de cacao', 'Experiencia holística'],
    },
  },
  {
    slug: 'pesca-profunda',
    image: '/images/tours/tour-9.jpg',
    emoji: '🎣',
    name: { 
      en: 'Deep Sea Fishing', 
      es: 'Pesca Profunda' 
    },
    description: {
      en: 'Uncle Mezo, better known as Fierro Viejo, is a Cozumel native who has spent his entire life working in the Cozumel sea. With years of experience and deep knowledge of the island\'s waters, he will guide you on an authentic fishing adventure. Dive into the Caribbean and experience the thrill of our deep sea fishing service, where you will have the opportunity to enjoy the sea and test your skills. The experience includes specialized equipment so you can enjoy the activity with comfort and safety.',
      es: 'El Tío Mezo, mejor conocido como Fierro Viejo, es un cozumeleño que ha pasado toda su vida trabajando en el mar de Cozumel. Con años de experiencia y un profundo conocimiento de las aguas de la isla, te guiará en una auténtica aventura de pesca. Adéntrate en el Caribe y vive la emoción de nuestro servicio de pesca en aguas profundas, donde tendrás la oportunidad de disfrutar del mar y poner a prueba tus habilidades. La experiencia incluye equipo especializado para que puedas disfrutar de la actividad con comodidad y seguridad.',
    },
    duration: { en: '4h (half day) · 8h (full day)', es: '4h (medio día) · 8h (día completo)' },
    options: [
      {
        label: { en: 'Half day', es: 'Medio día' },
        price: '7,199',
        duration: { en: '4 hours', es: '4 horas' },
      },
      {
        label: { en: 'Full day', es: 'Día completo' },
        price: '10,599',
        duration: { en: '8 hours', es: '8 horas' },
      },
    ],
    transport: false,
    note: {
      en: '⚠️ Dock boarding fee not included',
      es: '⚠️ Cuota del muelle para abordar no incluida',
    },
    includes: {
      en: ['Experienced captain (Uncle Mezo)', 'Specialized fishing equipment'],
      es: ['Capitán experimentado (Tío Mezo)', 'Equipo de pesca especializado'],
    },
  },
]

function TourZigzag({ tour, index, locale }: { tour: any; index: number; locale: string }) {
  const l = locale as 'en' | 'es'
  const isEven = index % 2 === 0
  
  const whatsappMsg = encodeURIComponent(
    locale === 'en'
      ? `Hello! I am interested in: ${tour.name.en}`
      : `Hola! Me interesa: ${tour.name.es}`
  )
  const whatsappUrl = `https://wa.me/5219871134222?text=${whatsappMsg}`

  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow p-8`}>
      
      {/* Image */}
      <div className="w-full lg:w-2/5 flex-shrink-0">
        <div className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-[#1FB6B1]/20 to-[#2E7D32]/20">
          <Image
            src={tour.image}
            alt={tour.name[l]}
            fill
            className="object-cover"
            onError={(e: any) => { e.currentTarget.style.display = 'none' }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-9xl opacity-10 select-none">{tour.emoji}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-3/5 space-y-5">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-[#263238] leading-tight">
          {tour.emoji} {tour.name[l]}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-base leading-relaxed">
          {tour.description[l]}
        </p>

        {/* Badges - Duration, Pax, Transport */}
        <div className="flex flex-wrap gap-2">
          {tour.duration && !tour.options && (
            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium">
              ⏱ {tour.duration[l]}
            </span>
          )}
          {tour.minPax && (
            <span className="inline-flex items-center gap-1.5 bg-purple-50 text-purple-700 px-3 py-1.5 rounded-full text-sm font-medium">
              👥 {locale === 'en' ? `Min ${tour.minPax} pax` : `Mín ${tour.minPax} pax`}
            </span>
          )}
          {tour.transport !== undefined && (
            tour.transport ? (
              <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-sm font-medium">
                🚐 {locale === 'en' ? 'Transport included' : 'Transporte incluido'}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full text-sm font-medium">
                🚶 {locale === 'en' ? 'No transport' : 'Sin transporte'}
              </span>
            )
          )}
        </div>

        {/* Includes */}
        <div className="flex flex-wrap gap-2">
          {tour.includes[l].map((item: string, i: number) => (
            <span key={i} className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-medium">
              ✓ {item}
            </span>
          ))}
        </div>

        {/* Options (if multiple pricing) */}
        {tour.options && (
          <div className="space-y-3 pt-2">
            {tour.options.map((opt: any, i: number) => (
              <div key={i} className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3 border border-gray-100">
                <div className="space-y-1">
                  <div className="font-semibold text-[#263238]">{opt.label[l]}</div>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                    {opt.duration && <span>⏱ {opt.duration[l]}</span>}
                    {opt.transport !== undefined && (
                      opt.transport ? (
                        <span className="text-green-600">🚐 {locale === 'en' ? 'Transport' : 'Transporte'}</span>
                      ) : (
                        <span className="text-gray-400">🚶 {locale === 'en' ? 'No transport' : 'Sin transporte'}</span>
                      )
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#1565C0]">${opt.price}</div>
                  <div className="text-xs text-gray-400">MXN</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Note */}
        {tour.note && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3">
            <p className="text-sm text-yellow-800">{tour.note[l]}</p>
          </div>
        )}

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          {!tour.options && tour.price && (
            <div>
              <span className="text-4xl font-bold text-[#1565C0]">${tour.price}</span>
              <span className="text-sm text-gray-400 ml-2">MXN</span>
            </div>
          )}
          {tour.options && <div />}
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#F57C00] hover:bg-[#1FB6B1] text-white font-bold px-8 py-3.5 rounded-full transition-colors shadow-lg hover:shadow-xl ml-auto"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            {locale === 'en' ? 'Book Now' : 'Reservar Ahora'}
          </a>
        </div>
      </div>
    </div>
  )
}

function SectionDivider({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-6 my-16">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      <h2 className="text-2xl font-bold text-[#263238] whitespace-nowrap px-4">
        {title}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
    </div>
  )
}

export default function ToursPage() {
  const locale = useLocale()

  return (
    <div className="min-h-screen bg-[#FAFAFA]">

      {/* Header */}
      <section className="bg-gradient-to-r from-[#2E7D32] to-[#1FB6B1] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {locale === 'en' ? 'Our Experiences' : 'Nuestras Experiencias'}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {locale === 'en'
              ? 'Authentic experiences in Cozumel with expert local guides who know the island inside out'
              : 'Experiencias auténticas en Cozumel con guías locales expertas que conocen la isla a fondo'}
          </p>
        </div>
      </section>

      {/* Tours Content */}
      <section className="max-w-6xl mx-auto px-4 py-20 space-y-12">

        {/* Bird Watching Tours */}
        <div>
          <SectionDivider 
            title={locale === 'en' ? '🦜 Bird Watching Tours' : '🦜 Recorridos de Observación de Aves'} 
          />
          <div className="space-y-12">
            {birding.map((tour, index) => (
              <TourZigzag key={tour.slug} tour={tour} index={index} locale={locale} />
            ))}
          </div>
        </div>

        {/* Combos */}
        <div>
          <SectionDivider 
            title={locale === 'en' ? '✨ Combos' : '✨ Combos'} 
          />
          <div className="space-y-12">
            {combos.map((tour, index) => (
              <TourZigzag key={tour.slug} tour={tour} index={index + birding.length} locale={locale} />
            ))}
          </div>
        </div>

        {/* Other Activities */}
        <div>
          <SectionDivider 
            title={locale === 'en' ? '🌟 Other Activities' : '🌟 Otras Actividades'} 
          />
          <div className="space-y-12">
            {extras.map((tour, index) => (
              <TourZigzag key={tour.slug} tour={tour} index={index + birding.length + combos.length} locale={locale} />
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-20 p-8 bg-white rounded-2xl border border-gray-100 shadow-sm text-center">
          <p className="text-gray-600 text-base leading-relaxed">
            💬 {locale === 'en'
              ? 'All prices are subject to the number of participants. Tours including transport offer hotel pickup in Cozumel. Contact us for custom experiences or special requests.'
              : 'Todos los precios están sujetos al número de participantes. Los tours que incluyen transporte cuentan con recogida en hotel en Cozumel. Contáctanos para experiencias personalizadas o solicitudes especiales.'}
          </p>
        </div>

      </section>
    </div>
  )
}