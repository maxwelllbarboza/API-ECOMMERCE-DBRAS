import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private prismaService: PrismaService, private jwtService: JwtService ){}
    async login(loginDto: LoginDto){
        const user = await this.prismaService.user.findFirst({
            where: {
                email: loginDto.email
            },
        });

        console.log("este é o User: " + user.email)

        if(!user || bcrypt.compareSync(loginDto.password, user.password)){
            throw new UnauthorizedException('E-mail e senha inválidos');
        }
        const payload = {
            sub: user.id,
            role: user.role,
            email: user.email
        }

        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
