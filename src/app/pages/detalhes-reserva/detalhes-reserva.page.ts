import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Reserva } from 'src/app/models/reserva.model';

@Component({
  selector: 'app-detalhes-reserva',
  templateUrl: './detalhes-reserva.page.html',
  styleUrls: ['./detalhes-reserva.page.scss'],
})
export class DetalhesReservaPage implements OnInit {

  public reserva: Reserva;
  public valorTotal;

  constructor(
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    console.log(this.route.snapshot)
    this.configPage();
  }

  private configPage() {
    this.reserva = this.route.snapshot.data.reserva;
    this.valorTotal = this.reserva.servicos.reduce((acumulador, servico) => acumulador + servico.valorPago, 0);
  }

}
