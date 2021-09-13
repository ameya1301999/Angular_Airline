import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyPhotos } from './photos/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  commentsURL = "https://jsonplaceholder.typicode.com/photos";

  constructor(private myHTTP: HttpClient) { }
  loadCommentsService() : Observable<MyPhotos[]>{
    console.log('Comments service involed..');
    return this.myHTTP.get<MyPhotos[]>(this.commentsURL);
  }
}
