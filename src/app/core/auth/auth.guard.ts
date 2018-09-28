import { Injectable } from '../../../../node_modules/@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '../../../../node_modules/@angular/router';

import { UserService } from '../user/user.service';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{

    constructor(
        private userService: UserService,
        private router : Router
    ) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>{
        if (this.userService.isLoged()) {
            this.router.navigate(['user', this.userService.getUserName()]);
            return false;
        } else {
            return true;
        }
    }
}