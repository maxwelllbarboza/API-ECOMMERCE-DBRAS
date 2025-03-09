import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-user.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
