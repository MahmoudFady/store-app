export interface Product {
  id: string;
  category: string;
  price: number;
  title: string;
  image: string;
  rating: { rate: number; count: number };
}
