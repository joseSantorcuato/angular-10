import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { Error404Component } from './componentes/error404/error404.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { HistoriaComponent } from './componentes/historia/historia.component';
import { ArticulosComponent } from './componentes/articulos/articulos.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';



const routes: Routes = [
  { path: '',   redirectTo: '/inicio', pathMatch: 'full' }, // cada vez que abre va a inicio
  { path: 'inicio', component: InicioComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'detalle/:id', component: DetalleComponent },

  { path: 'articulos', component: ArticulosComponent },

  { path: '**', component: Error404Component },  // en caso de no encontrar la pagina
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
