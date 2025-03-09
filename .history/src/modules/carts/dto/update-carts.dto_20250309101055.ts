import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-carts.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
