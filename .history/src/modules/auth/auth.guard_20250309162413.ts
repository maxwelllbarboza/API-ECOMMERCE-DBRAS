import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const httpContext  = context.switchToHttp();
    const request  = httpContext.getRequest<Request>();

    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException('Token não fornecido');
    }

    try {
      // ✅ Verifica o token JWT
      const payload = this.jwtService.verify(token);
      request['user'] = payload; // Adiciona o usuário autenticado no request
      return true;
    } catch (error) {
      throw new UnauthorizedException('Token inválido');
    }


    return true;
  }
}
