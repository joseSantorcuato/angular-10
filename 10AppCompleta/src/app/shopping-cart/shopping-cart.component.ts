import { Observable } from 'rxjs/Observable';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart$: Observable<ShoppingCart>;
  constructor(private shoppingCartService: ShoppingCartService) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
    

  }

  clearCart() {
    this.shoppingCartService.clearCart();
  }

}
