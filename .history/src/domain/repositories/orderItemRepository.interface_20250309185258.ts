export interface OrderItem {
    id: string; // Use string as Prisma 'cuid' is a string
    orderId: string;
    productId: string;
    quantity: number;
    order: Order; // Relation to Order
    product: Product; // Relation to Product
  }