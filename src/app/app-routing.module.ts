import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SociosComponent } from './componentes/socios/socios.component';
import { BancosComponent } from './componentes/bancos/bancos.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { MenuprincipalComponent } from './menuprincipal/menuprincipal.component';

const routes: Routes = [
  {
    path:"socios",component:SociosComponent
  },
  {
    path:"inicio", component:InicioComponent
  },
  {
  path:"bancos", component:BancosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
