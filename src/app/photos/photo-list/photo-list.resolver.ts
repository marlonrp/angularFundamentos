import { Injectable } from '../../../../node_modules/@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '../../../../node_modules/@angular/router';
import { Observable } from '../../../../node_modules/rxjs';

import { PhotoService } from '../photo.service';
import { Photo } from '../photo';

@Injectable({ providedIn: 'root' })
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {

    constructor(
        private photoService: PhotoService
    ){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
        const userName = route.params.userName;
        return this.photoService.listFromUserPaginated(userName, 1);
    }
}