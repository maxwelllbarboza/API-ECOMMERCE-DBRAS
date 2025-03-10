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

    
    const requiredRolesSet = new Set(requiredRoles);

    
    return userRoles.some((role) => requiredRolesSet.has(role));

  }
}
