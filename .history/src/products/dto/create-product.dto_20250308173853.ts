/* eslint-disable prettier/prettier */
import { IsString, IsNumber, IsUUID, Min, IsNotEmpty } from 'class-validator';
export class CreateProductDto {
  @Is
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: string;
}
