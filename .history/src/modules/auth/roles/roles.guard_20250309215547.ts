import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector){}

  canActivate(
    context: ExecutionContext): boolean  {
    const httpContext  = context.switchToHttp();
    const request  = httpContext.getRequest<Request>();
    const requiredRoles = this.reflector.getAllAndOverride('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if(!requiredRoles){
      return true;
    }

    return requiredRoles.some((role) => user.roles === role);

  }
}
