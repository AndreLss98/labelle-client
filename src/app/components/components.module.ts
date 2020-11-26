import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { BlockInfoComponent } from './block-info/block-info.component';
import { CircleImgComponent } from './circle-img/circle-img.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { ItemAgendaComponent } from './item-agenda/item-agenda.component';
import { DiasSemanaComponent } from './dias-semana/dias-semana.component';
import { LineSeparatorComponent } from './line-separator/line-separator.component';
import { InputServicoComponent } from './input-servico/input-servico.component';
import { BlockServiceComponent } from './block-service/block-service.component';
import { TicketComponent } from './ticket/ticket.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { UserOptionsPopoverComponent } from './user-options-popover/user-options-popover.component';
import { EmptyPageComponent } from './empty-page/empty-page.component';

@NgModule({
  declarations: [
    TicketComponent,
    CalendarioComponent,
    ItemAgendaComponent,
    CircleImgComponent,
    DiasSemanaComponent,
    BlockInfoComponent,
    LineSeparatorComponent,
    HeaderComponent,
    InputServicoComponent,
    BlockServiceComponent,
    EnderecoComponent,
    UserOptionsPopoverComponent,
    EmptyPageComponent,
  ],
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
  ],
  exports: [
    TicketComponent,
    CalendarioComponent,
    ItemAgendaComponent,
    CircleImgComponent,
    DiasSemanaComponent,
    BlockInfoComponent,
    LineSeparatorComponent,
    HeaderComponent,
    InputServicoComponent,
    BlockServiceComponent,
    EnderecoComponent,
    UserOptionsPopoverComponent,
    EmptyPageComponent,
  ]
})
export class ComponentsModule { }
