import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/app/models/videos';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  @Input()
  video!: Video[];
  @Input()
  posicion!: number;

  constructor() { 
   
  }

  ngOnInit(): void {
    console.log(this.video)
  }

}
