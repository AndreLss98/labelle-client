import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaPageRoutingModule } from './agenda-routing.module';

import { AgendaPage } from './agenda.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { UserOptionsPopoverComponent } from 'src/app/components/user-options-popover/user-options-popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    AgendaPageRoutingModule
  ],
  declarations: [ AgendaPage ],
  entryComponents: [ UserOptionsPopoverComponent ]
})
export class AgendaPageModule {}
