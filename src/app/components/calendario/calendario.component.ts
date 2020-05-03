import { Component, OnInit } from '@angular/core';

import { NOME_DIAS_DA_SEMANA, NOME_MESES } from './../../shared/constants';

@Component({
  selector: 'calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss'],
})
export class CalendarioComponent implements OnInit {

  readonly NOME_MESES = NOME_MESES;
  readonly diaSemana = NOME_DIAS_DA_SEMANA;

  public dataAtual = new Date();
  public anoSelecionado: number = this.dataAtual.getFullYear();
  public numeroMesSelecionado: number = this.dataAtual.getMonth();
  public nomeMesSelecionado: string = NOME_MESES[this.numeroMesSelecionado];
  public diasMesSelecionado: number[] = [];

  constructor() {

  }

  ngOnInit() {
    this.diasMesSelecionado = this.diasMesAtual(this.numeroMesSelecionado, this.anoSelecionado);
  }

  public mesAnterior() {
    if (this.numeroMesSelecionado === 0) {
      this.numeroMesSelecionado = 11;
      this.anoSelecionado--;
    } else {
      this.numeroMesSelecionado--;
    }
    this.updateCalendario();
  }

  public proximoMes() {
    if (this.numeroMesSelecionado === 11) {
      this.numeroMesSelecionado = 0;
      this.anoSelecionado++;
    } else {
      this.numeroMesSelecionado++;
    }
    this.updateCalendario();
  }

  private updateCalendario() {
    this.nomeMesSelecionado = NOME_MESES[this.numeroMesSelecionado];
    this.diasMesSelecionado = this.diasMesAtual(this.numeroMesSelecionado, this.anoSelecionado);
  }


  public diasMesAtual(mes: number, ano: number) {
    let tempMes: any[] = [];
    let tamanhoDoMes = this.getTotaldeDias(mes, ano);
    let tamanhoDoMesAnterior = this.getTotaldeDias((mes - 1), ano);

    for (let j = this.diaInicial(ano, mes); j > 0; j--) {
      tempMes.push( {numero: (tamanhoDoMesAnterior + 1) - j, isCurrentMonth: false});
    }

    for (let i = 1; i <= tamanhoDoMes; i++) {
      tempMes.push({ numero: i, isCurrentMonth: true });
    }
    return tempMes;
  }

  public diasRestanteDoMesAtual(date: Date) {
    let tempMes: number[] = [];
    let tamanhoDoMes = this.getTotaldeDias(date.getMonth(), date.getFullYear());

    for (let i = date.getDate(); i <= tamanhoDoMes; i++) {
      tempMes.push(i);
    }
    return tempMes;
  }

  private getTotaldeDias(month: number, ano: number) {
    if (month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11) {
      return 31;
    } else if (month === 3 || month === 5 || month === 8 || month === 10) {
      return 30;
    } else {
      return this.isAnoBisexto(ano) ? 29 : 28;
    }
  }

  private isAnoBisexto(ano: number) {
    return ((ano % 100 !== 0) && (ano % 4 === 0) || (ano % 400 === 0));
  }

  private diaInicial(ano: number, mes: number) {
    let inicio = new Date(ano, mes, 1).getDay();
    return inicio;
  }
}
