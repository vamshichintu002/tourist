import { CategoryType } from '../types/attraction';

export const categories: CategoryType[] = [
  {
    id: 'beaches-waterfronts',
    title: 'Beaches & Waterfronts',
    description: 'Discover Sharjah\'s beautiful coastal areas and waterfront destinations.',
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>',
    attractions: [
      {
        id: 'khor-fakkan-beach',
        name: 'Khor Fakkan Beach',
        description: 'A picturesque beach offering stunning views, water sports, and picnic areas.',
        location: 'Khor Fakkan',
        duration: '3-4 hours',
        category: 'Beach',
        image: '/api/placeholder/800/600',
        highlights: [
          "Pristine sandy beach",
          "Water sports activities",
          "Picnic facilities",
          "Mountain backdrop",
          "Swimming areas"
        ]
      },
      {
        id: 'al-majaz-waterfront',
        name: 'Al Majaz Waterfront',
        description: 'A popular leisure destination with restaurants and entertainment.',
        location: 'Khalid Lagoon',
        duration: '2-3 hours',
        category: 'Waterfront',
        image: '/sharjah/majaz-waterfront.jpg',
        highlights: [
          "Musical fountain",
          "Restaurants",
          "Family activities",
          "Walking paths",
          "Events venue"
        ]
      }
    ]
  },
  {
    id: 'art-culture',
    title: 'Art & Culture',
    description: 'Experience Sharjah\'s rich cultural heritage through its museums and artistic venues.',
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>',
    attractions: [
      {
        id: 'sharjah-art-museum',
        name: 'Sharjah Art Museum',
        description: 'A renowned museum showcasing a rich collection of contemporary and classical artworks.',
        location: 'Arts Area, Heart of Sharjah',
        duration: '2-3 hours',
        category: 'Museum',
        image: '/api/placeholder/800/600',
        highlights: [
          "Contemporary art collections",
          "Temporary exhibitions",
          "Artist workshops",
          "Guided tours",
          "Educational programs"
        ]
      },
      {
        id: 'calligraphy-museum',
        name: 'Sharjah Calligraphy Museum',
        description: 'Dedicated to the art of Arabic calligraphy, featuring works by local and international artists.',
        location: 'Heart of Sharjah',
        duration: '1-2 hours',
        category: 'Museum',
        image: '/api/placeholder/800/600',
        highlights: [
          "Arabic calligraphy exhibits",
          "Historical manuscripts",
          "Calligraphy workshops",
          "Interactive displays",
          "Artist demonstrations"
        ]
      },
      {
        id: 'heritage-area',
        name: 'Sharjah Heritage Area',
        description: 'A cultural district with restored buildings, museums, and traditional Emirati architecture.',
        location: 'Heart of Sharjah',
        duration: '3-4 hours',
        category: 'Heritage',
        image: '/api/placeholder/800/600',
        highlights: [
          "Traditional architecture",
          "Cultural museums",
          "Heritage cafes",
          "Craft shops",
          "Walking tours"
        ]
      },
      {
        id: 'islamic-civilization-museum',
        name: 'Sharjah Museum of Islamic Civilization',
        description: 'A cultural institution showcasing Islamic art and history.',
        location: 'Corniche Street',
        duration: '2-3 hours',
        category: 'Museum',
        image: '/sharjah/islamic-museum.jpg',
        highlights: [
          "Islamic artifacts",
          "Cultural exhibits",
          "Historical displays",
          "Educational programs",
          "Guided tours"
        ]
      }
    ]
  },
  {
    id: 'nature-parks',
    title: 'Nature & Parks',
    description: 'Explore Sharjah\'s natural beauty and family-friendly recreational spaces.',
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>',
    attractions: [
      {
        id: 'al-noor-island',
        name: 'Al Noor Island',
        description: 'A tranquil oasis with art installations, a butterfly house, and beautifully landscaped gardens.',
        location: 'Khalid Lagoon',
        duration: '2-3 hours',
        category: 'Nature',
        image: '/api/placeholder/800/600',
        highlights: [
          "Butterfly house",
          "Art installations",
          "Literature pavilion",
          "Scenic walking paths",
          "Meditation spaces"
        ]
      },
      {
        id: 'al-montazah-parks',
        name: 'Al Montazah Parks',
        description: 'A family-friendly park offering water slides, rides, and entertainment for all ages.',
        location: 'Al Montazah',
        duration: '4-5 hours',
        category: 'Theme Park',
        image: '/api/placeholder/800/600',
        highlights: [
          "Water park",
          "Amusement rides",
          "Family activities",
          "Dining options",
          "Green spaces"
        ]
      }
    ]
  },
  {
    id: 'entertainment-attractions',
    title: 'Entertainment & Attractions',
    description: 'Discover exciting entertainment venues and educational attractions in Sharjah.',
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
    attractions: [
      {
        id: 'sharjah-aquarium',
        name: 'Sharjah Aquarium',
        description: 'An underwater exploration center showcasing marine life from the Arabian Gulf.',
        location: 'Al Khan',
        duration: '1-2 hours',
        category: 'Aquarium',
        image: '/api/placeholder/800/600',
        highlights: [
          "Marine life exhibits",
          "Touch tanks",
          "Educational programs",
          "Feeding shows",
          "Interactive displays"
        ]
      },
      {
        id: 'science-museum',
        name: 'Sharjah Science Museum',
        description: 'A hands-on museum promoting scientific learning through interactive exhibits.',
        location: 'Airport Road',
        duration: '2-3 hours',
        category: 'Museum',
        image: '/api/placeholder/800/600',
        highlights: [
          "Interactive exhibits",
          "Science shows",
          "Educational workshops",
          "Planetarium",
          "Children's activities"
        ]
      }
    ]
  },
  {
    id: 'historic-specialty-museums',
    title: 'Historic & Specialty Museums',
    description: 'Explore unique museums showcasing Sharjah\'s heritage and special collections.',
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>',
    attractions: [
      {
        id: 'mleiha-centre',
        name: 'Mleiha Archaeological Centre',
        description: 'A site exploring the ancient history and archaeological heritage of the region.',
        location: 'Mleiha Desert',
        duration: '3-4 hours',
        category: 'Museum',
        image: '/api/placeholder/800/600',
        highlights: [
          "Archaeological exhibits",
          "Desert adventures",
          "Guided tours",
          "Historical sites",
          "Interactive displays"
        ]
      },
      {
        id: 'classic-cars-museum',
        name: 'Sharjah Classic Cars Museum',
        description: 'Showcasing vintage and classic cars from different eras.',
        location: 'Industrial Area',
        duration: '1-2 hours',
        category: 'Museum',
        image: '/api/placeholder/800/600',
        highlights: [
          "Vintage car collection",
          "Classic automobiles",
          "Restoration workshop",
          "Historical exhibits",
          "Photo opportunities"
        ]
      }
    ]
  },
  {
    id: 'shopping-events',
    title: 'Shopping & Events',
    description: 'Experience Sharjah\'s vibrant shopping scene and seasonal events.',
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>',
    attractions: [
      {
        id: 'blue-souk',
        name: 'Blue Souk (Central Market)',
        description: 'A bustling market with traditional goods, jewelry, and souvenirs.',
        location: 'King Faisal Street',
        duration: '2-3 hours',
        category: 'Shopping',
        image: '/api/placeholder/800/600',
        highlights: [
          "Traditional architecture",
          "Gold and jewelry",
          "Handicrafts",
          "Perfume shops",
          "Carpet dealers"
        ]
      },
      {
        id: 'al-qasba',
        name: 'Al Qasba',
        description: 'A lively area featuring restaurants, entertainment, and the Eye of the Emirates Ferris wheel.',
        location: 'Al Qasba',
        duration: '2-3 hours',
        category: 'Entertainment',
        image: '/api/placeholder/800/600',
        highlights: [
          "Eye of the Emirates",
          "Canal restaurants",
          "Musical fountain",
          "Cultural activities",
          "Children's play areas"
        ]
      },
      {
        id: 'light-festival',
        name: 'Sharjah Light Festival',
        description: 'An annual event transforming iconic landmarks with colorful light displays and performances.',
        location: 'Various Locations',
        duration: 'Evening Events',
        category: 'Event',
        image: '/api/placeholder/800/600',
        highlights: [
          "Light installations",
          "Artistic performances",
          "Interactive displays",
          "Cultural shows",
          "Photography opportunities"
        ]
      }
    ]
  }
];

export const getAttractionById = (id: string) => {
  for (const category of categories) {
    const attraction = category.attractions.find(a => a.id === id);
    if (attraction) return attraction;
  }
  return null;
};