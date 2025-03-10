import { Product } from "./productRepository.interface";

export interface Category {
    id: string; 
    name: string;
    createdAt: Date;
    updatedAt: Date;
    products: Product[]; 
  }