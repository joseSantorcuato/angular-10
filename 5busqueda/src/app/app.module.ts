import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/compartidos/navbar/navbar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { Error404Component } from './componentes/error404/error404.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { HistoriaComponent } from './componentes/historia/historia.component';
import { ArticulosComponent } from './componentes/articulos/articulos.component';

import { FilterPipe } from './componentes/catalogo/filter.pipe';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    Error404Component,
    CatalogoComponent,
    HistoriaComponent,
    ArticulosComponent,
    FilterPipe  ],
  imports: [
    FormsModule,
    ReactiveFormsModule ,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
