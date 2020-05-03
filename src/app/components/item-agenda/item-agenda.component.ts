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
  public endereco: string = '';

  constructor(
    private route: Router,
    private servicosService: ServicosService,
  ) {

  }

  ngOnInit() {
    this.configItem();
  }

  private configItem() {
    const { local } = this.reserva.profissional;
    this.endereco = `Rua ${local.rua}, N° ${local.numero} - ${local.setor} - ${local.cidade} - ${local.estado}`;

    this.reserva.servicos.forEach(servico => {
      this.servicos += `${this.servicosService.servicos.find(service => service.id === servico.servico_id).nome} - `;
    });
  }

  public viewDetails() {
    this.route.navigateByUrl(`detalhes-reserva/${this.reserva.id}`);
  }
}
