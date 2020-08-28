import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  private modelos:any[] = [

{
nombre: "Escarabajo",
ano: "1945",
imagen: "assets/imagenes/escarabajo.jpg"
},

{
nombre: "Combi",
ano: "1945",
imagen: "assets/imagenes/combi.jpg"
},

{
nombre: "Brasilia",
ano: "1945",
imagen: "assets/imagenes/safari.jpg"
}



];


  constructor() {
 console.log("Servicio modelos funcionando perfectamente");

  }

  getModelos(){
    return this.modelos;
  }
}
