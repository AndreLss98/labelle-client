import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: Cliente;

  constructor() {

  }
}
