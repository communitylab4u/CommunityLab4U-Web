import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipoComponent } from './equipo/equipo.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { InicioComponent } from './inicio/inicio.component';
import { InvestigacionComponent } from './investigacion/investigacion.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'inicio/:id', component: InicioComponent},
  { path: 'investigacion', component: InvestigacionComponent},
  { path: 'investigacion/:id', component: InvestigacionComponent},
  { path: 'equipo', component: EquipoComponent},
  { path: 'galeria', component: GaleriaComponent},
  { path: 'inicio', component: GaleriaComponent},
  { path: '',   redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
