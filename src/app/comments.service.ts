import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor() { }
  loadCommentsService(){
    console.log('Comments service involed');
  }
}
