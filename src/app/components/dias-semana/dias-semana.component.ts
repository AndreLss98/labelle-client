import { Component, OnInit, Input } from '@angular/core';

import { NOME_DIAS_DA_SEMANA } from './../../shared/constants';
import { DiasTrabalho } from 'src/app/models/profissional.model';

@Component({
  selector: 'dias-semana',
  templateUrl: './dias-semana.component.html',
  styleUrls: ['./dias-semana.component.scss'],
})
export class DiasSemanaComponent implements OnInit {

  readonly diasSemana = NOME_DIAS_DA_SEMANA;

  @Input() diasTrabalho: DiasTrabalho;

  constructor() {

  }

  ngOnInit() {
    
  }

}
