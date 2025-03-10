import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private prismaService: PrismaService){}
    async login(loginDto: LoginDto){
        const user = await this.prismaService.user.findFirst({
            where: {
                email: loginDto.email
            },
        });

        if(!user || bcrypt.compareSync(loginDto.password, user.password)){
            throw new UnauthorizedException('E-mail e senha inválidos');
        }
        const payload = {
            sub: user.
        }

        return
    }
}
