import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetallesService {
  static seleccion(): any[] {
    throw new Error("Method not implemented.");
  }

  private modelos:any[] = [

{
  id: "1",
  nombre: "Escarabajo",
  ano: "1945",
  descripcion: "El Volkswagen Tipo 1 (comercializado por la marca como Käfer, Beetle, Escarabajo, Sedán, Vocho o Fusca, entre otros nombres) es un popular automóvil del segmento A producido por el fabricante alemán Volkswagen desde 1938 hasta 2003, convirtiéndose en uno de los automóviles más populares del mundo. Posteriormente, en 1998, se lanzó al mercado el Volkswagen New Beetle, un automóvil completamente nuevo que tenía la forma del Beetle original, al que de alguna manera rinde homenaje.",
  precio: "7.000.000",
  cuotas: "6",
  imagen: "assets/imagenes/escarabajo.jpg"
  },

  {
  id: "2",
  nombre: "Combi",
  ano: "1945",
  descripcion: "Su producción comenzó 8 de marzo de 1950. Impulsado por un motor bóxer de cuatro cilindros de 25 CV refrigerado por aire en la parte trasera, con capacidad para cargar 760 kg y alcanzar una velocidad máxima de 80 km/h y entre las utilidades que le fueron descubiertas al poco tiempo están su adaptación como ambulancia y como coche de bomberos. Durante esta época se introduce una versión con asientos desmontables y tres ventanas en ambos lados de hasta 8 plazas con innumerables posibilidades de configuración de asientos, lo cual lo transforma para obtener el espacio deseado, se la designa como Volkswagen Transporter Kombi (por la voz alemana Kombiwagen).",
  precio: "7.000.000",
  cuotas: "6",
  imagen: "assets/imagenes/combi.jpg"
  },

  {
  id: "3",
  nombre: "Brasilia",
  descripcion: "El Volkswagen Brasilia fue un automóvil producido entre 1973 y 1982 por Volkswagen do Brasil. Fue diseñado para combinar la robustez del Volkswagen Sedán, un auto que ya estaba consagrado, con la comodidad de un auto más moderno con mayor espacio interior. Este nombre es un homenaje a la entonces ciudad moderna, Brasilia, la capital brasileña que había sido fundada 13 años antes, este automóvil solo salió a la venta en México y Brasil.",
  ano: "1945",
  precio: "7.000.000",
  cuotas: "6",
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
