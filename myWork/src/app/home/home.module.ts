import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {MyHeaderComponent} from "../my-header/my-header.component";
import {FormComponent} from "./form/form.component";
import {ViewFormComponent} from "./view-form/view-form.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage, MyHeaderComponent, FormComponent, ViewFormComponent]
})
export class HomePageModule {}
