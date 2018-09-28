import { Component } from '../../../../node_modules/@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { Router } from '../../../../node_modules/@angular/router';

import { UserService } from '../user/user.service';
import { User } from '../user/user';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent {

    user$: Observable<User>;

    constructor(
        private userService: UserService,
        private router: Router
    ) {
        this.user$ = userService.getUser();
    }

    logout(){
        this.userService.logout();
        this.router.navigate(['']);
    }

}