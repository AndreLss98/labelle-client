import { Injectable } from '@angular/core';
import { Profissional } from '../models/profissional.model';

@Injectable({
  providedIn: 'root'
})
export class ProfissionaisService {

  private _profissionais: Profissional[] = [
    {
      id: 1,
      nome: "Maria Julia",
      img_perfil: "assets/imgs/woman_1.jpg",
      diasTrabalho: {
        dom: false,
        seg: true,
        ter: true,
        qua: false,
        qui: false,
        sex: false,
        sab: false,
        horario_fim: "10:00",
        horario_inicio: "17:00"
      },
      local: {
        cidade: "Goiania",
        estado: "Go",
        rua: "12",
        setor: "Marista",
        numero: null,
        quadra: 5,
        latitude: -16.695984,
        longitude: -49.264484
      },
      servicosDisponiveis: [
        {servico_id: 1, disponivel: true, valor: 50},
        {servico_id: 2, disponivel: false, valor: 0},
        {servico_id: 3, disponivel: true, valor: 20},
      ]
    }
  ];

  constructor() {

  }

  get profissionais() {
    return this._profissionais;
  }

  public getById(id: number) {
    return this.profissionais.find(profissional => profissional.id === id);
  }
}
