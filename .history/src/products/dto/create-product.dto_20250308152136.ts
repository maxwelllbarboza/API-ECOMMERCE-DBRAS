export class CreateProductDto {
    
    name: string;
    description: string;
    price: Float;
    stock: Int
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    categoryId String
    category Category @relation(fields: [categoryId], references:[id])
}
