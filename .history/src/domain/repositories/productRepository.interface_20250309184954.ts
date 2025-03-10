export interface Product {
    id: string; // Use string as Prisma 'cuid' is a string
    name: string;
    description?: string;
    price: number;
    stock: number;
    createdAt: Date;
    updatedAt: Date;
    categoryId: string;
    category: Category; // Relation to Category
    orderItems: OrderItem[]; // Relation to OrderItem
  }