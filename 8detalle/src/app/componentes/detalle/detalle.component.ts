import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogoService } from '../../servicios/catalogo.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() nom: string
  @Input() fecha: string
  @Input() img: string
  @Input() des: string
  @Input() prec: string
  @Input() cuo: string


  public id: string;

  modelos:any[] = [];

  constructor(private route: ActivatedRoute, private _catalogoService:CatalogoService) {}

  ngOnInit() {
     this.id = this.route.snapshot.paramMap.get('id');
     console.log(this.id);

     this.modelos = this._catalogoService.getModelos();
     console.log(this.modelos);

     let detalle = this.modelos.find(item => item.id == this.id);

     this.nom = detalle.nombre;
     this.fecha= detalle.ano;
     this.img= detalle.imagen;
     this.des= detalle.descripcion;
     this.prec= detalle.precio;
     this.cuo = detalle.cuotas;

     console.log(detalle.id);
     console.log(detalle.nombre);
     console.log(detalle.ano);
     console.log(detalle.imagen);



  }


}
