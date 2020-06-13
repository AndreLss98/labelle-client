import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { Reserva } from '../models/reserva.model';

import { UserService } from './user.service';

import { HTTP_OPTIONS } from '../shared/http-options';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  public reservas: Reserva[] = [];
  public daysWithReservas: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);


  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {

  }

  public getAll() {
    return this.reservas;
  }

  public getById(id: number) {
    const body =
    `{
      reserva(id: ${id}) {
        id horario dia mes ano
        servicos {
          valor_pago,
          tipo {
            nome icone_path
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

  public getAllOfMonth(mes?: number, ano?: number) {

    if (!mes && !ano) {
      mes = new Date().getMonth();
      ano = new Date().getFullYear();
    }

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

  public createReserve(dataDaReserva, profissional_id, servicos) {
    const body = {
      reserva: {
        cliente_id: this.userService.user.id,
        profissional_id,
        dia: dataDaReserva.diaSelecionado,
        mes: dataDaReserva.mesSelecionado,
        ano: dataDaReserva.anoSelecionado,
        horario: "15:00"
      },
      servicos
    };

    return this.http.post(`${environment.api_base_url}/clientes/reserva`, body);
  }
}
