/* eslint-disable prettier/prettier */
import { IsString, IsNumber, IsUUID, Min, IsNotEmpty } from 'class-validator';
export class CreateProductDto {
  @IsString()
  @IsNotEmpty({})
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: string;
}
