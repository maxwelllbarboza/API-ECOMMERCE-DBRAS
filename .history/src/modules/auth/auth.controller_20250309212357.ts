import { Body, Controller, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@UseGuards(AuthGuard)
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('login')
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    login(@Body() loginDto: LoginDto){        
        return this.authService.login(loginDto);
    }
}
