import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipoComponent } from './equipo/equipo.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { InicioComponent } from './inicio/inicio.component';
import { InvestigacionComponent } from './investigacion/investigacion.component';

const routes: Routes = [
  { path: 'Inicio', component: InicioComponent},
  { path: 'Inicio/:id', component: InicioComponent},
  { path: 'Galeria', component: GaleriaComponent},
  { path: 'Equipo', component: EquipoComponent},
  { path: 'Investigacion/:id', component: InvestigacionComponent},
  { path: 'Investigacion', component: InvestigacionComponent},
  { path: '', redirectTo: 'Inicio', pathMatch: 'full'},
  { path: '**', redirectTo: 'Inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
