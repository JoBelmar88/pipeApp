import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

import localeEs from "@angular/common/locales/es-CL";
import localeFr from "@angular/common/locales/fr";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localeEs);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule,
    VentasModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-CL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
