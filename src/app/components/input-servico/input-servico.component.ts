import { Component, OnInit, Input } from '@angular/core';

import { Servico } from 'src/app/models/servico.model';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'input-servico',
  templateUrl: './input-servico.component.html',
  styleUrls: ['./input-servico.component.scss'],
})
export class InputServicoComponent implements OnInit {

  @Input() servico: Servico;
  public formatedValue: string = '0,00';
  public disponivel: boolean = false;

  constructor(
    private userService: UserService
  ) {

  }

  ngOnInit() {
    this.configInput();
  }

  private configInput() {
/*     const service = this.userService.user.servicosDisponiveis.find(servcicoDis => servcicoDis.servico_id === this.servico.id);
    this.formatedValue = service.valor.toFixed(2).replace(/\./, ',');
    this.disponivel = service.disponivel; */
  }

  public onClickInput() {
    this.disponivel = !this.disponivel;
  }

  public formatValueInput() {
    this.formatedValue = this.formatedValue.replace(/[a-zA-Z à-úÀ-Ú]/g, '').replace(/^\,./, '0,00')
    .replace(/([0-9]*\,)./, '$100').replace(/([0-9]*\,)[0-9]{3,}/, '$100');
    if (this.formatedValue === '') this.formatedValue = '0,00';
  }
}
