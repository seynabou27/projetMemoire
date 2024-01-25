import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    //CommonModule,
    SharedModule,
    ApplicationRoutingModule
  ]
})
export class ApplicationModule { }
