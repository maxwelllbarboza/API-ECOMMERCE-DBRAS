export interface OrderItem {
    id: string; // Use string as Prisma 'cuid' is a string
    orderId: string;
    productId: string;
    quantity: number;
    
    product: Product; // Relation to Product
}