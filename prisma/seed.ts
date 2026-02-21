import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Tour 1
  const tour1 = await prisma.tour.create({
    data: {
      name: 'Morning Birding Tour',
      slug: 'morning-birding',
      shortDescription: 'Early morning birding focusing on Cozumel endemic species in their natural habitat.',
      fullDescription: 'Experience the magic of Cozumel at dawn. This tour focuses on the island\'s endemic species including the Cozumel Vireo, Cozumel Thrasher, and Cozumel Emerald. We explore mangrove forests, coastal areas, and tropical gardens during the most active birding hours.',
      duration: 240,
      price: 120.00,
      maxPeople: 6,
      languages: ['en', 'es', 'fr'],
      includes: ['Expert guide', 'Binoculars', 'Field guide', 'Transport', 'Water'],
      notIncludes: ['Breakfast', 'Tips', 'Personal equipment'],
      whatToBring: ['Comfortable clothes', 'Sun protection', 'Camera', 'Insect repellent'],
      highlights: ['Cozumel Vireo', 'Cozumel Thrasher', 'Cozumel Emerald', 'Mangrove forests', 'Beach birding'],
      itinerary: [
        { time: '6:00 AM', activity: 'Hotel pickup' },
        { time: '6:30 AM', activity: 'First birding spot - mangroves' },
        { time: '8:00 AM', activity: 'Beach and coastal area' },
        { time: '9:30 AM', activity: 'Return to hotel' },
      ],
      isActive: true,
      featured: true,
      sortOrder: 1,
      metaTitle: 'Morning Birding Tour Cozumel | Endemic Species',
      metaDescription: 'Discover Cozumel endemic birds on our morning tour. Expert guide, small groups, max 6 people.',
      images: {
        create: [
          { imageUrl: '/images/tours/morning-birding-1.jpg', altText: 'Morning birding in Cozumel', isMain: true, sortOrder: 1 },
          { imageUrl: '/images/tours/morning-birding-2.jpg', altText: 'Cozumel Vireo', isMain: false, sortOrder: 2 },
        ]
      }
    }
  })

  // Tour 2
  const tour2 = await prisma.tour.create({
    data: {
      name: 'Full Day Adventure',
      slug: 'full-day-adventure',
      shortDescription: 'Complete island coverage visiting multiple habitats and spotting 50+ species in one day.',
      fullDescription: 'Our most comprehensive tour covers the entire island from dawn to early afternoon. We visit mangroves, tropical forest, coastal lagoons, and urban gardens to maximize species diversity. Perfect for serious birders wanting to see everything Cozumel has to offer.',
      duration: 480,
      price: 220.00,
      maxPeople: 4,
      languages: ['en', 'es'],
      includes: ['Expert guide', 'Binoculars', 'Field guide', 'Transport', 'Water', 'Snack'],
      notIncludes: ['Lunch', 'Tips', 'Personal equipment'],
      whatToBring: ['Comfortable clothes', 'Sun protection', 'Camera', 'Insect repellent', 'Lunch'],
      highlights: ['50+ species', 'Multiple habitats', 'Endemic species', 'Migratory birds', 'Coastal lagoons'],
      itinerary: [
        { time: '5:30 AM', activity: 'Hotel pickup' },
        { time: '6:00 AM', activity: 'Mangrove forest' },
        { time: '8:00 AM', activity: 'Tropical forest interior' },
        { time: '10:00 AM', activity: 'Coastal lagoon' },
        { time: '12:00 PM', activity: 'Urban gardens' },
        { time: '1:30 PM', activity: 'Return to hotel' },
      ],
      isActive: true,
      featured: true,
      sortOrder: 2,
      metaTitle: 'Full Day Birding Adventure Cozumel | 50+ Species',
      metaDescription: 'See 50+ bird species in one day. Complete island coverage with expert guide.',
      images: {
        create: [
          { imageUrl: '/images/tours/full-day-1.jpg', altText: 'Full day birding adventure', isMain: true, sortOrder: 1 },
          { imageUrl: '/images/tours/full-day-2.jpg', altText: 'Tropical forest birding', isMain: false, sortOrder: 2 },
        ]
      }
    }
  })

  // Tour 3
  const tour3 = await prisma.tour.create({
    data: {
      name: 'Photography Tour',
      slug: 'photography-tour',
      shortDescription: 'Specialized tour for bird photographers with optimal lighting and positioning tips.',
      fullDescription: 'Designed specifically for photographers, this tour prioritizes the best light conditions and positions for stunning bird photography. Your guide knows exactly where to find perching birds in beautiful settings. We move slowly and quietly to get the perfect shot.',
      duration: 360,
      price: 180.00,
      maxPeople: 3,
      languages: ['en', 'es', 'fr'],
      includes: ['Expert guide', 'Binoculars', 'Field guide', 'Transport', 'Water', 'Photography tips'],
      notIncludes: ['Camera equipment', 'Breakfast', 'Tips'],
      whatToBring: ['Camera with telephoto lens', 'Extra batteries', 'Memory cards', 'Comfortable clothes', 'Sun protection'],
      highlights: ['Best photo spots', 'Optimal lighting', 'Endemic species', 'Slow-paced', 'Pro tips'],
      itinerary: [
        { time: '6:00 AM', activity: 'Hotel pickup - golden hour starts' },
        { time: '6:30 AM', activity: 'Prime photography location 1' },
        { time: '8:30 AM', activity: 'Prime photography location 2' },
        { time: '10:30 AM', activity: 'Coastal birds session' },
        { time: '12:00 PM', activity: 'Return to hotel' },
      ],
      isActive: true,
      featured: true,
      sortOrder: 3,
      metaTitle: 'Bird Photography Tour Cozumel | Best Spots',
      metaDescription: 'Specialized bird photography tour in Cozumel. Best light, best spots, expert guide.',
      images: {
        create: [
          { imageUrl: '/images/tours/photography-1.jpg', altText: 'Bird photography tour Cozumel', isMain: true, sortOrder: 1 },
          { imageUrl: '/images/tours/photography-2.jpg', altText: 'Photographer with birds', isMain: false, sortOrder: 2 },
        ]
      }
    }
  })

  // Gallery images
  await prisma.galleryImage.createMany({
    data: [
      { imageUrl: '/images/gallery/cozumel-vireo.jpg', category: 'birds', title: 'Cozumel Vireo', altText: 'Cozumel Vireo endemic bird', sortOrder: 1 },
      { imageUrl: '/images/gallery/cozumel-thrasher.jpg', category: 'birds', title: 'Cozumel Thrasher', altText: 'Cozumel Thrasher endemic bird', sortOrder: 2 },
      { imageUrl: '/images/gallery/cozumel-emerald.jpg', category: 'birds', title: 'Cozumel Emerald', altText: 'Cozumel Emerald hummingbird', sortOrder: 3 },
      { imageUrl: '/images/gallery/mangrove.jpg', category: 'nature', title: 'Mangrove Forest', altText: 'Cozumel mangrove forest', sortOrder: 4 },
      { imageUrl: '/images/gallery/coastal.jpg', category: 'nature', title: 'Coastal Area', altText: 'Cozumel coastal birding area', sortOrder: 5 },
      { imageUrl: '/images/gallery/tour-group.jpg', category: 'tours', title: 'Happy Birders', altText: 'Group on birding tour', sortOrder: 6 },
    ]
  })

  console.log('✅ Seed completed!')
  console.log(`   Tour 1: ${tour1.name}`)
  console.log(`   Tour 2: ${tour2.name}`)
  console.log(`   Tour 3: ${tour3.name}`)
  console.log(`   Gallery: 6 images`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
