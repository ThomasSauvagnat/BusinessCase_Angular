import {Brand} from "./brand";
import {Category} from "./category";
import {ProductPicture} from "./productPicture";

export interface Product {
  id: number;
  label: string;
  description: string;
  price: number;
  stock: number;
  isActif: boolean;
  categories: Category[];
  productPictures: ProductPicture[];
  brand: Brand;
}
