import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesReservaPageRoutingModule } from './detalhes-reserva-routing.module';

import { DetalhesReservaPage } from './detalhes-reserva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesReservaPageRoutingModule
  ],
  declarations: [DetalhesReservaPage]
})
export class DetalhesReservaPageModule {}
