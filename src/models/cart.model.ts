import { Product } from "./product.model";

export interface Cart {
  products: Product[];
  totalPrice: number;
}
