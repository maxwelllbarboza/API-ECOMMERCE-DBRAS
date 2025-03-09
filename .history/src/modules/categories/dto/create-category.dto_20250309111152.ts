export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty({message: 'O nome do produto é obrigatório.'})
    @Transform(({ value }) => value?.trim(), { toClassOnly: true })
    name: string;
}
