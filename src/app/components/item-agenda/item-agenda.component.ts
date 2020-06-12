import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

import { Reserva } from './../../models/reserva.model';
import { formatAddres } from 'src/app/shared/functions';

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
    console.log("Item agenda: ", this.reserva);
    this.configItem();
  }

  private configItem() {
    this.endereco = formatAddres(this.reserva.profissional.local);

    this.reserva.servicos.forEach((servico: any) => {
      this.servicos += `${servico.tipo.nome} - `;
    });
  }

  public viewDetails() {
    this.route.navigateByUrl(`detalhes-reserva/${this.reserva.id}`);
  }
}
