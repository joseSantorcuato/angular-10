
import { ProductService } from './product.service';
import { CategoryService } from './category.service';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { AuthGuard  } from './auth-guard.service';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { DataTableModule} from 'angular5-data-table';



import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

import { CustomFormsModule } from 'ng2-validation';

import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';


import { AppComponent } from './app.component';
import { environment } from './../environments/environment';

import { RouterModule } from '@angular/router';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCartService } from './shopping-cart.service';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { OrderService } from './order.service';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    CustomFormsModule,
    FormsModule,
    NgbModule.forRoot(),
    DataTableModule,
    RouterModule.forRoot([
      { path: '' , component: ProductsComponent},
      { path: 'products' , component: ProductsComponent},
      { path: 'shopping-cart' , component: ShoppingCartComponent},
      { path: 'login' , component : LoginComponent},

      { path: 'check-out' , component: CheckOutComponent, canActivate : [AuthGuard]},
      { path: 'my/orders' , component : MyOrdersComponent, canActivate : [AuthGuard]},
      { path: 'order-success/:id' , component : OrderSuccessComponent,canActivate : [AuthGuard]},


      {
        path: 'admin/products/new',
         component : ProductFormComponent,
         canActivate : [AuthGuard,AdminAuthGuard]
      },
      {
        path: 'admin/products/:id',
         component : ProductFormComponent,
         canActivate : [AuthGuard,AdminAuthGuard]
      },
      {
        path: 'admin/products',
         component : AdminProductsComponent,
         canActivate : [AuthGuard,AdminAuthGuard]
      },
      { path: 'admin/orders',
        component : AdminOrdersComponent,
        canActivate : [AuthGuard,AdminAuthGuard]
      }

    ])
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
