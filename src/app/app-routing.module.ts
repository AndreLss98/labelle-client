import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ReservaResolverService } from './resolvers/reserva-resolver.service';
import { ProfissionaisResolverService } from './resolvers/profissionais-resolver.service';
import { ReservasResolverService } from './resolvers/reservas-resolver.service';
import { ProfissionalResolverService } from './resolvers/profissional-resolver.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'agenda',
    resolve: {
      reservas: ReservasResolverService
    },
    loadChildren: () => import('./pages/agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'detalhes-reserva/:id',
    resolve: {
      reserva: ReservaResolverService
    },
    loadChildren: () => import('./pages/detalhes-reserva/detalhes-reserva.module').then( m => m.DetalhesReservaPageModule)
  },
  {
    path: 'map',
    resolve: {
      profissionais: ProfissionaisResolverService
    },
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'salon/:id',
    resolve: {
      profissional: ProfissionalResolverService
    },
    loadChildren: () => import('./pages/salon/salon.module').then( m => m.SalonPageModule)
  },
  /* {
    path: 'cadastro/:id',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  }, */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
