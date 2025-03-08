/* eslint-disable prettier/prettier */
import { IsString, IsNumber, IsUUID, Min, IsNotEmpty } from 'class-validator';
export class CreateProductDto {
  @IsString()
  @Is
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: string;
}
