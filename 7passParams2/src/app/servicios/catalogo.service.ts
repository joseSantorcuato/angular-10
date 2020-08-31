import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  static seleccion(): any[] {
    throw new Error("Method not implemented.");
  }

  private modelos:any[] = [

{
id: "1",
nombre: "Escarabajo",
ano: "1945",
imagen: "assets/imagenes/escarabajo.jpg"
},

{
id: "2",
nombre: "Combi",
ano: "1945",
imagen: "assets/imagenes/combi.jpg"
},

{
id: "3",
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
