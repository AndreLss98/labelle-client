import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Servico } from 'src/app/models/profissional.model';

import { ServicosService } from 'src/app/services/servicos.service';

@Component({
  selector: 'input-servico',
  templateUrl: './input-servico.component.html',
  styleUrls: ['./input-servico.component.scss'],
})
export class InputServicoComponent implements OnInit {

  @Input() servico: Servico;

  @Output() changeSelection = new EventEmitter();

  public formatedValue: string = '0,00';
  public selecionado: boolean = false;
  public formatedService: Servico;

  constructor(
    private servicoService: ServicosService
  ) {

  }

  ngOnInit() {
    this.configInput();
  }

  private configInput() {
    console.log("Servico: ", this.servico)
    this.formatedValue = this.servico.valor.toFixed(2).replace(/\./, ',');
  }

  public onClickInput() {
    this.selecionado = !this.selecionado;
    this.changeSelection.emit({ id: this.servico.id, valor: this.servico.valor, selecionado: this.selecionado });
  }

  public formatValueInput() {
    this.formatedValue = this.formatedValue.replace(/[a-zA-Z à-úÀ-Ú]/g, '').replace(/^\,./, '0,00')
    .replace(/([0-9]*\,)./, '$100').replace(/([0-9]*\,)[0-9]{3,}/, '$100');
    if (this.formatedValue === '') this.formatedValue = '0,00';
  }
}
