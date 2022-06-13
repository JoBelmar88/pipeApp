import { NgModule } from '@angular/core';
// PrimeNg
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';

@NgModule({
  // Módulo que sirve sólo para exportar otros módulos
  exports:[
    ButtonModule,
    CardModule,
    MenubarModule
  ],
  declarations: [],
  imports: [
  ]
})
export class PrimeNgModule { }
