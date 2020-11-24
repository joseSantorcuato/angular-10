import { ShoppingCart } from './../models/shopping-cart';
import { ShoppingCartService } from './../shopping-cart.service';
import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Router} from "@angular/router"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appUser : AppUser;
  cart$ : Observable<ShoppingCart>;

  constructor(private auth : AuthService, private shoppingCartService :ShoppingCartService, private router: Router) { }

  logout(){
    this.auth.logout();
    this.router.navigate(['products']);

  }

  async ngOnInit(){
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);

    this.cart$ = await this.shoppingCartService.getCart();
  }

}
