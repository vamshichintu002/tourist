import { CategoryType } from '../types/attraction';

export const categories: CategoryType[] = [
  {
    id: 'iconic-landmarks',
    title: 'Iconic Landmarks',
    description: "Discover Abu Dhabi's architectural marvels and cultural monuments that showcase its heritage and vision.",
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>',
    attractions: [
      {
        id: 'sheikh-zayed-mosque',
        name: 'Sheikh Zayed Grand Mosque',
        description: 'A magnificent architectural masterpiece and one of the largest mosques in the world, known for its stunning white marble domes and intricate artistry.',
        location: 'Sheikh Rashid Bin Saeed Street',
        duration: '2-3 hours',
        category: 'Religious Site',
        price: 'Free',
        image: '/api/placeholder/800/600',
        highlights: [
          "82 white marble domes",
          "World's largest hand-knotted carpet",
          "Crystal chandeliers",
          "Reflective pools",
          "Guided tours available"
        ]
      },
      {
        id: 'qasr-al-watan',
        name: 'Qasr Al Watan',
        description: 'A cultural landmark and presidential palace showcasing Arabian heritage and craftsmanship.',
        location: 'Al Ras Al Akhdar',
        duration: '2-3 hours',
        category: 'Palace',
        price: '$30',
        image: '/api/placeholder/800/600',
        highlights: [
          "Presidential palace tours",
          "Arabian architecture",
          "Historical exhibits",
          "Light and sound show",
          "Cultural exhibitions"
        ]
      }
    ]
  },
  {
    id: 'luxury-cultural',
    title: 'Luxury & Cultural Experiences',
    description: 'Experience Abu Dhabi\'s refined luxury and rich cultural heritage through world-class venues and exhibitions.',
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>',
    attractions: [
      {
        id: 'emirates-palace',
        name: 'Emirates Palace',
        description: 'A luxurious hotel and cultural landmark offering opulent dining, stunning architecture, and landscaped gardens.',
        location: 'West Corniche Road',
        duration: '2-3 hours',
        category: 'Luxury',
        price: 'Varies',
        image: '/api/placeholder/800/600',
        highlights: [
          "Gold-leaf interior",
          "Private beach",
          "Luxury dining venues",
          "Landscaped gardens",
          "Art gallery"
        ]
      },
      {
        id: 'louvre-abu-dhabi',
        name: 'Louvre Abu Dhabi',
        description: 'A world-class art museum featuring global masterpieces and a striking dome design symbolizing light and shade.',
        location: 'Saadiyat Cultural District',
        duration: '3-4 hours',
        category: 'Museum',
        price: '$40',
        image: '/api/placeholder/800/600',
        highlights: [
          "Iconic dome architecture",
          "Global art collections",
          "Temporary exhibitions",
          "Children's museum",
          "Waterfront promenade"
        ]
      },
      {
        id: 'baps-hindu-temple',
        name: 'BAPS Hindu Temple',
        description: 'A serene temple promoting cultural harmony and architectural beauty.',
        location: 'Abu Mureikhah',
        duration: '1-2 hours',
        category: 'Religious Site',
        price: 'Free',
        image: '/api/placeholder/800/600',
        highlights: [
          "Traditional architecture",
          "Cultural ceremonies",
          "Peaceful environment",
          "Educational tours",
          "Community events"
        ]
      }
    ]
  },
  {
    id: 'entertainment-theme-parks',
    title: 'Entertainment & Theme Parks',
    description: 'Experience world-class entertainment and thrilling adventures at Abu Dhabi\'s premier theme parks.',
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
    attractions: [
      {
        id: 'yas-island',
        name: 'Yas Island',
        description: 'A premier leisure destination featuring luxury hotels, entertainment, and adventure.',
        location: 'Yas Island',
        duration: 'Multiple Days',
        category: 'Entertainment',
        price: 'Varies',
        image: '/api/placeholder/800/600',
        highlights: [
          "Theme parks",
          "Luxury hotels",
          "Shopping mall",
          "Concert arena",
          "F1 circuit"
        ]
      },
      {
        id: 'ferrari-world',
        name: 'Ferrari World Abu Dhabi',
        description: 'A thrilling theme park with the world\'s fastest roller coaster and attractions celebrating Ferrari\'s legacy.',
        location: 'Yas Island',
        duration: 'Full Day',
        category: 'Theme Park',
        price: '$80',
        image: '/api/placeholder/800/600',
        highlights: [
          "Formula Rossa coaster",
          "Ferrari racing history",
          "Simulator experiences",
          "Kids' driving school",
          "Italian dining"
        ]
      },
      {
        id: 'yas-waterworld',
        name: 'Yas Waterworld',
        description: 'A water park with unique slides and attractions inspired by Emirati pearl-diving heritage.',
        location: 'Yas Island',
        duration: 'Full Day',
        category: 'Water Park',
        price: '$75',
        image: '/api/placeholder/800/600',
        highlights: [
          "40+ rides and slides",
          "Pearl diving experience",
          "Traditional theme",
          "Family attractions",
          "Private cabanas"
        ]
      },
      {
        id: 'warner-bros-world',
        name: 'Warner Bros. World Abu Dhabi',
        description: 'A family-friendly indoor theme park with immersive zones featuring Warner Bros. characters and adventures.',
        location: 'Yas Island',
        duration: 'Full Day',
        category: 'Theme Park',
        price: '$80',
        image: '/api/placeholder/800/600',
        highlights: [
          "Themed zones",
          "Character meets",
          "Family rides",
          "Live shows",
          "Themed dining"
        ]
      }
    ]
  },
  {
    id: 'beaches-islands',
    title: 'Beaches & Islands',
    description: 'Explore Abu Dhabi\'s pristine coastline and unique island destinations.',
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>',
    attractions: [
      {
        id: 'abu-dhabi-corniche',
        name: 'Abu Dhabi Corniche',
        description: 'A picturesque waterfront promenade with beaches, parks, and cycling tracks.',
        location: 'Corniche Road',
        duration: '2-3 hours',
        category: 'Waterfront',
        price: 'Free',
        image: '/api/placeholder/800/600',
        highlights: [
          "8km promenade",
          "Public beaches",
          "Cycling tracks",
          "Children's playgrounds",
          "Cafes and restaurants"
        ]
      },
      {
        id: 'saadiyat-island',
        name: 'Saadiyat Island',
        description: 'A cultural and luxury destination with pristine beaches, high-end resorts, and the Louvre Abu Dhabi.',
        location: 'Saadiyat Island',
        duration: 'Full Day',
        category: 'Island',
        price: 'Varies',
        image: '/api/placeholder/800/600',
        highlights: [
          "White sand beaches",
          "Luxury resorts",
          "Cultural district",
          "Golf course",
          "Wildlife sanctuary"
        ]
      },
      {
        id: 'sir-bani-yas-island',
        name: 'Sir Bani Yas Island',
        description: 'A wildlife reserve offering eco-tourism experiences, luxury stays, and nature adventures.',
        location: 'Sir Bani Yas Island',
        duration: 'Multiple Days',
        category: 'Island',
        price: 'Varies',
        image: '/api/placeholder/800/600',
        highlights: [
          "Wildlife safari",
          "Nature reserves",
          "Adventure activities",
          "Luxury resorts",
          "Water sports"
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