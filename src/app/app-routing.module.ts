import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { DatosEpidemiologicosComponent } from './componentes/datos-epidemiologicos/datos-epidemiologicos.component';
import { InformacionGeneralComponent } from './componentes/informacion-general/informacion-general.component';
import { NotiCovid19Component } from './componentes/noti-covid19/noti-covid19.component';
import { BibliografiasComponent } from './componentes/bibliografias/bibliografias.component';
import { DepartamentosComponent } from './componentes/departamentos/departamentos.component'


const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'datos-epidemiologicos', component: DatosEpidemiologicosComponent},
    {path: 'informacion-general', component: InformacionGeneralComponent},
    {path: 'noti-covid19', component: NotiCovid19Component},
    {path: 'bibliografias', component: BibliografiasComponent},
    {path: 'departamentos', component: DepartamentosComponent},
    {path: '**', component: InicioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
