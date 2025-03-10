export interface Category {
    id: string; // Use string as Prisma 'cuid' is a string
    name: string;
    createdAt: Date;
    updatedAt: Date;
    products: Product[]; // Relation to Product
  }