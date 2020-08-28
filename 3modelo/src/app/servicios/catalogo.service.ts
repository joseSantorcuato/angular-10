import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  public modelos:any[] = [

{
nombre: "Escarabajo",
ano: "1945",
imagen: "assets/imagenes/escarabajo.jpg",
texto: "El Volkswagen (comercializado por la marca como Käfer, Beetle, Escarabajo, Sedán, Vocho o Fusca, entre otros nombres) es un popular automóvil del segmento A producido por el fabricante alemán Volkswagen desde 1938 hasta 2003, convirtiéndose en uno de los automóviles más populares del mundo. "
},

{
nombre: "Combi",
ano: "1945",
imagen: "assets/imagenes/combi.jpg",
texto: "Al finalizar la Segunda Guerra Mundial, la fábrica Volkswagen de Wolfsburgo, Alemania, pasó a manos del gobierno británico, el cual recibió el 23 de abril de 1947 una propuesta del empresario holandés Ben Pon para comercializar la marca en los Países Bajos. "
},

{
nombre: "Brasilia",
ano: "1945",
imagen: "assets/imagenes/safari.jpg",
texto: "El Volkswagen Brasilia fue un automóvil producido entre 1973 y 1982 por Volkswagen do Brasil. Fue diseñado para combinar la robustez del Volkswagen Sedán, un auto que ya estaba consagrado, con la comodidad de un auto más moderno con mayor espacio interior. "
}



];


  constructor() {
 console.log("Servicio modelos funcionando perfectamente");

  }

  getModelos(){
    return this.modelos;
  }
}
