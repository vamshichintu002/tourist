import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Calendar, MapPin, Clock, Coffee, Car, Star } from 'lucide-react';
import { cn } from '../lib/utils';
import Timeline from './Timeline';
import ImageCard from './ImageCard';

const tourImages = {
  "Dhow Cruise with Dinner at Dubai Canal": 'https://photosofplaces.netlify.app/images/dubai/Dhow-Cruise-With-Dinner.jpg',
  "Dubai Mall & Burj Khalifa Visit": 'https://photosofplaces.netlify.app/images/dubai/Burj-Khalifa.jpg',
  "Desert Safari with BBQ Dinner": 'https://photosofplaces.netlify.app/images/dubai/Desert-Safari-With-BBQ-Dinner.jpg',
  "Abu Dhabi City Tour": 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&q=80',
  "Dubai City Tour": 'https://photosofplaces.netlify.app/images/dubai/Dubai-Frame.jpg',
  "Full Day Dubai City Tour": 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80',
  "Miracle Garden & Global Village Visit": 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&q=80',
};

const inclusionImages = {
  "Luxury Hotel Stay": {
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80",
    description: "04 Nights Hotel Stay with Breakfast"
  },
  "Premium Transfers": {
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80",
    description: "All Tours and Transfers"
  },
  "Tourism Services": {
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80",
    description: "Tourism Dirham Fee Included"
  }
};

const packages = [
  {
    id: "dt43",
    title: "Dubai 4 Nights 5 Days - Classic",
    highlights: [
      "Dhow Cruise with Dinner at Dubai Canal",
      "Dubai City Tour",
      "Dubai Mall & Burj Khalifa Visit",
      "Desert Safari with BBQ Dinner",
      "Abu Dhabi City Tour"
    ],
    dayPlans: [
      {
        day: 1,
        title: "Arrival & Dhow Cruise",
        activities: [
          "Airport pickup & hotel check-in",
          "Evening Dhow Cruise with dinner",
          "Views of Ras Al Khor Wildlife Sanctuary",
          "Sheikh Zayed Road Waterfall Bridge views"
        ]
      },
      {
        day: 2,
        title: "Dubai City Tour & Burj Khalifa",
        activities: [
          "Half-day Dubai city tour",
          "Visit Dubai Mall",
          "Burj Khalifa 124th floor entry",
          "Dubai Mall Fountain Show"
        ]
      },
      {
        day: 3,
        title: "Desert Safari",
        activities: [
          "Morning at leisure",
          "Afternoon Desert Safari",
          "Dune bashing experience",
          "BBQ dinner with entertainment"
        ]
      },
      {
        day: 4,
        title: "Abu Dhabi Tour",
        activities: [
          "Full day Abu Dhabi city tour",
          "Visit BAPS Hindu Mandir",
          "Sheikh Zayed Grand Mosque visit",
          "Photo stops at key landmarks"
        ]
      },
      {
        day: 5,
        title: "Departure",
        activities: [
          "Breakfast at hotel",
          "Check-out",
          "Transfer to Dubai Airport"
        ]
      }
    ],
    inclusions: [
      {
        title: "Luxury Hotel Stay",
        description: "04 Nights Hotel Stay with Breakfast"
      },
      {
        title: "Premium Transfers",
        description: "All Tours and Transfers"
      },
      {
        title: "Tourism Services",
        description: "Tourism Dirham Fee Included"
      }
    ]
  },
  {
    id: "dt44",
    title: "Dubai 4 Nights 5 Days - Premium",
    highlights: [
      "Dhow Cruise with Dinner at Dubai Canal",
      "Full Day Dubai City Tour",
      "Miracle Garden & Global Village Visit",
      "Desert Safari with BBQ Dinner",
      "Abu Dhabi City Tour"
    ],
    dayPlans: [
      {
        day: 1,
        title: "Arrival & Dhow Cruise",
        activities: [
          "Airport pickup & hotel check-in",
          "Evening Dhow Cruise with dinner",
          "Stunning views of Dubai skyline",
          "Dinner on traditional wooden dhow"
        ]
      },
      {
        day: 2,
        title: "Dubai Tour & Attractions",
        activities: [
          "Full-day Dubai city tour",
          "Visit Miracle Garden",
          "Explore Global Village",
          "Evening at leisure"
        ]
      },
      {
        day: 3,
        title: "Mall & Desert Safari",
        activities: [
          "Dubai Mall visit",
          "Burj Khalifa observation deck",
          "Desert Safari adventure",
          "BBQ dinner with entertainment"
        ]
      },
      {
        day: 4,
        title: "Abu Dhabi Tour",
        activities: [
          "Full day Abu Dhabi city tour",
          "BAPS Hindu Mandir visit",
          "Sheikh Zayed Grand Mosque tour",
          "City landmarks exploration"
        ]
      },
      {
        day: 5,
        title: "Departure",
        activities: [
          "Breakfast at hotel",
          "Check-out",
          "Airport transfer"
        ]
      }
    ],
    inclusions: [
      {
        title: "Luxury Hotel Stay",
        description: "04 Nights Hotel Stay with Breakfast"
      },
      {
        title: "Premium Transfers",
        description: "All Tours and Transfers"
      },
      {
        title: "Tourism Services",
        description: "Tourism Dirham Fee Included"
      }
    ]
  }
];

const TourPackage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-background min-h-screen">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Dubai Tour Packages
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Experience the magic of Dubai with our carefully curated tour packages
        </p>
      </div>
      
      <Tabs defaultValue="dt43" className="w-full">
        <TabsList className="flex justify-center mb-8 bg-card p-1 rounded-lg shadow-sm">
          {packages.map(pkg => (
            <TabsTrigger 
              key={pkg.id} 
              value={pkg.id} 
              className="px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
            >
              {pkg.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {packages.map(pkg => (
          <TabsContent key={pkg.id} value={pkg.id}>
            <div className="grid gap-8">
              {/* Tour Highlights */}
              <Card className="overflow-hidden border-none shadow-lg">
                <CardHeader className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5" />
                    Tour Highlights
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {pkg.highlights.map((highlight, index) => (
                      <ImageCard 
                        key={highlight}
                        src={tourImages[highlight] || tourImages["Dubai City Tour"]}
                        title={highlight}
                        className="aspect-[3/2] animate-slideUp"
                        style={{ animationDelay: `${index * 100}ms` }}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Detailed Itinerary */}
              <Card className="overflow-hidden border-none shadow-lg">
                <CardHeader className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Detailed Itinerary
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <Timeline dayPlans={pkg.dayPlans} />
                </CardContent>
              </Card>

              {/* Package Inclusions */}
              <Card className="overflow-hidden border-none shadow-lg">
                <CardHeader className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                  <CardTitle className="flex items-center gap-2">
                    <Coffee className="h-5 w-5" />
                    Package Inclusions
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {pkg.inclusions && pkg.inclusions.map((inclusion, index) => (
                      <ImageCard 
                        key={inclusion.title}
                        src={inclusionImages[inclusion.title].image}
                        title={inclusion.title}
                        description={inclusion.description}
                        className="aspect-[3/2] animate-slideUp"
                        style={{ animationDelay: `${index * 100}ms` }}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default TourPackage;