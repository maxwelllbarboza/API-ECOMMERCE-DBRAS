import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const httpContext  = context.switchToHttp();
    const request  = httpContext.getRequest<Request>();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException('Token não fornecido');
    }

    console.log("Entrei aqui")

    try {     
      const payload = this.jwtService.verifyAsync(token, {secret: process.env.JWT_SECRET,});
      request['user'] = payload; 
      return true;
    } catch (error) {
      throw new UnauthorizedException('Token inválido');
    }
    
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization.split;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return null;
    }
    return authHeader.split(' ')[1]; 
  }
}
