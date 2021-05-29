import { BrowserModule } from '@angular/platform-browser';
import { NgModule, PipeTransform } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import {GraficosService } from './services/graficos.service';
import {ChartsModule} from 'chart.js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { InformacionGeneralComponent } from './componentes/informacion-general/informacion-general.component';
import { DatosEpidemiologicosComponent } from './componentes/datos-epidemiologicos/datos-epidemiologicos.component';
import { NotiCovid19Component } from './componentes/noti-covid19/noti-covid19.component';
import { BibliografiasComponent } from './componentes/bibliografias/bibliografias.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { CardsComponent } from './componentes/cards/cards.component';
import { GraficosComponent } from './componentes/graficos/graficos.component';
import { DatePipe } from '@angular/common';
import { DepartamentosComponent } from './componentes/departamentos/departamentos.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    InformacionGeneralComponent,
    DatosEpidemiologicosComponent,
    NotiCovid19Component,
    BibliografiasComponent,
    CarruselComponent,
    CardsComponent,
    GraficosComponent,
    DepartamentosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [GraficosService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
