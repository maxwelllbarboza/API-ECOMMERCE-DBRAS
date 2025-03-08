export class CreateProductDto {
    id String @id @default(cuid())
    name: string;
    description String?
    price Float
    stock Int
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    categoryId String
    category Category @relation(fields: [categoryId], references:[id])
}
