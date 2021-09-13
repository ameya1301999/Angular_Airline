import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';
import { MyComment } from './comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  allTheComments: MyComment[];
  mynum: number;
  singleComment: MyComment = new MyComment();
  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {
  }

  loadComments(){
    console.log('loadComments() invoked')

    this.commentsService.loadCommentsService()
    .subscribe((data: MyComment[]) =>{
      this.allTheComments = data;
      console.log(this.allTheComments);
      }, (err) =>{ console.log(err);
      }
    );
  }

  loadCommentsById(){
    this.commentsService.
    loadCommentByIdService(this.mynum)
    .subscribe((data: MyComment) =>{
      this.singleComment = data;
      console.log(this.singleComment);
      }, (err) =>{ console.log(err);
      }
    );
  }
}
