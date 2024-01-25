import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MainContentComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
})
export class LayoutModule { }
