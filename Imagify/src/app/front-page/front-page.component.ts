import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../services/web.service'

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  images : any[] = [];
  inCommonImages : any[] = [];
  currentImage : string = null;


  constructor(private webSevice : WebService) { }

  ngOnInit(): void {
    this.webSevice.getImages()
      .subscribe(res => {
        this.images = res
      })
  }

  similarImages(image){
    this.currentImage = image.image_name;
    this.webSevice.getImageBasedOnImage(image)
      .subscribe(res =>{
        this.inCommonImages = res;
      })
  }

  deleteImages(image){
    this.webSevice.deleteImage(image.id);
    window.location.reload();;
  }

}
