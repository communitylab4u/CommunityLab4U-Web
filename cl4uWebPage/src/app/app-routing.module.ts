import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaleriaComponent } from './galeria/galeria.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: 'Inicio', component: InicioComponent},
  { path: 'Galeria', component: GaleriaComponent},
  { path: '', redirectTo: 'Inicio', pathMatch: 'full'},
  { path: '**', redirectTo: 'Inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
