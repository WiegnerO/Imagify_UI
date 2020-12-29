import { Component, OnInit } from '@angular/core';
import { WebService } from '../services/web.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-image-page',
  templateUrl: './add-image-page.component.html',
  styleUrls: ['./add-image-page.component.css']
})
export class AddImagePageComponent implements OnInit {

  imageForm: FormGroup;

  constructor(private webService : WebService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.imageForm = this.formBuilder.group({
      numberOfCharacteristics: [''],
      characteristics: new FormArray([]),
      image_name : '',
      image_poster : '',
      price: null
  });
  }

  get fourmBuilderControl() { return this.imageForm.controls; }
  get imagesCharacteristicsFormArray() { return this.fourmBuilderControl.characteristics as FormArray; }

  onChangeCharacteristics(event) {
    const numberOfCharacteristics = event.target.value || 0;
    if (this.imagesCharacteristicsFormArray.length < numberOfCharacteristics) {
        for (let i = this.imagesCharacteristicsFormArray.length; i < numberOfCharacteristics; i++) {
            this.imagesCharacteristicsFormArray.push(this.formBuilder.group({
              characteristicValue: [''],
            }));
        }
    } else {
        for (let i = this.imagesCharacteristicsFormArray.length; i >= numberOfCharacteristics; i--) {
            this.imagesCharacteristicsFormArray.removeAt(i);
        }
    }
  }

  onSubmit() {
    let image = {
      "image_name": this.imageForm.controls["image_name"].value,
      //"image_object": this.imageForm.controls["image_object"].value,
      "image_poster": this.imageForm.controls["image_poster"].value,
      "price": this.imageForm.controls["price"].value,
      "characteristics" : []
  }


    this.imagesCharacteristicsFormArray.value.forEach(element => {
      Object.keys(element).forEach(function(key) {
        if(key == "characteristicValue"){
          image.characteristics.push(element[key])
        }
      })
    });

    this.webService.postImage(image)
  }

}
