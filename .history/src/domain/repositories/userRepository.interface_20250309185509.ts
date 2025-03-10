import { Order } from "./orderRepository.interface";

export class UserWithoutPassword {
    id: string;
    email: string;
    role: 'USER' | 'ADMIN';
    createdAt: Date;
    updatedAt: Date;
    orders: Order[]; // If needed, define the Order type
}
  
  // You can then create a class like your 'UserM' model that extends 'UserWithoutPassword'
export class UserM extends UserWithoutPassword {
    password: string;
}