/* eslint-disable prettier/prettier */
import { IsString, IsNumber, IsUUID, Min, IsNotEmpty } from 'class-validator';
export class CreateProductDto {
  @IsString()
  @IsNotEmpty({message: 'O nome do produto é obrigatório'})
  name: string;

  @IsString()
  description: string;
  
  @IsNumber()
  @Min(0, {message: 'O'})
  price: number;
  stock: number;
  categoryId: string;
}
