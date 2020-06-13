import { Injectable } from '@angular/core';
import { ReservasService } from '../services/reservas.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReservasResolverService implements Resolve<any>{

  constructor(private reservaService: ReservasService) {

  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.reservaService.getAllOfMonth();
  }
}
