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
      const payload = this.jwtService.verify(token);
      request['user'] = payload; 
      return true;
    } catch (error) {
      throw new UnauthorizedException('Token inválido');
    }

    private extractTokenFromHeader(request: Request): string | null {
      const authHeader = request.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return null;
      }
      return authHeader.split(' ')[1]; // Retorna apenas o token
    }


    return true;
  }
}
