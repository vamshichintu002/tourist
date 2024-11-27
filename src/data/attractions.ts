import { CategoryType } from '../types/attraction';

export const categories: CategoryType[] = [
  {
    id: 'shopping-entertainment',
    title: 'Shopping & Entertainment',
    description: 'Explore world-class shopping destinations and entertainment venues that make Dubai a retail paradise.',
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>',
    attractions: [
      {
        id: 'dubai-mall',
        name: 'Dubai Mall',
        description: 'A premier shopping and entertainment hub with luxury stores, restaurants, and attractions.',
        location: 'Downtown Dubai',
        duration: '3-4 hours',
        category: 'Shopping',
        image: '/api/placeholder/800/600',
        highlights: [
          "Over 1,200 retail outlets",
          "Fashion Avenue luxury section",
          "Dubai Aquarium & Underwater Zoo",
          "Dubai Ice Rink",
          "Dubai Fountain views"
        ]
      },
      {
        id: 'dubai-mall-aquarium',
        name: 'Dubai Mall Aquarium & Underwater Zoo',
        description: 'Home to marine life exhibits and interactive underwater experiences.',
        location: 'Dubai Mall',
        duration: '1-2 hours',
        category: 'Entertainment',
        image: '/api/placeholder/800/600',
        highlights: [
          "10-million liter tank",
          "Underwater tunnel",
          "Interactive touch tanks",
          "Shark encounters",
          "Marine life feeding shows"
        ]
      },
      {
        id: 'dubai-fountain',
        name: 'Dubai Mall Water Fountain Show',
        description: 'The world\'s largest choreographed fountain show.',
        location: 'Downtown Dubai',
        duration: '30 minutes',
        category: 'Entertainment',
        image: '/api/placeholder/800/600',
        highlights: [
          "Musical performances",
          "Evening light shows",
          "Burj Khalifa views",
          "Multiple shows daily",
          "Photography spots"
        ]
      },
      {
        id: 'mall-of-emirates',
        name: 'Mall of the Emirates',
        description: 'Renowned for high-end shopping and Ski Dubai.',
        location: 'Al Barsha',
        duration: '2-3 hours',
        category: 'Shopping',
        image: '/api/placeholder/800/600',
        highlights: [
          "Ski Dubai indoor resort",
          "Luxury boutiques",
          "Fine dining restaurants",
          "VOX Cinemas",
          "Magic Planet entertainment"
        ]
      },
      {
        id: 'nakheel-mall',
        name: 'Nakheel Mall',
        description: 'A lifestyle destination on Palm Jumeirah offering retail and dining.',
        location: 'Palm Jumeirah',
        duration: '2-3 hours',
        category: 'Shopping',
        image: '/api/placeholder/800/600',
        highlights: [
          "Premium retail stores",
          "Diverse dining options",
          "Entertainment facilities",
          "Palm Tower access",
          "Panoramic views"
        ]
      },
      {
        id: 'the-pointe',
        name: 'The Pointe',
        description: 'A waterfront destination with dining and shopping, featuring a stunning fountain show.',
        location: 'Palm Jumeirah',
        duration: '2-3 hours',
        category: 'Entertainment',
        image: '/api/placeholder/800/600',
        highlights: [
          "Palm fountain show",
          "Waterfront dining",
          "Retail outlets",
          "Beach access",
          "Atlantis views"
        ]
      },
      {
        id: 'souk-madinat-jumeirah',
        name: 'Souk Madinat Jumeirah',
        description: 'A traditional Arabian souk within the Madinat Jumeirah complex, offering a unique shopping experience with traditional artifacts, textiles, and souvenirs.',
        location: 'Jumeirah',
        duration: '2-3 hours',
        category: 'Shopping',
        image: 'https://photosofplaces.netlify.app/images/dubai/Souk-Madinat-Jumeirah.jpg',
        highlights: [
          "Traditional Arabian architecture",
          "Waterfront dining",
          "Authentic souvenirs",
          "Abra boat rides",
          "Burj Al Arab views"
        ]
      }
    ]
  },
  {
    id: 'iconic-landmarks',
    title: 'Iconic Landmarks',
    description: "Visit Dubai's architectural marvels and record-breaking structures that define its skyline.",
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>',
    attractions: [
      {
        id: 'burj-khalifa',
        name: 'Burj Khalifa',
        description: 'The world\'s tallest building with observation decks.',
        location: 'Downtown Dubai',
        duration: '1-2 hours',
        category: 'Architecture',
        image: '/api/placeholder/800/600',
        highlights: [
          "At the Top observation deck",
          "SKY lounge",
          "Dubai Fountain views",
          "Armani Hotel",
          "The Lounge - Burj Khalifa"
        ]
      },
      {
        id: 'dubai-frame',
        name: 'Dubai Frame',
        description: 'A towering frame offering panoramic views of Dubai.',
        location: 'Zabeel Park',
        duration: '1-2 hours',
        category: 'Architecture',
        image: '/api/placeholder/800/600',
        highlights: [
          "Glass walkway",
          "Old Dubai views",
          "New Dubai views",
          "Interactive exhibits",
          "Sky deck"
        ]
      },
      {
        id: 'museum-of-future',
        name: 'Museum of the Future',
        description: 'A futuristic hub with exhibits on innovation and technology.',
        location: 'Sheikh Zayed Road',
        duration: '2-3 hours',
        category: 'Museum',
        image: '/api/placeholder/800/600',
        highlights: [
          "Interactive exhibitions",
          "Future technology demos",
          "Innovative architecture",
          "Educational programs",
          "Research facilities"
        ]
      },
      {
        id: 'view-at-palm',
        name: 'View at the Palm',
        description: 'An observation deck with views of Palm Jumeirah and Dubai skyline.',
        location: 'Palm Jumeirah',
        duration: '1-2 hours',
        category: 'Observation Deck',
        image: '/api/placeholder/800/600',
        highlights: [
          "360-degree views",
          "Interactive experiences",
          "Palm Jumeirah vista",
          "Dubai skyline panorama",
          "Digital exhibitions"
        ]
      }
    ]
  },
  {
    id: 'outdoor-nature',
    title: 'Outdoor & Nature',
    description: 'Experience Dubai\'s natural beauty and outdoor attractions.',
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>',
    attractions: [
      {
        id: 'miracle-garden',
        name: 'Miracle Garden',
        description: 'A flower garden featuring creative seasonal displays.',
        location: 'Dubailand',
        duration: '2-3 hours',
        category: 'Garden',
        image: '/api/placeholder/800/600',
        highlights: [
          "Floral displays",
          "Butterfly garden",
          "Disney avenue",
          "Floral structures",
          "Seasonal themes"
        ]
      },
      {
        id: 'global-village',
        name: 'Global Village',
        description: 'A cultural park with global pavilions, dining, and entertainment.',
        location: 'Dubailand',
        duration: '4-5 hours',
        category: 'Cultural Park',
        image: '/api/placeholder/800/600',
        highlights: [
          "International pavilions",
          "Cultural performances",
          "Global cuisine",
          "Shopping bazaars",
          "Carnival rides"
        ]
      },
      {
        id: 'garden-glow',
        name: 'Garden Glow',
        description: 'A nighttime park with illuminated art installations.',
        location: 'Zabeel Park',
        duration: '2-3 hours',
        category: 'Entertainment',
        image: '/api/placeholder/800/600',
        highlights: [
          "LED light displays",
          "Art installations",
          "Dinosaur Park",
          "Interactive zones",
          "Evening shows"
        ]
      }
    ]
  },
  {
    id: 'beaches-islands',
    title: 'Beaches & Islands',
    description: 'Discover Dubai\'s stunning coastline and man-made islands.',
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 0115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>',
    attractions: [
      {
        id: 'dubai-marina',
        name: 'Dubai Marina',
        description: 'A waterfront district with luxury yachts, promenades, and dining.',
        location: 'Dubai Marina',
        duration: '2-3 hours',
        category: 'Waterfront',
        image: '/api/placeholder/800/600',
        highlights: [
          "Marina Walk",
          "Yacht tours",
          "Dining options",
          "Shopping outlets",
          "Beach access"
        ]
      },
      {
        id: 'dubai-creek',
        name: 'Dubai Creek',
        description: 'A historic waterway with traditional souks and cultural landmarks.',
        location: 'Deira',
        duration: '2-3 hours',
        category: 'Heritage',
        image: '/api/placeholder/800/600',
        highlights: [
          "Abra rides",
          "Gold Souk",
          "Spice Souk",
          "Heritage buildings",
          "Dhow cruises"
        ]
      },
      {
        id: 'jbr-beach',
        name: 'JBR Beach',
        description: 'A public beach known for activities, dining, and shopping.',
        location: 'Jumeirah Beach Residence',
        duration: '3-4 hours',
        category: 'Beach',
        image: '/api/placeholder/800/600',
        highlights: [
          "Beach activities",
          "The Walk shopping",
          "Beachfront dining",
          "Water sports",
          "Entertainment options"
        ]
      },
      {
        id: 'bluewaters-island',
        name: 'Blue Waters Island',
        description: 'Features Ain Dubai and luxurious dining options.',
        location: 'Dubai Marina',
        duration: '2-3 hours',
        category: 'Island',
        image: '/api/placeholder/800/600',
        highlights: [
          "Ain Dubai",
          "Retail outlets",
          "Dining venues",
          "Entertainment facilities",
          "Waterfront views"
        ]
      },
      {
        id: 'palm-jumeirah',
        name: 'Palm Jumeirah',
        description: 'A man-made island with luxury resorts and attractions.',
        location: 'Palm Jumeirah',
        duration: '4-5 hours',
        category: 'Island',
        image: '/api/placeholder/800/600',
        highlights: [
          "Luxury hotels",
          "Beach clubs",
          "Dining options",
          "Monorail rides",
          "Water activities"
        ]
      }
    ]
  },
  {
    id: 'aquatic-adventures',
    title: 'Aquatic Adventures',
    description: 'Experience thrilling water activities and marine attractions.',
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>',
    attractions: [
      {
        id: 'aquaventure',
        name: 'Aquaventure Water Park',
        description: 'A water park with record-breaking slides and marine habitats.',
        location: 'Palm Jumeirah',
        duration: 'Full Day',
        category: 'Water Park',
        image: '/api/placeholder/800/600',
        highlights: [
          "Water slides",
          "Private beach",
          "Marine encounters",
          "Kids' areas",
          "River rides"
        ]
      },
      {
        id: 'palm-monorail',
        name: 'Palm Jumeirah Monorail',
        description: 'A scenic monorail ride across Palm Jumeirah.',
        location: 'Palm Jumeirah',
        duration: '30 minutes',
        category: 'Transport',
        image: '/api/placeholder/800/600',
        highlights: [
          "Palm views",
          "Atlantis vista",
          "Dubai skyline",
          "Comfortable ride",
          "Photo opportunities"
        ]
      },
      {
        id: 'lost-chambers',
        name: 'The Lost Chambers Aquarium',
        description: 'Features marine life exhibits themed around Atlantis.',
        location: 'Atlantis The Palm',
        duration: '2-3 hours',
        category: 'Aquarium',
        image: '/api/placeholder/800/600',
        highlights: [
          "Themed exhibits",
          "Marine life",
          "Interactive programs",
          "Behind-scenes tours",
          "Educational shows"
        ]
      },
      {
        id: 'dolphinarium',
        name: 'Dolphinarium',
        description: 'Offers dolphin and seal shows with interactive experiences.',
        location: 'Creek Park',
        duration: '2-3 hours',
        category: 'Entertainment',
        image: '/api/placeholder/800/600',
        highlights: [
          "Dolphin shows",
          "Seal performances",
          "Interactive sessions",
          "Photo opportunities",
          "Educational programs"
        ]
      },
      {
        id: 'dhow-cruise',
        name: 'Dhow Cruise With Dinner',
        description: 'A traditional boat cruise with dinner and entertainment.',
        location: 'Dubai Creek/Marina',
        duration: '2-3 hours',
        category: 'Cruise',
        image: '/api/placeholder/800/600',
        highlights: [
          "Buffet dinner",
          "Live entertainment",
          "City views",
          "Traditional atmosphere",
          "Photography opportunities"
        ]
      }
    ]
  },
  {
    id: 'adventure-activities',
    title: 'Adventure & Activities',
    description: 'Experience thrilling adventures and unique activities in Dubai.',
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>',
    attractions: [
      {
        id: 'desert-safari',
        name: 'Desert Safari With BBQ Dinner',
        description: 'Includes dune bashing, camel rides, and a traditional Bedouin camp dinner.',
        location: 'Dubai Desert',
        duration: '6-7 hours',
        category: 'Adventure',
        image: '/api/placeholder/800/600',
        highlights: [
          "Dune bashing",
          "Camel riding",
          "BBQ dinner",
          "Cultural shows",
          "Sandboarding"
        ]
      },
      {
        id: 'skydive-dubai',
        name: 'SkyDive Dubai',
        description: 'Offers tandem skydiving with views of Palm Jumeirah.',
        location: 'Dubai Marina',
        duration: '3-4 hours',
        category: 'Adventure',
        image: '/api/placeholder/800/600',
        highlights: [
          "Tandem jumps",
          "Palm drop zone",
          "Professional videos",
          "Safety briefing",
          "Certificate"
        ]
      },
      {
        id: 'hot-air-balloon',
        name: 'Hot Air Balloon',
        description: 'Sunrise flights with views of desert landscapes.',
        location: 'Dubai Desert',
        duration: '4-5 hours',
        category: 'Adventure',
        image: '/api/placeholder/800/600',
        highlights: [
          "Desert sunrise",
          "Wildlife viewing",
          "Breakfast included",
          "Transport service",
          "Professional pilots"
        ]
      },
      {
        id: 'xline-dubai',
        name: 'XLine Dubai',
        description: 'The world\'s longest urban zipline in Dubai Marina.',
        location: 'Dubai Marina',
        duration: '1 hour',
        category: 'Adventure',
        image: '/api/placeholder/800/600',
        highlights: [
          "Urban zipline",
          "Marina views",
          "Professional gear",
          "Safety briefing",
          "Photo package"
        ]
      },
      {
        id: 'helicopter-tour',
        name: 'Helicopter Tour',
        description: 'Aerial views of Dubai\'s skyline and landmarks.',
        location: 'Various Locations',
        duration: '12-25 minutes',
        category: 'Adventure',
        image: '/api/placeholder/800/600',
        highlights: [
          "Aerial photography",
          "City landmarks",
          "Professional pilot",
          "Safety briefing",
          "Multiple routes"
        ]
      },
     
    ]
  },
  {
    id: 'theme-parks',
    title: 'Theme Parks',
    description: 'Experience world-class entertainment at Dubai\'s premier theme parks.',
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
    attractions: [
      {
        id: 'img-worlds',
        name: 'IMG Worlds of Adventure',
        description: 'The world\'s largest indoor theme park with zones like Marvel and Cartoon Network.',
        location: 'Dubailand',
        duration: 'Full Day',
        category: 'Theme Park',
        image: '/api/placeholder/800/600',
        highlights: [
          "Marvel Zone",
          "Cartoon Network area",
          "Dinosaur adventures",
          "Themed restaurants",
          "Indoor rides"
        ]
      },
      {
        id: 'dubai-parks',
        name: 'Dubai Parks & Resorts',
        description: 'Includes Motiongate, Bollywood Parks, and LEGOLAND.',
        location: 'Dubai Parks And Resorts',
        duration: 'Full Day',
        category: 'Theme Park',
        image: '/api/placeholder/800/600',
        highlights: [
          "Motiongate Dubai",
          "Bollywood Parks",
          "LEGOLAND Dubai",
          "LEGOLAND Water Park",
          "Riverland Dubai"
        ]
      }
    ]
  },
  {
    id: 'cultural-scenic',
    title: 'Cultural & Scenic Experiences',
    description: 'Discover Dubai\'s rich cultural heritage and scenic beauty.',
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>',
    attractions: [
      {
        id: 'abra-ride',
        name: 'Abra Ride',
        description: 'Traditional boat rides on Dubai Creek.',
        location: 'Dubai Creek',
        duration: '30 minutes',
        category: 'Cultural',
        image: '/api/placeholder/800/600',
        highlights: [
          "Traditional experience",
          "Creek views",
          "Local transport",
          "Photo opportunities",
          "Market access"
        ]
      },
      {
        id: 'hatta-tour',
        name: 'Hatta Mountain Tour',
        description: 'An escape to the mountains with cultural and adventure activities.',
        location: 'Hatta',
        duration: 'Full Day',
        category: 'Adventure',
        image: 'https://photosofplaces.netlify.app/images/dubai/Hatta-Dubai.jpg',
        highlights: [
          "Mountain views",
          "Heritage village",
          "Kayaking options",
          "Hiking trails",
          "Cultural experiences"
        ]
      }
    ]
  },
  {
    id: 'wildlife-nature',
    title: 'Wildlife & Nature',
    description: 'Discover Dubai\'s amazing wildlife parks and natural attractions.',
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>',
    attractions: [
      {
        id: 'dubai-safari-park',
        name: 'Dubai Safari Park',
        description: 'A state-of-the-art wildlife park home to over 2,500 animals from around the world, featuring different zones representing various climates and ecosystems.',
        location: 'Al Warqa',
        duration: '4-5 hours',
        category: 'Wildlife',
        image: 'https://photosofplaces.netlify.app/images/dubai/Dubai-Safari-Park.jpg',
        highlights: [
          "Multiple wildlife zones",
          "Interactive experiences",
          "Guided tours",
          "Educational programs",
          "Conservation efforts"
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