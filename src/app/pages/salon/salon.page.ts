import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Servico, Profissional } from 'src/app/models/profissional.model';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.page.html',
  styleUrls: ['./salon.page.scss'],
})
export class SalonPage implements OnInit {

  public profissional: Profissional;
  public servicosDisponiveis: Servico[] = [];

  private total = 0;
  public totalFormated = '0,00';

  constructor(
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.profissional = this.route.snapshot.data.profissional.data.profissional;
    this.servicosDisponiveis = this.profissional.servicos.filter(servico => servico.disponivel);
  }

  public onChangeSelections(event) {
    const { valor, selecionado } = event;
    selecionado? this.calculateTotalPrice(valor) : this.calculateTotalPrice(-valor);
  }

  private calculateTotalPrice(value: number) {
    this.total += value;
    this.formatPrice();
  }

  private formatPrice() {
    this.totalFormated = this.total.toFixed(2).replace(/\./, ',');
  }
}
