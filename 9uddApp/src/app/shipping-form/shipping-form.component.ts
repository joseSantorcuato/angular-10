import { AuthService } from './../auth.service';
import { OrderService } from './../order.service';
import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { Order } from '../models/order';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit,OnDestroy  {
  @Input('cart') cart : ShoppingCart;
  shipping = {};
  userId : string;
  Usersubscription :Subscription;


  constructor(
    public  router : Router,
    private authService : AuthService,
    private orderService : OrderService) { }

  async ngOnInit(){
    this.Usersubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy(){
    this.Usersubscription.unsubscribe();
  }

  async placeOrder() {

    let total = this.cart.totalPrice;

    let order = new Order(this.userId, this.shipping, this.cart, this.cart.totalPrice);
    let result = await this.orderService.placeOrder(order);
     //this.router.navigate(['/order-success/', result.key]);

     //console.log(new Date() + ": " + JSON.stringify(total));
     let totalValue = JSON.stringify(total);
     console.log(totalValue);
     window.location.href = 'http://cablesyruidos.com/pg/examples/example_create_mail.php?totalSale='+totalValue;












  }


  }
