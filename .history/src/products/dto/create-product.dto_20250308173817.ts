import { IsString, IsNumber, IsUUID, Min, IsNotEmpty } from 'class-validator';
export class CreateProductDto {
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: string;
}
