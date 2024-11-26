import { AttractionType } from '../types/attraction';
import { searchAttractions } from './search';

export interface GlobalSearchResult extends AttractionType {
  city: string;
}

export const globalSearch = (query: string): GlobalSearchResult[] => {
  const cities = ['dubai', 'abu-dhabi', 'sharjah'];
  const results: GlobalSearchResult[] = [];

  cities.forEach(city => {
    const cityResults = searchAttractions(query, city);
    results.push(...cityResults.map(result => ({
      ...result,
      city
    })));
  });

  return results;
};
