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

    return requiredRoles.some((role) => user.roles === role);

  }
}
