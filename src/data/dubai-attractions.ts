const dubaiAttractions = {
  shoppingAndEntertainment: {
    title: "Shopping & Entertainment Destinations",
    attractions: [
      {
        id: "dubai-mall",
        name: "Dubai Mall",
        description: "One of the world's largest shopping destinations with over 1,200 retail outlets featuring renowned international brands and exquisite boutiques. Features entertainment attractions including Dubai Aquarium, ice skating rink, and VR Park.",
        highlights: [
          "Over 1,200 retail outlets",
          "Fashion Avenue luxury section",
          "Olympic-sized ice skating rink",
          "VR Park",
          "Multiple dining options"
        ],
        category: "Shopping",
        duration: "3-4 hours",
        location: "Downtown Dubai"
      },
      {
        id: "dubai-mall-aquarium",
        name: "Dubai Mall Aquarium & Underwater Zoo",
        description: "Features one of the largest acrylic viewing panels in the world, where visitors can marvel at thousands of marine creatures, including sharks, rays, and colorful fish. The Underwater Zoo offers immersive experiences with species like crocodiles, penguins, and otters.",
        highlights: [
          "Massive aquarium tank",
          "Underwater tunnel",
          "Interactive experiences",
          "Diverse marine life",
          "Educational programs"
        ],
        category: "Entertainment",
        duration: "1-2 hours",
        location: "Dubai Mall"
      },
      {
        id: "mall-of-emirates",
        name: "Mall of the Emirates",
        description: "A world-renowned shopping destination with over 600 stores, including luxury brands, fashion boutiques, and department stores. Home to Ski Dubai, VOX Cinemas, and diverse dining options.",
        highlights: [
          "600+ retail stores",
          "Ski Dubai facility",
          "VOX Cinemas",
          "International dining",
          "Fashion boutiques"
        ],
        category: "Shopping",
        duration: "3-4 hours",
        location: "Al Barsha"
      }
    ]
  },

  iconicLandmarks: {
    title: "Iconic Landmarks",
    attractions: [
      {
        id: "burj-khalifa",
        name: "Burj Khalifa",
        description: "Standing at 828 meters, the world's tallest building offers observation decks on the 124th, 125th, and 148th floors with unparalleled views of Dubai. Features At.mosphere restaurant and mesmerizing fountain shows at its base.",
        highlights: [
          "World's tallest building",
          "Observation decks",
          "At.mosphere restaurant",
          "Architectural marvel",
          "Dubai Fountain views"
        ],
        category: "Landmark",
        duration: "1.5-2 hours",
        location: "Downtown Dubai"
      },
      {
        id: "dubai-frame",
        name: "Dubai Frame",
        description: "A 150-meter tall architectural landmark offering panoramic views of both old and new Dubai. Features a museum at ground level and a glass-floored sky bridge connecting the two towers.",
        highlights: [
          "150-meter tall structure",
          "Glass walkway",
          "Ground-level museum",
          "City views",
          "Historical exhibits"
        ],
        category: "Landmark",
        duration: "1-1.5 hours",
        location: "Zabeel Park"
      },
      {
        id: "museum-future",
        name: "Museum of the Future",
        description: "A cutting-edge institution exploring innovative ideas and technologies shaping the future. Features immersive exhibits on artificial intelligence, sustainability, and space exploration in an iconic torus-shaped building.",
        highlights: [
          "Futuristic exhibitions",
          "Interactive displays",
          "Arabic calligraphy design",
          "Technology showcase",
          "Innovation hub"
        ],
        category: "Museum",
        duration: "2-3 hours",
        location: "Sheikh Zayed Road"
      }
    ]
  },

  outdoorAndAdventure: {
    title: "Outdoor & Adventure Activities",
    attractions: [
      {
        id: "desert-safari",
        name: "Desert Safari with BBQ Dinner",
        description: "An exciting desert adventure featuring dune bashing, camel rides, and sandboarding, culminating in a traditional BBQ dinner under the stars with live entertainment including belly dancing and Tanoura shows.",
        highlights: [
          "Dune bashing",
          "Camel rides",
          "BBQ dinner",
          "Cultural performances",
          "Sunset photography"
        ],
        category: "Adventure",
        duration: "6-7 hours",
        location: "Dubai Desert"
      },
      {
        id: "skydive-dubai",
        name: "SkyDive Dubai",
        description: "Premier skydiving facility offering tandem jumps from 13,000 feet with spectacular views of Palm Jumeirah and Dubai Marina. Professional instructors ensure safety while providing an unforgettable adrenaline rush.",
        highlights: [
          "Tandem skydiving",
          "Palm Jumeirah views",
          "Professional instruction",
          "Photo/video packages",
          "13,000 feet jump"
        ],
        category: "Adventure",
        duration: "3-4 hours",
        location: "Dubai Marina"
      },
      {
        id: "xline-dubai",
        name: "XLine Dubai Marina",
        description: "World's longest urban zipline, stretching over 1 kilometer from JBR to Dubai Marina Mall. Offers thrilling rides at speeds up to 80 km/h with stunning views of the marina and cityscape.",
        highlights: [
          "World's longest urban zipline",
          "80 km/h speeds",
          "Marina views",
          "Professional photos",
          "Safety equipment"
        ],
        category: "Adventure",
        duration: "1-2 hours",
        location: "Dubai Marina"
      }
    ]
  },

  waterAttractions: {
    title: "Water & Beach Attractions",
    attractions: [
      {
        id: "aquaventure",
        name: "Aquaventure Waterpark",
        description: "Dubai's premier water park at Atlantis The Palm featuring record-breaking water slides, marine experiences, and private beach access. Includes the famous Leap of Faith slide and shark-filled lagoon experiences.",
        highlights: [
          "Record-breaking slides",
          "Marine experiences",
          "Private beach",
          "Dolphin encounters",
          "Children's play areas"
        ],
        category: "Water Park",
        duration: "Full day",
        location: "Atlantis The Palm"
      },
      {
        id: "jbr-beach",
        name: "JBR Beach",
        description: "Popular public beach known for pristine white sands and crystal-clear waters. Offers water sports, beachside dining, and shopping at The Beach mall, along with outdoor fitness facilities and children's play areas.",
        highlights: [
          "White sand beach",
          "Water sports",
          "Beachside dining",
          "Shopping options",
          "Family facilities"
        ],
        category: "Beach",
        duration: "Flexible",
        location: "Jumeirah Beach Residence"
      }
    ]
  },

  culturalExperiences: {
    title: "Cultural & Traditional Experiences",
    attractions: [
      {
        id: "dubai-creek",
        name: "Dubai Creek",
        description: "Historic heart of Dubai offering glimpses into the city's maritime heritage. Features traditional souks, abra rides, and cultural attractions, dividing the city into Deira and Bur Dubai areas.",
        highlights: [
          "Traditional souks",
          "Abra rides",
          "Historical architecture",
          "Cultural experiences",
          "Waterfront views"
        ],
        category: "Heritage",
        duration: "2-3 hours",
        location: "Deira/Bur Dubai"
      },
      {
        id: "souk-madinat",
        name: "Souk Madinat Jumeirah",
        description: "Traditional marketplace blending Middle Eastern ambiance with modern luxury. Features waterways, boutique shops, waterfront dining, and stunning views of Burj Al Arab.",
        highlights: [
          "Traditional architecture",
          "Waterfront dining",
          "Boutique shopping",
          "Abra rides",
          "Burj Al Arab views"
        ],
        category: "Shopping/Culture",
        duration: "2-3 hours",
        location: "Jumeirah"
      }
    ]
  }
};

export default dubaiAttractions;