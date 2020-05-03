import { Component, OnInit, Input } from '@angular/core';

import { Endereco } from 'src/app/models/profissional.model';
import { formatAddres } from 'src/app/shared/functions';

@Component({
  selector: 'endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss'],
})
export class EnderecoComponent implements OnInit {

  @Input() endereco: Endereco;
  public formatedAddress: string = '';

  constructor() {

  }

  ngOnInit() {
    this.formatedAddress = formatAddres(this.endereco);
  }

}
