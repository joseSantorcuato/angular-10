import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../../servicios/catalogo.service';
import { FilterPipe } from './filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  searchText:string;
  modelos:any[] = [];

  constructor( private _catalogoService:CatalogoService) {

  }

  ngOnInit() {

    this.modelos = this._catalogoService.getModelos();
    console.log(this.modelos);
  }

}
