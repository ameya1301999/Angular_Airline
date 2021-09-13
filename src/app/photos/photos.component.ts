import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
import { MyPhotos } from './photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  allThePhotos: MyPhotos[];
  constructor(private photosService: PhotosService) { }


  ngOnInit(): void {
  }

  loadPhotos(){
    console.log('loadComments() invoked')

    this.photosService.loadCommentsService()
    .subscribe((data: MyPhotos[]) =>{
      this.allThePhotos = data;
      console.log(this.allThePhotos);
      }, (err) =>{ console.log(err);
      }
    );
  }

}
