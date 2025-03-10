export interface Order {
    id: string; // Use string as Prisma 'cuid' is a string
    userId: string;
    user: User; // Relation to User
    createdAt: Date;
    updatedAt: Date;
    items: OrderItem[]; // Relation to OrderItem
  }
  