import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesReservaPageRoutingModule } from './detalhes-reserva-routing.module';

import { DetalhesReservaPage } from './detalhes-reserva.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    DetalhesReservaPageRoutingModule
  ],
  declarations: [DetalhesReservaPage]
})
export class DetalhesReservaPageModule {}
