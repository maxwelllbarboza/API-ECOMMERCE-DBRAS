import { IsNotEmpty, IsString } from "class-validator";

export class UpdateCategoryDto {
    @IsString()
    @IsNotEmpty({message: 'O nome da categoria é obrigatório.'})
    @Transform(({ value }) => value?.trim(), { toClassOnly: true })
    name: string;
}
