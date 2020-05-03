import { Injectable } from '@angular/core';
import { Reserva } from '../models/reserva.model';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  public reservas: Reserva[] = [
    {
      id: 1,
      dia: 25,
      horario: "08:00",
      profissional: {
        id: 1,
        nome: "Maria Judite da Dores",
        img_perfil: "assets/imgs/woman_1.jpg",
        local: {
          rua: "12",
          setor: "Marista",
          numero: 12,
          quadra: 20,
          cidade: "Goiânia",
          estado: "GO",
          latitude: -16.695984,
          longitude: -49.264484
        }
      },
      servicos: [
        { servico_id: 1, valorPago: 50 },
        { servico_id: 2, valorPago: 20 },
      ]
    }
  ]


  constructor() {

  }

  public getAll() {
    return this.reservas;
  }

  public getById(id: number) {
    return this.reservas.find(reserva => reserva.id === id);
  }
}
