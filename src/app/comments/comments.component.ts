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
}
