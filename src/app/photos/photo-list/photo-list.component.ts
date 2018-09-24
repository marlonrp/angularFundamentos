import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Subject } from '../../../../node_modules/rxjs';
import { debounceTime } from "rxjs/operators";

import { Photo } from '../photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  photos: Photo[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();

  hasMore: boolean = true;
  curretnPage: number = 1;
  userName: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ){

  }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data['photos'];

    this.debounce
    .pipe(debounceTime(400))
    .subscribe(filter => this.filter = filter);

    console.log(this.hasMore);

  }

  ngOnDestroy(){
    this.debounce.unsubscribe();
  }

  load(){
    this.photoService
    .listFromUserPaginated(this.userName, ++this.curretnPage)
    .subscribe(photos => {
      this.photos = this.photos.concat(photos);
      if(!photos.length) this.hasMore = false;
    })
  }

}
