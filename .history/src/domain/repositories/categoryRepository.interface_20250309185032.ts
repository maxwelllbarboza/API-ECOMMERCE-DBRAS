export interface Category {
    id: string; 
    name: string;
    createdAt: Date;
    updatedAt: Date;
    products: Product[]; // Relation to Product
  }