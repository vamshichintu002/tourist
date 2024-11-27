import { CategoryType } from '../types/attraction';

export const categories: CategoryType[] = [
  {
    id: 'cultural-religious',
    title: 'Cultural & Religious Sites',
    description: "Discover Abu Dhabi's rich cultural heritage through its magnificent religious and cultural landmarks.",
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>',
    attractions: [
      {
        id: 'sheikh-zayed-mosque',
        name: 'Sheikh Zayed Grand Mosque',
        description: 'A magnificent architectural masterpiece and one of the largest mosques in the world.',
        location: 'Sheikh Rashid Bin Saeed Street',
        duration: '2-3 hours',
        category: 'Religious Site',
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
        id: 'baps-hindu-temple',
        name: 'BAPS Hindu Temple',
        description: 'A serene temple promoting cultural harmony and architectural beauty.',
        location: 'Abu Mureikhah',
        duration: '1-2 hours',
        category: 'Religious Site',
        image: '/api/placeholder/800/600',
        highlights: [
          "Traditional architecture",
          "Cultural ceremonies",
          "Peaceful environment",
          "Educational tours",
          "Community events"
        ]
      },
      {
        id: 'qasr-al-watan',
        name: 'Qasr Al Watan',
        description: 'A cultural landmark and presidential palace showcasing Arabian heritage.',
        location: 'Al Ras Al Akhdar',
        duration: '2-3 hours',
        category: 'Palace',
        image: '/api/placeholder/800/600',
        highlights: [
          "Presidential palace tours",
          "Arabian architecture",
          "Historical exhibits",
          "Light and sound show",
          "Cultural exhibitions"
        ]
      },
      {
        id: 'louvre-abu-dhabi',
        name: 'Louvre Abu Dhabi',
        description: 'A world-class art museum with global masterpieces and striking architecture.',
        location: 'Saadiyat Cultural District',
        duration: '3-4 hours',
        category: 'Museum',
        image: '/api/placeholder/800/600',
        highlights: [
          "Iconic dome architecture",
          "Global art collections",
          "Temporary exhibitions",
          "Children's museum",
          "Waterfront promenade"
        ]
      }
    ]
  },
  {
    id: 'luxury',
    title: 'Luxury Experiences',
    description: 'Experience Abu Dhabi\'s refined luxury through world-class venues and exhibitions.',
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>',
    attractions: [
      {
        id: 'emirates-palace',
        name: 'Emirates Palace',
        description: 'A luxurious hotel and cultural landmark offering opulent dining, stunning architecture, and landscaped gardens.',
        location: 'West Corniche Road',
        duration: '2-3 hours',
        category: 'Luxury',
        image: '/api/placeholder/800/600',
        highlights: [
          "Gold-leaf interior",
          "Private beach",
          "Luxury dining venues",
          "Landscaped gardens",
          "Art gallery"
        ]
      }
    ]
  },
  {
    id: 'entertainment-theme-parks',
    title: 'Entertainment & Theme Parks',
    description: 'Experience thrilling adventures and family fun at Abu Dhabi\'s world-class entertainment destinations.',
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
    attractions: [
      {
        id: 'ferrari-world',
        name: 'Ferrari World Abu Dhabi',
        description: 'The world\'s first Ferrari-branded theme park with thrilling rides.',
        location: 'Yas Island',
        duration: '4-6 hours',
        category: 'Theme Park'
      },
      {
        id: 'warner-bros-world',
        name: 'Warner Bros. World Abu Dhabi',
        description: 'An immersive indoor theme park with Warner Bros. characters.',
        location: 'Yas Island',
        duration: '4-6 hours',
        category: 'Theme Park'
      },
      {
        id: 'yas-waterworld',
        name: 'Yas Waterworld',
        description: 'A unique water park with Emirati culture-themed attractions.',
        location: 'Yas Island',
        duration: '4-6 hours',
        category: 'Water Park'
      }
    ]
  },
  {
    id: 'landmarks-islands',
    title: 'Landmarks & Islands',
    description: 'Explore Abu Dhabi\'s iconic landmarks and island destinations.',
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>',
    attractions: [
      {
        id: 'abu-dhabi-corniche',
        name: 'Abu Dhabi Corniche',
        description: 'A picturesque waterfront promenade with stunning views.',
        location: 'Corniche Road',
        duration: '2-3 hours',
        category: 'Waterfront'
      },
      {
        id: 'yas-island',
        name: 'Yas Island',
        description: 'A premier entertainment destination with world-class attractions.',
        location: 'Yas Island',
        duration: 'Full day',
        category: 'Island'
      },
      {
        id: 'saadiyat-island',
        name: 'Saadiyat Island',
        description: 'A cultural and luxury destination with pristine beaches.',
        location: 'Saadiyat Island',
        duration: 'Full day',
        category: 'Island'
      },
      {
        id: 'sir-bani-yas-island',
        name: 'Sir Bani Yas Island',
        description: 'A natural island with wildlife encounters and eco-resorts.',
        location: 'Western Region',
        duration: '1-2 days',
        category: 'Island'
      }
    ]
  }
];

export const getAttractionById = (id: string) => {
  for (const category of categories) {
    const attraction = category.attractions.find(attr => attr.id === id);
    if (attraction) return attraction;
  }
  return null;
};

export default categories;