import { OrderItem } from "./orderItemRepository.interface";
import { UserM } from "./userRepository.interface";

export interface Order {
    id: string; // Use string as Prisma 'cuid' is a string
    userId: string;
    user: UserM; // Relation to User
    createdAt: Date;
    updatedAt: Date;
    items: OrderItem[]; // Relation to OrderItem
}
  