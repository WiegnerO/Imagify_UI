import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  BASE_URL = 'http://localhost:5000/api';

  getImages() {
    return this.http.get<any[]>(this.BASE_URL + '/search');
  }

  deleteImage(image_id){
    return this.http.delete<any>(this.BASE_URL + '/images/' + image_id ).toPromise();
  }

  getCharacteristics(){
    return this.http.get<any[]>(this.BASE_URL + '/characteristic');
  }

  getImageBasedOnCharacteristic(characteristicValue){
    return this.http.get<any[]>(this.BASE_URL + '/search/advanced/' + characteristicValue);
  }

  postImage(image) {
    return this.http.post<any>(this.BASE_URL + '/images' , image ).toPromise();
  }

  getImageBasedOnImage(image){
    return this.http.post<any[]>(this.BASE_URL + '/search/advanced/', image);
  }

  getImageCharacteristics(image_id){
    return this.http.get<any[]>(this.BASE_URL + '/characteristic/' + image_id);
  }

  constructor(private http: HttpClient) { }
}
