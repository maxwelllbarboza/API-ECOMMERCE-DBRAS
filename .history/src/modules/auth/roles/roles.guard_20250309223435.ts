import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';


@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector){}

  canActivate(context: ExecutionContext): boolean  {
    const { user }  = context.switchToHttp().getRequest();

    if (!user) {
      return false;
    }

    const requiredRoles = this.reflector.getAllAndOverride('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    console.log(`requiredRoles : ${requiredRoles}`)
    console.log(`user : ${user}`)

    if(!requiredRoles){
      return true;
    }
    return requiredRoles.some((role) => user.roles === role);
  }
}
