import {NgModule} from '@angular/core';
import { SociosComponent } from './socios/socios.component';
import { BancosComponent } from './bancos/bancos.component';
import { InicioComponent } from './inicio/inicio.component';
@NgModule ({
  declarations:[],
  imports:[
    InicioComponent,
    BancosComponent,
    SociosComponent
  ],
  exports:[]
})
export class ComponentesModule{}
