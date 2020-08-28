import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../../servicios/catalogo.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  modelos:any[] = [];

  constructor( private _catalogoService:CatalogoService) {

  }

  ngOnInit() {

    this.modelos = this._catalogoService.getModelos();
    console.log(this.modelos);
  }

}
