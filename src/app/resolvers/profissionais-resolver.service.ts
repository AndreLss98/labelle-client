import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { ProfissionaisService } from '../services/profissionais.service';

@Injectable({
  providedIn: 'root'
})
export class ProfissionaisResolverService implements Resolve<any>{

  constructor(private profissionalService: ProfissionaisService) {

  }

  resolve() {
    return this.profissionalService.profissionais;
  }
}
