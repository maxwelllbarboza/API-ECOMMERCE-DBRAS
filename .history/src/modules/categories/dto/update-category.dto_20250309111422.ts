import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';

export class UpdateCategoryDto {
    @IsString()
    @IsNotEmpty({message: 'O nome da categoria é obrigatório.'})
    @Transform(({ value }) => value?.trim(), { toClassOnly: true })
    name: string;
}
