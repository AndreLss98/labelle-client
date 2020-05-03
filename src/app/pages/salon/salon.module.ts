import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalonPageRoutingModule } from './salon-routing.module';

import { SalonPage } from './salon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalonPageRoutingModule
  ],
  declarations: [SalonPage]
})
export class SalonPageModule {}
