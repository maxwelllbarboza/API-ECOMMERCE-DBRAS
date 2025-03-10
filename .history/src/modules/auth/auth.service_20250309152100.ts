import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(private prismaService: PrismaService){}
    async login(loginDto: LoginDto){
        const user = await this.prismaService.user.findFirst({
            where: {
                email: loginDto.email
            },
        });

        


    }
}
