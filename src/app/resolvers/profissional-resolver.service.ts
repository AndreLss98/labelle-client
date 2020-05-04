import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { ProfissionaisService } from '../services/profissionais.service';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalResolverService implements Resolve<any>{

  constructor(
    private profissionalService: ProfissionaisService
  ) {

  }

  resolve(route: ActivatedRouteSnapshot) {
    const id = +route.paramMap.get('id');
    return this.profissionalService.getById(id);
  }
}
