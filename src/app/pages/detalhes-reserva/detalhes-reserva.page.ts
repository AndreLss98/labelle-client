import { NOME_MESES } from './../../shared/constants';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Reserva } from 'src/app/models/reserva.model';

@Component({
  selector: 'app-detalhes-reserva',
  templateUrl: './detalhes-reserva.page.html',
  styleUrls: ['./detalhes-reserva.page.scss'],
})
export class DetalhesReservaPage implements OnInit {

  readonly NOME_MESES = NOME_MESES;

  public valorTotal;
  public mesReserva: string = '';
  public reserva: Reserva;

  constructor(
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    console.log(this.route.snapshot.data.reserva.data.reserva)
    this.configPage();
  }

  private configPage() {
    this.reserva = this.route.snapshot.data.reserva.data.reserva;
    this.reserva.horario = this.reserva.horario.substr(0, 5)
    this.valorTotal = this.reserva.servicos.reduce((acumulador, servico) => acumulador + servico.valor_pago, 0);
    this.mesReserva = this.NOME_MESES[this.reserva.mes];
  }

}
