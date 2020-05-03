import { Injectable } from '@angular/core';
import { ReservasService } from '../services/reservas.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReservaResolverService implements Resolve<any>{

  constructor(private reservaService: ReservasService) {

  }

  resolve(route: ActivatedRouteSnapshot) {
    const id = +route.paramMap.get('id');
    return this.reservaService.getById(id);
  }
}
