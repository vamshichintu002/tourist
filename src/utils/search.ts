import { AttractionType } from '../types/attraction';
import { categories as dubaiCategories } from '../data/attractions';
import { categories as abuDhabiCategories } from '../data/abu-dhabi-attractions';
import { categories as sharjahCategories } from '../data/sharjah-attractions';

const getCategoriesByCity = (city: string) => {
  switch (city) {
    case 'dubai':
      return dubaiCategories;
    case 'abu-dhabi':
      return abuDhabiCategories;
    case 'sharjah':
      return sharjahCategories;
    default:
      return [];
  }
};

export const searchAttractions = (query: string, city: string): AttractionType[] => {
  const searchTerm = query.toLowerCase().trim();
  
  if (!searchTerm) return [];

  const categories = getCategoriesByCity(city);
  const results: AttractionType[] = [];
  
  categories.forEach(category => {
    const matchingAttractions = category.attractions.filter(attraction => {
      return (
        attraction.name.toLowerCase().includes(searchTerm) ||
        attraction.description.toLowerCase().includes(searchTerm) ||
        attraction.category.toLowerCase().includes(searchTerm) ||
        attraction.location.toLowerCase().includes(searchTerm) ||
        attraction.highlights?.some(highlight => 
          highlight.toLowerCase().includes(searchTerm)
        )
      );
    });
    
    results.push(...matchingAttractions);
  });
  
  return results;
};