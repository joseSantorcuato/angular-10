import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

autor:string = 'Mario Mora Morales';
titulo:string = 'Industrialización de la mano del escarabajo';
fecha:Date = new Date();


  constructor() { }

  ngOnInit(): void {
  }

}
