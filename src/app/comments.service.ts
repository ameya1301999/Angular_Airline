import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MyComment } from './comments/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  commentsURL = "https://jsonplaceholder.typicode.com/comments";

  constructor(private myHTTP: HttpClient) { }
  loadCommentsService() : Observable<MyComment[]>{
    console.log('Comments service involed..');
    return this.myHTTP.get<MyComment[]>(this.commentsURL);
  }
}
