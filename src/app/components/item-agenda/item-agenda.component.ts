import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

import { Reserva } from './../../models/reserva.model';

import { ServicosService } from 'src/app/services/servicos.service';

@Component({
  selector: 'item-agenda',
  templateUrl: './item-agenda.component.html',
  styleUrls: ['./item-agenda.component.scss'],
})
export class ItemAgendaComponent implements OnInit {

  @Input() reserva: Reserva;
  public servicos: string = '';

  constructor(
    private route: Router,
    private servicosService: ServicosService,
  ) {

  }

  ngOnInit() {
    this.reserva.servicos.forEach(servico => {
      this.servicos += `${this.servicosService.servicos.find(service => service.id === servico.servico_id).nome} - `;
    })
  }

  public viewDetails() {
    this.route.navigateByUrl('detalhes-reserva/1');
  }
}
