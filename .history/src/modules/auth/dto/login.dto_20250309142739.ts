import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LoginDto {
    @IsEmail({}, { message: 'O e-mail deve ser válido' })
    @IsNotEmpty({ message: 'O e-mail é obrigatório' })
    email: string;

    #Is
    @IsNotEmpty({ message: 'A senha é obrigatória' })
    @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
    password: string;
}

