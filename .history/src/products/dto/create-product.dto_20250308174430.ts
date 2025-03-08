/* eslint-disable prettier/prettier */
import { IsString, IsNumber, IsUUID, Min, IsNotEmpty } from 'class-validator';
export class CreateProductDto {
  @IsString()
  @IsNotEmpty({message: 'O nome do produto é obrigatório.'})
  name: string;

  @IsString()
  description: string;
  
  @IsNumber()
  @Min(0, {message: 'O valor deve ser um valor positivo.'})
  price: number;

  @IsNumber()
  @Min(0, {message: 'O estoque não pode ser negativo.'})
  stock: number;

  @IsNotEmpty({ message: 'A categoria é obrigatório.'})
  @Matches(/^c[a-z0-9]{24}$/, { message: 'O ID da categoria deve ser um CUID válido' })
  categoryId: string;
}
