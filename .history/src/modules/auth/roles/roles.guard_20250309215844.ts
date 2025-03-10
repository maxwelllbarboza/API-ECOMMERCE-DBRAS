import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';


@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector){}

  canActivate(
    context: ExecutionContext): boolean  {
    const httpContext  = context.switchToHttp();
    const request  = httpContext.getRequest<Request>();
    const user = request;

    if (!user) {
      return false;
    }

    const requiredRoles = this.reflector.getAllAndOverride('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if(!requiredRoles || requiredRoles.length === 0){
      return true;
    }

    const userRoles = Array.isArray(user.roles) ? user.roles : [user.roles];

    // Converte para Set para busca mais eficiente
    const requiredRolesSet = new Set(requiredRoles);

    // Verifica se pelo menos uma role do usuário está na lista de permissões
    return userRoles.some((role) => requiredRolesSet.has(role));

  }
}
