import { Injectable } from '@angular/core';

import { Servico } from '../models/servico.model';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  public servicos: Servico[] = [
    { id: 1, icone_path: 'assets/hair-cut.svg', nome: "Corte" },
    { id: 2, icone_path: 'assets/nail.svg', nome: "Unha" },
    { id: 3, icone_path: 'assets/maquiagem.svg', nome: "maquiagem" }
  ]

  constructor() {

  }
}
