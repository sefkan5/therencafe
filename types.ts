export interface MenuItem {
  id: number;
  title: string;
  description: string;
  image: string;
  price?: string;
  category: 'hookah' | 'food' | 'dessert' | 'drink';
}

export interface Testimonial {
  id: number;
  name: string;
  comment: string;
  rating: number;
}

export interface NavItem {
  label: string;
  to: string;
}