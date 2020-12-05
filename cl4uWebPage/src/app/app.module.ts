import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { GearsComponent } from './components/gears/gears.component';
import { InfoSliderComponent } from './components/info-slider/info-slider.component';
import { NewsSliderComponent } from './components/news-slider/news-slider.component';
import { FormComponent } from './components/form/form.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { EquipoComponent } from './equipo/equipo.component';
import { InvestigacionComponent } from './investigacion/investigacion.component';
import { ContactosComponent } from './app/contactos/contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    GearsComponent,
    InfoSliderComponent,
    NewsSliderComponent,
    FormComponent,
    FooterComponent,
    InicioComponent,
    GaleriaComponent,
    EquipoComponent,
    InvestigacionComponent,
    ContactosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
