import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {
  }

  loadComments(){
    this.commentsService.loadCommentsService();
  }

}
