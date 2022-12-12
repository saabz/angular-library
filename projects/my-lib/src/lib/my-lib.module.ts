import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { GenericButtonComponent } from './generic-button/generic-button.component';



@NgModule({
  declarations: [
    MyLibComponent,
    GenericButtonComponent
  ],
  imports: [
  ],
  exports: [
    MyLibComponent,
    GenericButtonComponent
  ]
})
export class MyLibModule { }
