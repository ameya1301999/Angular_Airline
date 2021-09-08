import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<html>
    <head>
    <title> LikeDislike Button</title>
    </head>
    <body> 
      <button class="{{b1Class}}" (click) ="goLike()">{{likeLable}} {{likeCounter}}
          </button> 
      <button class={{b2Class}} (click) ="goDisLike()">{{dislikeLable}} {{dislikeCounter}}
          </button> 
    </body> 
    </html>`,
  styles: [
    `
      .Liked {
        background-color: green;
        color: white;
        padding: 15px 32 px;
        font-size: 16px;
      }

      .disLiked {
        background-color: red;
        color: white;
        padding: 15px 32 px;
        font-size: 16px;
      }    
    `
  ]
  //templateUrl: './button.component.html',
  //styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {


  b1Class: string = "Liked";
  b2Class: string = "disLiked";

  likeCounter: number = 100;
  dislikeCounter: number = 25;

  likeLable: string = 'Like'; 
  dislikeLable: string = 'DisLike';

  goLike() {
    console.log('Like is Clicked');
    ++this.likeCounter;
    if(this.likeCounter > 150) {
      this.likeCounter=100;
    }

  }

  goDisLike() {
    console.log('Disliked is Clicked');
    ++this.dislikeCounter;
    if(this.dislikeCounter > 31) {
      this.dislikeCounter=25;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
