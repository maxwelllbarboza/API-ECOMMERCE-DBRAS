export class CreateProductDto {
    id String @id @default(cuid())
    name: string;
    description: string?
    price Float
    stock Int
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    categoryId String
    category Category @relation(fields: [categoryId], references:[id])
}
