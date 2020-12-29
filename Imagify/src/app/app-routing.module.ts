import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { AddImagePageComponent } from './add-image-page/add-image-page.component';
import { SearchCharacteristicComponent } from './search-characteristic/search-characteristic.component';


const routes: Routes = [
  {path : '', redirectTo : 'homePage' , pathMatch : 'full'},
  {path : 'homePage' ,  component : FrontPageComponent},
  {path : 'addImagePage' ,  component : AddImagePageComponent},
  {path : 'characteristicPage' , component : SearchCharacteristicComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
