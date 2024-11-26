export interface AttractionType {
  id: string;
  name: string;
  description: string;
  highlights?: string[];
  category: string;
  duration?: string;
  location: string;
  price?: string;
  image?: string;
}

export interface CategoryType {
  id: string;
  title: string;
  description: string;
  icon: string;
  attractions: AttractionType[];
}