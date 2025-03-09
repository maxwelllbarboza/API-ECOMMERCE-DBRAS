import { Transform } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty({message: 'O nome da produto é obrigatório.'})
    @Transform(({ value }) => value?.trim(), { toClassOnly: true })
    name: string;
}
