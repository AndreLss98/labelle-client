import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente.model';

import { environment } from 'src/environments/environment';
import { USER_STORAGE_KEY } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user: Cliente;

  constructor(
    private http: HttpClient
  ) {

  }

  get user(): Cliente {
    return this._user;
  }

  set user(user: Cliente) {
    this._user = user;
  }

  public sigin(email: string, senha: string) {
    return this.http.post(`${environment.api_base_url}/auth/cliente`, { email, senha });
  }

  public logout() {
    localStorage.removeItem(USER_STORAGE_KEY);
  }

}
