import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProServico, Profissional } from 'src/app/models/profissional.model';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.page.html',
  styleUrls: ['./salon.page.scss'],
})
export class SalonPage implements OnInit {

  public profissional: Profissional;
  public servicosDisponiveis: ProServico[] = [];

  constructor(
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.profissional = this.route.snapshot.data.profissional;
    this.servicosDisponiveis = this.profissional.servicosDisponiveis.filter(servico => servico.disponivel);
  }


}
