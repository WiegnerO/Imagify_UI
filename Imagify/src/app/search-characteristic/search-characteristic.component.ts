import { Component, OnInit } from '@angular/core';
import { WebService } from '../services/web.service';

@Component({
  selector: 'app-search-characteristic',
  templateUrl: './search-characteristic.component.html',
  styleUrls: ['./search-characteristic.component.css']
})
export class SearchCharacteristicComponent implements OnInit {

  characteristics : any[] = [];

  images : any[] = [];

  constructor(private webSevice : WebService) { }

  selectCharacteristic(characteristic){
    this.webSevice.getImageBasedOnCharacteristic(characteristic)
    .subscribe(res => {
      this.images = res;
    });
  }

  ngOnInit(): void {
    this.webSevice.getCharacteristics()
    .subscribe(res => {
      this.characteristics = res;
    })
  }

}
