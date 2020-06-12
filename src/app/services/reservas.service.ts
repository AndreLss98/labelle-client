import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Reserva } from '../models/reserva.model';

import { UserService } from './user.service';

import { HTTP_OPTIONS } from '../shared/http-options';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  public reservas: Reserva[] = [];


  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {

  }

  public getAll() {
    return this.reservas;
  }

  public getById(id: number) {
    return this.reservas.find(reserva => reserva.id === id);
  }

  public getAllOfMonth(mes: number, ano: number) {
    const body =
    `{
      reservas(cliente_id: ${this.userService.user.id}, mes: ${mes}, ano: ${ano}) {
        id horario dia
        servicos {
          valor_pago,
          tipo {
            nome
          }
        }
        profissional {
          nome,
          local {
            rua numero setor cidade estado
          }
        }
      }
    }`;
    return this.http.post(`${environment.api_base_url}/api`, body, HTTP_OPTIONS);
  }
}
