import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private)


    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    login(@Body() loginDto: LoginDto){
        return { message: 'Usuário autenticado com sucesso!', data: loginDto };

    }
}
