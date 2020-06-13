import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Profissional } from '../models/profissional.model';

import { HTTP_OPTIONS } from '../shared/http-options';

@Injectable({
  providedIn: 'root'
})
export class ProfissionaisService {

  private _profissionais: Profissional[] = [];

  constructor(
    private http: HttpClient
  ) {

  }

  get profissionais() {
    return this._profissionais;
  }

  public getAll() {
    const body =
    `{
      profissionais {
        id nome
        local {
          latitude longitude
        }
        disponibilidade {
          horario_inicio horario_fim
        }
      }
    }`;

    return this.http.post(`${environment.api_base_url}/api`, body, HTTP_OPTIONS);
  }

  public getById(id) {
    const body =
    `{
      profissional(id: ${id}) {
        id nome
        disponibilidade {
          horario_inicio horario_fim
        }
        servicos {
          id valor disponivel
          tipo {
            id nome icone_path
          }
        }
      }
    }`;

    return this.http.post(`${environment.api_base_url}/api`, body, HTTP_OPTIONS);
  }
}
