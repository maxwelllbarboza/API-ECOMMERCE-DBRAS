import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './login.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
