import { Component, Input, OnInit } from '@angular/core';
import { WebService } from '../services/web.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() image;

  characteristics : any[] = [];

  constructor(private webSevice : WebService) {
   }

  ngOnInit(): void {
    console.log(this.image)
    this.webSevice.getImageCharacteristics(this.image.id)
    .subscribe(res => {
      this.characteristics = res
    })
  }

}
