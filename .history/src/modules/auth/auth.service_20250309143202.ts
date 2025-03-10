import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma.service';

@Injectable()
export class AuthService {
    constructor(private prismaService: PrismaService)
    login(loginDto: LoginDto){
        this
    }
}
