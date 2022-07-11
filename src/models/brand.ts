import {Product} from "./product";

export interface Brand {
  id: number;
  label: string;
  imagePath: string;
  products: Product[];
}
