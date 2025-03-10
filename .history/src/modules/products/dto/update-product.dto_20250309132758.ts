import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
// import { IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
 

}
