import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public API = 'http://localhost:3000';

  public photos: Photo[] = [];

  constructor(public http: HttpClient){}

  listFromUser(username: string){
    return this.http.get<Photo[]>(this.API + '/' + username + '/photos');
  }

  listFromUserPaginated(username: string, page: number){
    const params = new HttpParams().append('page', page.toString());
    return this.http.get<Photo[]>(this.API + '/' + username + '/photos', { params });
  }
}
