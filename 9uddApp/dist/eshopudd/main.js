(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin-orders/admin-orders.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin-orders/admin-orders.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>admin-orders works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin-products/admin-products.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin-products/admin-products.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>admin-products works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/product-form/product-form.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/product-form/product-form.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>product-form works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/check-out/check-out.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/check-out/check-out.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<h2>Check out, resumen y datos de despacho</h2>\n<br>\n<div class=\"container\">\n\n<div class=\"row\" *ngIf=\"cart$ | async as cart\">\n\n  <div class=\"col-12\">\n    <shopping-cart-summary [cart]=\"cart\"></shopping-cart-summary>\n  </div>\n\n\n<div class=\"container\">\n  <div class=\"card\" >\n<br>\n<div class=\"card-body\">\n\n<h3 class=\"card-title\">Datos para despacho</h3>\n\n\n\n  <div class=\"col-12\">\n\n    <shipping-form [cart]=\"cart\"></shipping-form>\n  </div>\n\n</div>\n\n</div>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>home works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/list-order-view/list-order-view.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/list-order-view/list-order-view.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"coantainer\" *ngIf=\"order$ | async as orders\">\n  <div class=\"coantainer\" *ngIf=\"orders.length > 0; else noOrder\">\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th >Cliente</th>\n          <th>Fecha</th>\n          <th>Detalles</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let order of orders\">\n          <td>{{order.shipping.name}}</td>\n          <td>{{order.datePlaced | date}}</td>\n          <td><a [routerLink]=\"['/order-details', order.$key]\">Ver detalle</a></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <ng-template #noOrder>No hay ordenes.</ng-template>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n   <h3>Inicio de sesión</h3>\n<div class=\"container\">\n\n\n <div  class=\"col-md-12 text-center\">\n\n  <button id=\"google\" (click)=\"login()\" class=\"btn btn-primary\"><i class=\"fab fa-google\"></i>\n\n\n\nInicio de sesión Google</button>\n\n<div  class=\"col-md-12 text-center\">\n<button id=\"fb\"  (click)=\"signInWithFacebook()\" class=\"btn btn-primary\"><i class=\"fab fa-facebook-f\"></i>\n\n\n      Inicio de sesión Facebook\n    </button>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/my-orders/my-orders.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-orders/my-orders.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Mis ordenes</h1>\n\n<list-order-view [order$]=\"order$\"></list-order-view>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <div class=\"container\">\n      <a class=\"navbar-brand\" routerLink='/'>\n        EshopUdd\n      </a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink='/shopping-cart'>\n              Carrito\n              <span class=\"badge badge-pill badge-primary \" *ngIf=\"cart$ | async as cart\">\n             {{ cart.totalItemsCount }}  <i class=\"fas fa-shopping-cart\"></i> \n              </span>\n            </a>\n          </li>\n        </ul>\n      <ul class=\"navbar-nav \">\n          <ng-template #anonymousUser>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink='/login'><i class=\"fas fa-sign-in-alt\"></i>\n\nInicio de sesión</a>\n            </li>\n          </ng-template>\n          <li  *ngIf=\"appUser; else anonymousUser\" class=\"nav-item dropdown\">\n         <a  class=\"nav-link dropdown-toggle\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <i class=\"fas fa-user\"></i>     {{ appUser.name }}\n         </a>\n         <div  class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n             <a class=\"dropdown-item\" routerLink=\"/my/orders\">Mis ordenes</a>\n             <a class=\"dropdown-item\" (click)=\"logout()\"><i class=\"fas fa-sign-out-alt\"></i>\n\nCerrar sesión</a>\n\n\n         </div>\n     </li>\n          </ul>\n      </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/order-success/order-success.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/order-success/order-success.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>order-success works!</p>\n\n<p>{{valorTotal}}</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/order-view/order-view.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/order-view/order-view.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n  <h4 class=\"card-title text-center\">Detalles de orden</h4>\n<br>\n<div class=\"container\">\n  <div class=\"col-12\">\n    <ng-container *ngIf=\"order$ | async as order\">\n      <ng-container *ngIf=\"order.items\" ; else notFound>\n        <div class=\"card\">\n          <div class=\"card-body\">\n\n            <ul class=\"list-group list-group-flush\">\n              <li class=\"list-group-item\">\n                <span class=\"font-weight-bold\">Nombre:</span> {{order.shipping.name}}\n              </li>\n              <li class=\"list-group-item\">\n                <span class=\"font-weight-bold\">Fecha de la orden:</span> {{order.datePlaced | date}}\n              </li>\n              <li class=\"list-group-item\"><span class=\"font-weight-bold\">Orden:</span>\n                <div>\n                  <ul class=\"list-group list-group-flush\">\n                    <li class=\"list-group-item\" *ngFor=\"let item of order.items\">\n                      {{item.product.title}} x {{item.quantity}} {{item.price | currency:'CLP':'symbol-narrow'}}\n                      <div class=\"float-right\">{{item.totalPrice | currency:'CLP':'symbol-narrow'}}</div>\n                    </li>\n                    <li class=\"list-group-item\">\n                        <span class=\"font-weight-bold\">Total: </span>\n                        <div class=\"float-right\">{{order.totalSale | currency:'CLP':'symbol-narrow'}}</div>\n                    </li>\n                  </ul>\n                </div>\n              </li>\n              <li class=\"list-group-item\"><span class=\"font-weight-bold\">Dirección de despacho:</span>\n                <div>\n                  <ul class=\"list-group list-group-flush\">\n                    <li class=\"list-group-item\"> Nombre : {{order.shipping.name}}</li>\n                    <li class=\"list-group-item\"> Dirección: {{order.shipping.addressLine1}}</li>\n                    <li class=\"list-group-item\"> Dirección 2 : {{order.shipping.addressLine2}}</li>\n                    <li class=\"list-group-item\"> Ciudad : {{order.shipping.city}}</li>\n                  </ul>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </ng-container>\n      <ng-template #notFound>\n        No se encontró orden.\n      </ng-template>\n    </ng-container>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product-card/product-card.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product-card/product-card.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"product.title\" class=\"card\">\n  <img *ngIf=\"product.imageUrl\" class=\"card-img-top\" [src]=\"product.imageUrl\" alt=\"Card image cap\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{ product.title }}</h5>\n    <p class=\"card-text\">{{ product.price | currency:'CLP':'symbol-narrow' }}</p>\n    <!-- <a href=\"#\" class=\"btn btn-primary\">Comprar ahora</a> , antiguo boton que decia comprar ahora-->\n  </div>\n\n\n\n  <div *ngIf=\"shoppingCart\" class=\"card-footer\">\n          <button\n          *ngIf=\"shoppingCart.getQuantity(product) >= 0; else updateQuantity\"\n              (click)=\"addToCart()\"\n              class=\"btn btn-primary btn-block\">Agregar a carrito</button>\n              <br>\n\n                <br>\n      </div>\n\n\n\n\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product-quantity/product-quantity.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product-quantity/product-quantity.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"def-number-input number-input safari_only\">\n  <button (click)=\"removeFromCart()\" class=\"minus\"></button>\n  <div class=\"col text-center\">\n     {{ shoppingCart.getQuantity(product) }}\n  </div>\n  <button   (click)=\"addToCart()\" class=\"plus\"></button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/product-filter/product-filter.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/product-filter/product-filter.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col\">\n    <div class=\"dropdown\">\n      <button class=\"btn btn-light dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" >Seleccione productos por categoría</button>\n\n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n        <a class=\"dropdown-item\" [class.active]=\"!category\" routerLink=\"/\">Todos los productos</a>\n\n\n        <button class=\"dropdown-item\" *ngFor=\"let c of categories$ | async\" routerLink=\"/\"\n            [queryParams]=\"{ category: c.$key }\"\n            class=\"list-group-item list-group-item-action\"\n            [class.active]=\"category === c.$key\">  {{ c.name }}</button>\n\n      </div>\n    </div>\n  </div>\n<br>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/products.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/products.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n<h3>Productos</h3>\n<br>\n</div>\n        <div class=\"row\" *ngIf=\"cart$ | async as cart\">\n                <div class=\"col-12\">\n                  <div class=\"container\">\n                  <product-filter [category]=\"category\" ></product-filter>\n\n                        <br>\n                        <br>\n                 </div>\n                  <div class=\"container\" *ngFor=\"let p of filteredProducts; let i = index\">\n                    <product-card [product]=\"p\" [shopping-cart]=\"cart\"></product-card>\n                </div>\n                \n\n\n        </div>\n          </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shipping-form/shipping-form.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shipping-form/shipping-form.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\">\n  <br>\n    <div class=\"form-group\">\n      <label for=\"\">Nombre Completo</label>\n      <input #name=\"ngModel\" name=\"name\" [(ngModel)]=\"shipping.name\" type=\"text\" placeholder=\"Ej: Mario Morales Mora\" class=\"form-control\" required>\n      <div class=\"alert alert-danger\" *ngIf=\"name.touched && name.invalid\">\n        <div *ngIf=\"name.errors.required\">Su nombre es requerido.</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"\">Dirección</label>\n      <input #addressLine1=\"ngModel\" name=\"addressLine1\" [(ngModel)]=\"shipping.addressLine1\" type=\"text\" class=\"form-control\" placeholder=\"Ej: Avda El Morro 1234\" required>\n      <div class=\"alert alert-danger\" *ngIf=\"addressLine1.touched && addressLine1.invalid\">\n        <div *ngIf=\"addressLine1.errors.required\">Su direccion es obligatoria.</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"\">Depto o casa (opcional)</label>\n      <input #addressLine2=\"ngModel\" name=\"addressLine2\" [(ngModel)]=\"shipping.addressLine2\" type=\"text\" class=\"form-control\" placeholder=\"Ej: Depto 48\" required>\n\n      </div>\n\n    <div class=\"form-group\">\n      <label for=\"\">Ciudad</label>\n      <input #city=\"ngModel\" name=\"city\" [(ngModel)]=\"shipping.city\" type=\"text\" placeholder=\"Ej: Santiago\"class=\"form-control\" required>\n      <div class=\"alert alert-danger\" *ngIf=\"city.touched && city.invalid\">\n        <div *ngIf=\"city.errors.required\">La ciudad de despacho es obligatoria.</div>\n      </div>\n    </div>\n    <br>\n\n    <button\n      [disabled]=\"!f.valid\"\n      (click)=\"placeOrder()\"\n      class=\"btn btn-primary btn-block\">Realizar orden {{cart.totalPrice}}</button>\n  </form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shopping-cart-summary/shopping-cart-summary.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shopping-cart-summary/shopping-cart-summary.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1><div class=\"card\" >\n  <div class=\"card-body\">\n    <h3 class=\"card-title\">Resumen</h3>\n    <p class=\"card-text\">Tiene {{ cart.totalItemsCount }} artículos en su carro de compras</p>\n    <ul class=\"list-group list-group-flush\">\n      <li *ngFor=\"let item of cart.items\" class=\"list-group-item\">\n           {{ item.quantity }} x {{item.title}}\n           <div class=\"float-right\">\n             {{item.totalPrice | currency:'CLP':'symbol-narrow'}}\n           </div>\n      </li>\n      <li class=\"list-group-item font-weight-bold\">\n        Total\n        <div class=\"float-right\">\n          {{cart.totalPrice | currency:'CLP':'symbol-narrow'}}\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shopping-cart/shopping-cart.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shopping-cart/shopping-cart.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n\n<h1>Carro de compras</h1>\n<br>\n<div class=\"container\">\n\n<div class=\"card\" *ngIf=\"cart$ | async as cart\" style=\"width: 100%;\">\n  <div class=\"card-body\">\n\n    <p>\n      Tienes {{ cart.totalItemsCount }} un producto en tu carro de compras.\n      <button *ngIf=\"cart.items.length\" (click)=\"clearCart()\" class=\" btn btn-light btn-sm\"><i class=\"fas fa-trash\"></i>\n\nLimpiar carro</button>\n\n    </p>\n</div>\n\n\n<table class=\"table\" style=\"width: auto%;\">\n  <thead>\n    <tr>\n      <th scope=\"col-3\">Imagen</th>\n      <th scope=\"col-3\">Producto</th>\n      <th scope=\"col-3\">Cantidad</th>\n      <th scope=\"col-3\">Precio</th>\n    </tr>\n  </thead>\n  <tbody>\n\n\n     <tr scope=\"col\" *ngFor=\"let item of cart.items\">\n      <td scope=\"col\"><img src=\"{{ item.imageUrl }}\" class=\"img-thumbnail\"></td>\n      <td scope=\"col\">{{ item.title }}</td>\n      <td >\n                  <product-quantity\n                      [product]=\"item\"\n                      [shopping-cart]=\"cart\"></product-quantity>\n              </td>\n\n      <td scope=\"col\">{{ item.totalPrice | currency:'CLP':'symbol-narrow' }}</td>\n    </tr>\n\n    <tr>\n              <th></th>\n              <th></th>\n              <th>TOTAL:</th>\n              <th  class=\"text-right\">{{ cart.totalPrice | currency:'CLP':'symbol-narrow' }}</th>\n          </tr>\n\n          <tr>\n            <th colspan=\"4\">\n              <a *ngIf=\"cart.items.length\" routerLink=\"/check-out\" class=\"btn btn-primary btn-block\">Finalizar compra</a>\n            </th>\n          </tr>\n\n            </tbody>\n          </table>\n\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin-auth-guard.service.ts":
/*!*********************************************!*\
  !*** ./src/app/admin-auth-guard.service.ts ***!
  \*********************************************/
/*! exports provided: AdminAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthGuard", function() { return AdminAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var AdminAuthGuard = /** @class */ (function () {
    function AdminAuthGuard(auth, userService) {
        this.auth = auth;
        this.userService = userService;
    }
    AdminAuthGuard.prototype.canActivate = function () {
        return this.auth.appUser$
            .map(function (appUser) { return appUser.isAdmin; });
    };
    AdminAuthGuard.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }
    ]; };
    AdminAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
    ], AdminAuthGuard);
    return AdminAuthGuard;
}());



/***/ }),

/***/ "./src/app/admin/admin-orders/admin-orders.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/admin-orders/admin-orders.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLW9yZGVycy9hZG1pbi1vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/admin-orders/admin-orders.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-orders/admin-orders.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrdersComponent", function() { return AdminOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminOrdersComponent = /** @class */ (function () {
    function AdminOrdersComponent() {
    }
    AdminOrdersComponent.prototype.ngOnInit = function () {
    };
    AdminOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-orders',
            template: __webpack_require__(/*! raw-loader!./admin-orders.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin-orders/admin-orders.component.html"),
            styles: [__webpack_require__(/*! ./admin-orders.component.css */ "./src/app/admin/admin-orders/admin-orders.component.css")]
        })
    ], AdminOrdersComponent);
    return AdminOrdersComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-products/admin-products.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/admin/admin-products/admin-products.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXByb2R1Y3RzL2FkbWluLXByb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin-products/admin-products.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-products/admin-products.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductsComponent", function() { return AdminProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminProductsComponent = /** @class */ (function () {
    function AdminProductsComponent() {
    }
    AdminProductsComponent.prototype.ngOnInit = function () {
    };
    AdminProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-products',
            template: __webpack_require__(/*! raw-loader!./admin-products.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin-products/admin-products.component.html"),
            styles: [__webpack_require__(/*! ./admin-products.component.css */ "./src/app/admin/admin-products/admin-products.component.css")]
        })
    ], AdminProductsComponent);
    return AdminProductsComponent;
}());



/***/ }),

/***/ "./src/app/admin/product-form/product-form.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/product-form/product-form.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Byb2R1Y3QtZm9ybS9wcm9kdWN0LWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/product-form/product-form.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/product-form/product-form.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function() { return ProductFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductFormComponent = /** @class */ (function () {
    function ProductFormComponent() {
    }
    ProductFormComponent.prototype.ngOnInit = function () {
    };
    ProductFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-form',
            template: __webpack_require__(/*! raw-loader!./product-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/product-form/product-form.component.html"),
            styles: [__webpack_require__(/*! ./product-form.component.css */ "./src/app/admin/product-form/product-form.component.css")]
        })
    ], ProductFormComponent);
    return ProductFormComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(userService, auth, router) {
        this.userService = userService;
        this.auth = auth;
        this.router = router;
        auth.user$.subscribe(function (user) {
            if (!user)
                return;
            userService.save(user);
            var returnUrl = localStorage.getItem('returnUrl');
            if (!returnUrl)
                return;
            localStorage.removeItem('returnUrl');
            router.navigateByUrl(returnUrl);
        });
    }
    AppComponent.ctorParameters = function () { return [
        { type: _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.service */ "./src/app/product.service.ts");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category.service */ "./src/app/category.service.ts");
/* harmony import */ var _admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-auth-guard.service */ "./src/app/admin-auth-guard.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var angular5_data_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular5-data-table */ "./node_modules/angular5-data-table/esm5/angular5-data-table.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/admin-products/admin-products.component */ "./src/app/admin/admin-products/admin-products.component.ts");
/* harmony import */ var _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./my-orders/my-orders.component */ "./src/app/my-orders/my-orders.component.ts");
/* harmony import */ var _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./check-out/check-out.component */ "./src/app/check-out/check-out.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./order-success/order-success.component */ "./src/app/order-success/order-success.component.ts");
/* harmony import */ var _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/admin-orders/admin-orders.component */ "./src/app/admin/admin-orders/admin-orders.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admin/product-form/product-form.component */ "./src/app/admin/product-form/product-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _products_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./products/product-filter/product-filter.component */ "./src/app/products/product-filter/product-filter.component.ts");
/* harmony import */ var _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./product-card/product-card.component */ "./src/app/product-card/product-card.component.ts");
/* harmony import */ var _shopping_cart_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shopping-cart.service */ "./src/app/shopping-cart.service.ts");
/* harmony import */ var _product_quantity_product_quantity_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./product-quantity/product-quantity.component */ "./src/app/product-quantity/product-quantity.component.ts");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./order.service */ "./src/app/order.service.ts");
/* harmony import */ var _shopping_cart_summary_shopping_cart_summary_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./shopping-cart-summary/shopping-cart-summary.component */ "./src/app/shopping-cart-summary/shopping-cart-summary.component.ts");
/* harmony import */ var _shipping_form_shipping_form_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./shipping-form/shipping-form.component */ "./src/app/shipping-form/shipping-form.component.ts");
/* harmony import */ var _list_order_view_list_order_view_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./list-order-view/list-order-view.component */ "./src/app/list-order-view/list-order-view.component.ts");
/* harmony import */ var _order_view_order_view_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./order-view/order-view.component */ "./src/app/order-view/order-view.component.ts");







































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_24__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_25__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_16__["ProductsComponent"],
                _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_17__["ShoppingCartComponent"],
                _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_14__["CheckOutComponent"],
                _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_18__["OrderSuccessComponent"],
                _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_13__["MyOrdersComponent"],
                _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_12__["AdminProductsComponent"],
                _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_19__["AdminOrdersComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                _admin_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_28__["ProductFormComponent"],
                _products_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_30__["ProductFilterComponent"],
                _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_31__["ProductCardComponent"],
                _product_quantity_product_quantity_component__WEBPACK_IMPORTED_MODULE_33__["ProductQuantityComponent"],
                _shopping_cart_summary_shopping_cart_summary_component__WEBPACK_IMPORTED_MODULE_35__["ShoppingCartSummaryComponent"],
                _shipping_form_shipping_form_component__WEBPACK_IMPORTED_MODULE_36__["ShippingFormComponent"],
                _list_order_view_list_order_view_component__WEBPACK_IMPORTED_MODULE_37__["ListOrderViewComponent"],
                _order_view_order_view_component__WEBPACK_IMPORTED_MODULE_38__["OrderViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["BrowserModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_26__["environment"].firebaseConfig),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_9__["AngularFireDatabaseModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_11__["CustomFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbModule"].forRoot(),
                angular5_data_table__WEBPACK_IMPORTED_MODULE_7__["DataTableModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterModule"].forRoot([
                    { path: '', component: _products_products_component__WEBPACK_IMPORTED_MODULE_16__["ProductsComponent"] },
                    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_16__["ProductsComponent"] },
                    { path: 'shopping-cart', component: _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_17__["ShoppingCartComponent"] },
                    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"] },
                    { path: 'check-out', component: _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_14__["CheckOutComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
                    { path: 'my/orders', component: _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_13__["MyOrdersComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
                    { path: 'order-details/:id', component: _order_view_order_view_component__WEBPACK_IMPORTED_MODULE_38__["OrderViewComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
                    { path: 'order-success/:id', component: _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_18__["OrderSuccessComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
                    {
                        path: 'admin/products/new',
                        component: _admin_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_28__["ProductFormComponent"],
                        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"], _admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"]]
                    },
                    {
                        path: 'admin/products/:id',
                        component: _admin_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_28__["ProductFormComponent"],
                        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"], _admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"]]
                    },
                    {
                        path: 'admin/products',
                        component: _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_12__["AdminProductsComponent"],
                        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"], _admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"]]
                    },
                    { path: 'admin/orders',
                        component: _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_19__["AdminOrdersComponent"],
                        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"], _admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"]]
                    }
                ])
            ],
            providers: [
                _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
                _auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"],
                _admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"],
                _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
                _category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
                _product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
                _shopping_cart_service__WEBPACK_IMPORTED_MODULE_32__["ShoppingCartService"],
                _order_service__WEBPACK_IMPORTED_MODULE_34__["OrderService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_25__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.auth.user$.map(function (user) {
            if (user)
                return true;
            _this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
            return false;
        });
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/firebase-browser.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");









var AuthService = /** @class */ (function () {
    function AuthService(afAuth, route, userService) {
        this.afAuth = afAuth;
        this.route = route;
        this.userService = userService;
        this.user$ = afAuth.authState;
    }
    AuthService.prototype.login = function () {
        var returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        localStorage.setItem('returnUrl', returnUrl);
        this.afAuth.auth.signInWithRedirect(new firebase__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.signInWithFacebook = function () {
        return this.afAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_4__["auth"].FacebookAuthProvider());
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    Object.defineProperty(AuthService.prototype, "appUser$", {
        get: function () {
            var _this = this;
            return this.user$
                .switchMap(function (user) {
                if (user)
                    return _this.userService.get(user.uid);
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__["Observable"].of(null);
            });
        },
        enumerable: true,
        configurable: true
    });
    AuthService.ctorParameters = function () { return [
        { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/category.service.ts":
/*!*************************************!*\
  !*** ./src/app/category.service.ts ***!
  \*************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var CategoryService = /** @class */ (function () {
    function CategoryService(db) {
        this.db = db;
    }
    CategoryService.prototype.getAll = function () {
        return this.db.list('/categories', {
            query: {
                orderByChild: 'name'
            }
        });
    };
    CategoryService.ctorParameters = function () { return [
        { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] }
    ]; };
    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/check-out/check-out.component.css":
/*!***************************************************!*\
  !*** ./src/app/check-out/check-out.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-text{\n  font-size: 14px;\n}\n\n.list-group-item{\n\nfont-size: 12px;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2stb3V0L2NoZWNrLW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTs7QUFFQSxlQUFlOztBQUVmIiwiZmlsZSI6InNyYy9hcHAvY2hlY2stb3V0L2NoZWNrLW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtdGV4dHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubGlzdC1ncm91cC1pdGVte1xuXG5mb250LXNpemU6IDEycHg7XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/check-out/check-out.component.ts":
/*!**************************************************!*\
  !*** ./src/app/check-out/check-out.component.ts ***!
  \**************************************************/
/*! exports provided: CheckOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutComponent", function() { return CheckOutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shopping-cart.service */ "./src/app/shopping-cart.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var CheckOutComponent = /** @class */ (function () {
    function CheckOutComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }
    CheckOutComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.cart$ = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckOutComponent.ctorParameters = function () { return [
        { type: _shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"] }
    ]; };
    CheckOutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-check-out',
            template: __webpack_require__(/*! raw-loader!./check-out.component.html */ "./node_modules/raw-loader/index.js!./src/app/check-out/check-out.component.html"),
            styles: [__webpack_require__(/*! ./check-out.component.css */ "./src/app/check-out/check-out.component.css")]
        })
    ], CheckOutComponent);
    return CheckOutComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/list-order-view/list-order-view.component.css":
/*!***************************************************************!*\
  !*** ./src/app/list-order-view/list-order-view.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3Qtb3JkZXItdmlldy9saXN0LW9yZGVyLXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/list-order-view/list-order-view.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/list-order-view/list-order-view.component.ts ***!
  \**************************************************************/
/*! exports provided: ListOrderViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOrderViewComponent", function() { return ListOrderViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListOrderViewComponent = /** @class */ (function () {
    function ListOrderViewComponent() {
    }
    ListOrderViewComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('order$')
    ], ListOrderViewComponent.prototype, "order$", void 0);
    ListOrderViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'list-order-view',
            template: __webpack_require__(/*! raw-loader!./list-order-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/list-order-view/list-order-view.component.html"),
            styles: [__webpack_require__(/*! ./list-order-view.component.css */ "./src/app/list-order-view/list-order-view.component.css")]
        })
    ], ListOrderViewComponent);
    return ListOrderViewComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Container Border */\n.container {\n    margin-top: 50px;\n    margin-bottom: 200px;\n    padding-top: 100px;\n    padding-bottom: 100px;\n\n    display: -webkit-box;\n\n    display: flex;\n    border: 0.1px solid #F0F0F0;\n\n}\nh3{\n  padding-top: 50px;\n  text-align: center;\n\n\n}\n#google{\n  margin-top: 50px;\n  text-align: center;\n  background-color: #ea4335;\n  border: 0;\n  padding: 6px 21px;\n\n\n}\n#fb{\n  margin-top: 50px;\n  text-align: center;\n  background-color: #1775e8;\n  border: 0;\n\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQkFBcUI7QUFDckI7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixxQkFBcUI7O0lBRXJCLG9CQUFhOztJQUFiLGFBQWE7SUFDYiwyQkFBMkI7O0FBRS9CO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCOzs7QUFHcEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxpQkFBaUI7OztBQUduQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsU0FBUzs7O0FBR1giLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29udGFpbmVyIEJvcmRlciAqL1xuLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMDBweDtcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXI6IDAuMXB4IHNvbGlkICNGMEYwRjA7XG5cbn1cblxuaDN7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cblxufVxuXG4jZ29vZ2xle1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTQzMzU7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogNnB4IDIxcHg7XG5cblxufVxuXG4jZmJ7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3NzVlODtcbiAgYm9yZGVyOiAwO1xuXG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.login = function () {
        this.authService.login();
    };
    LoginComponent.prototype.signInWithFacebook = function () {
        var _this = this;
        this.authService.signInWithFacebook()
            .then(function (res) {
            _this.router.navigate(['products']);
        })
            .catch(function (err) { return console.log(err); });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/order.ts":
/*!*********************************!*\
  !*** ./src/app/models/order.ts ***!
  \*********************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony import */ var _shopping_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopping-cart */ "./src/app/models/shopping-cart.ts");

var Order = /** @class */ (function () {
    function Order(userId, shipping, shoppingCart, totalSale) {
        this.userId = userId;
        this.shipping = shipping;
        this.totalSale = totalSale;
        this.datePlaced = new Date().getTime();
        this.items = shoppingCart.items.map(function (i) {
            return {
                product: {
                    title: i.title,
                    imageUrl: i.imageUrl,
                    price: i.price,
                },
                quantity: i.quantity,
                totalPrice: i.totalPrice
            };
        });
    }
    Order.ctorParameters = function () { return [
        { type: String },
        { type: undefined },
        { type: _shopping_cart__WEBPACK_IMPORTED_MODULE_0__["ShoppingCart"] },
        { type: undefined }
    ]; };
    return Order;
}());



/***/ }),

/***/ "./src/app/models/shopping-cart-item.ts":
/*!**********************************************!*\
  !*** ./src/app/models/shopping-cart-item.ts ***!
  \**********************************************/
/*! exports provided: ShoppingCartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartItem", function() { return ShoppingCartItem; });
var ShoppingCartItem = /** @class */ (function () {
    function ShoppingCartItem(init) {
        Object.assign(this, init);
    }
    Object.defineProperty(ShoppingCartItem.prototype, "totalPrice", {
        get: function () { return this.price * this.quantity; },
        enumerable: true,
        configurable: true
    });
    ShoppingCartItem.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return ShoppingCartItem;
}());



/***/ }),

/***/ "./src/app/models/shopping-cart.ts":
/*!*****************************************!*\
  !*** ./src/app/models/shopping-cart.ts ***!
  \*****************************************/
/*! exports provided: ShoppingCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCart", function() { return ShoppingCart; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shopping_cart_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-cart-item */ "./src/app/models/shopping-cart-item.ts");


var ShoppingCart = /** @class */ (function () {
    function ShoppingCart(itemsMap) {
        this.itemsMap = itemsMap;
        this.items = [];
        this.itemsMap = itemsMap || {};
        for (var productId in itemsMap) {
            var item = itemsMap[productId];
            this.items.push(new _shopping_cart_item__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartItem"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { $key: productId })));
        }
    }
    ShoppingCart.prototype.getQuantity = function (product) {
        var item = this.itemsMap[product.$key];
        return item ? item.quantity : 0;
    };
    Object.defineProperty(ShoppingCart.prototype, "totalPrice", {
        get: function () {
            var sum = 0;
            for (var productId in this.items)
                sum += this.items[productId].totalPrice;
            return sum;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShoppingCart.prototype, "totalItemsCount", {
        get: function () {
            var count = 0;
            for (var productId in this.itemsMap)
                count += this.itemsMap[productId].quantity;
            return count;
        },
        enumerable: true,
        configurable: true
    });
    ShoppingCart.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return ShoppingCart;
}());



/***/ }),

/***/ "./src/app/my-orders/my-orders.component.css":
/*!***************************************************!*\
  !*** ./src/app/my-orders/my-orders.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LW9yZGVycy9teS1vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/my-orders/my-orders.component.ts":
/*!**************************************************!*\
  !*** ./src/app/my-orders/my-orders.component.ts ***!
  \**************************************************/
/*! exports provided: MyOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersComponent", function() { return MyOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../order.service */ "./src/app/order.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var MyOrdersComponent = /** @class */ (function () {
    function MyOrdersComponent(auth, orderService) {
        this.auth = auth;
        this.orderService = orderService;
    }
    MyOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.order$ = this.auth.user$
            .switchMap(function (user) { return _this.orderService.getOrdersByUser(user.uid); });
    };
    MyOrdersComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
        { type: _order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"] }
    ]; };
    MyOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-my-orders',
            template: __webpack_require__(/*! raw-loader!./my-orders.component.html */ "./node_modules/raw-loader/index.js!./src/app/my-orders/my-orders.component.html"),
            styles: [__webpack_require__(/*! ./my-orders.component.css */ "./src/app/my-orders/my-orders.component.css")]
        })
    ], MyOrdersComponent);
    return MyOrdersComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shopping-cart.service */ "./src/app/shopping-cart.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth, shoppingCartService, router) {
        this.auth = auth;
        this.shoppingCartService = shoppingCartService;
        this.router = router;
    }
    NavbarComponent.prototype.logout = function () {
        this.auth.logout();
        this.router.navigate(['products']);
    };
    NavbarComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.auth.appUser$.subscribe(function (appUser) { return _this.appUser = appUser; });
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.cart$ = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/order-success/order-success.component.css":
/*!***********************************************************!*\
  !*** ./src/app/order-success/order-success.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLXN1Y2Nlc3Mvb3JkZXItc3VjY2Vzcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/order-success/order-success.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/order-success/order-success.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSuccessComponent", function() { return OrderSuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderSuccessComponent = /** @class */ (function () {
    function OrderSuccessComponent() {
    }
    OrderSuccessComponent.prototype.ngOnInit = function () {
    };
    OrderSuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-success',
            template: __webpack_require__(/*! raw-loader!./order-success.component.html */ "./node_modules/raw-loader/index.js!./src/app/order-success/order-success.component.html"),
            styles: [__webpack_require__(/*! ./order-success.component.css */ "./src/app/order-success/order-success.component.css")]
        })
    ], OrderSuccessComponent);
    return OrderSuccessComponent;
}());



/***/ }),

/***/ "./src/app/order-view/order-view.component.css":
/*!*****************************************************!*\
  !*** ./src/app/order-view/order-view.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLXZpZXcvb3JkZXItdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/order-view/order-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/order-view/order-view.component.ts ***!
  \****************************************************/
/*! exports provided: OrderViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderViewComponent", function() { return OrderViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../order.service */ "./src/app/order.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var OrderViewComponent = /** @class */ (function () {
    function OrderViewComponent(route, orderService) {
        this.route = route;
        this.orderService = orderService;
    }
    OrderViewComponent.prototype.ngOnInit = function () {
        this.orderId = this.route.snapshot.paramMap.get('id');
        this.order$ = this.orderService.getOrdersById(this.orderId);
    };
    OrderViewComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"] }
    ]; };
    OrderViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-order-view',
            template: __webpack_require__(/*! raw-loader!./order-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/order-view/order-view.component.html"),
            styles: [__webpack_require__(/*! ./order-view.component.css */ "./src/app/order-view/order-view.component.css")]
        })
    ], OrderViewComponent);
    return OrderViewComponent;
}());



/***/ }),

/***/ "./src/app/order.service.ts":
/*!**********************************!*\
  !*** ./src/app/order.service.ts ***!
  \**********************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-cart.service */ "./src/app/shopping-cart.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var OrderService = /** @class */ (function () {
    function OrderService(db, shoppingCartService) {
        this.db = db;
        this.shoppingCartService = shoppingCartService;
    }
    OrderService.prototype.placeOrder = function (order) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.list('/orders').push(order)];
                    case 1:
                        result = _a.sent();
                        this.shoppingCartService.clearCart();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    OrderService.prototype.getOrders = function () {
        return this.db.list('/orders');
    };
    OrderService.prototype.getOrdersById = function (orderId) {
        return this.db.object('/orders/' + orderId);
    };
    OrderService.prototype.getOrdersByUser = function (userId) {
        return this.db.list('/orders', {
            query: {
                orderByChild: 'userId',
                equalTo: userId
            }
        });
    };
    OrderService.ctorParameters = function () { return [
        { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
        { type: _shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"] }
    ]; };
    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/product-card/product-card.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-card/product-card.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtY2FyZC9wcm9kdWN0LWNhcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/product-card/product-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-card/product-card.component.ts ***!
  \********************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shopping-cart.service */ "./src/app/shopping-cart.service.ts");



var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent(cartService) {
        this.cartService = cartService;
    }
    ProductCardComponent.prototype.addToCart = function () {
        this.cartService.addToCart(this.product);
    };
    ProductCardComponent.ctorParameters = function () { return [
        { type: _shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('product')
    ], ProductCardComponent.prototype, "product", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('shopping-cart')
    ], ProductCardComponent.prototype, "shoppingCart", void 0);
    ProductCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'product-card',
            template: __webpack_require__(/*! raw-loader!./product-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/product-card/product-card.component.html"),
            styles: [__webpack_require__(/*! ./product-card.component.css */ "./src/app/product-card/product-card.component.css")]
        })
    ], ProductCardComponent);
    return ProductCardComponent;
}());



/***/ }),

/***/ "./src/app/product-quantity/product-quantity.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/product-quantity/product-quantity.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".number-input input[type=\"number\"] {\n-webkit-appearance: textfield;\n-moz-appearance: textfield;\nappearance: textfield;\n}\n\n.number-input input[type=number]::-webkit-inner-spin-button,\n.number-input input[type=number]::-webkit-outer-spin-button {\n-webkit-appearance: none;\n}\n\n.number-input {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.number-input button {\n-webkit-appearance: none;\nbackground-color: transparent;\nborder: none;\n-webkit-box-align: center;\n        align-items: center;\n-webkit-box-pack: center;\n        justify-content: center;\ncursor: pointer;\nmargin: 0;\nposition: relative;\n}\n\n.number-input button:before,\n.number-input button:after {\ndisplay: inline-block;\nposition: absolute;\ncontent: '';\nheight: 2px;\n-webkit-transform: translate(-50%, -50%);\n        transform: translate(-50%, -50%);\n}\n\n.number-input button.plus:after {\n-webkit-transform: translate(-50%, -50%) rotate(90deg);\n        transform: translate(-50%, -50%) rotate(90deg);\n}\n\n.number-input input[type=number] {\ntext-align: center;\n}\n\n.number-input.number-input {\nborder: 1px solid #ced4da;\nwidth: 07rem;\nborder-radius: .25rem;\n}\n\n.number-input.number-input button {\nwidth: 2.6rem;\nheight: .7rem;\n}\n\n.number-input.number-input button.minus {\npadding-left: 10px;\n}\n\n.number-input.number-input button:before,\n.number-input.number-input button:after {\nwidth: .7rem;\nbackground-color: #495057;\n}\n\n.number-input.number-input input[type=number] {\nmax-width: 4rem;\npadding: .5rem;\nborder: 1px solid #ced4da;\nborder-width: 0 1px;\nfont-size: 1rem;\nheight: 2rem;\ncolor: #495057;\n}\n\n@media not all and (min-resolution:.001dpcm) {\n@supports (-webkit-appearance: none) and (stroke-color:transparent) {\n\n.number-input.def-number-input.safari_only button:before,\n.number-input.def-number-input.safari_only button:after {\nmargin-top: -.3rem;\n}\n}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1xdWFudGl0eS9wcm9kdWN0LXF1YW50aXR5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSw2QkFBNkI7QUFDN0IsMEJBQTBCO0FBQzFCLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQSx3QkFBd0I7QUFDeEI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IseUJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4Qiw2QkFBNkI7QUFDN0IsWUFBWTtBQUNaLHlCQUFtQjtRQUFuQixtQkFBbUI7QUFDbkIsd0JBQXVCO1FBQXZCLHVCQUF1QjtBQUN2QixlQUFlO0FBQ2YsU0FBUztBQUNULGtCQUFrQjtBQUNsQjs7QUFFQTs7QUFFQSxxQkFBcUI7QUFDckIsa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWCxXQUFXO0FBQ1gsd0NBQWdDO1FBQWhDLGdDQUFnQztBQUNoQzs7QUFFQTtBQUNBLHNEQUE4QztRQUE5Qyw4Q0FBOEM7QUFDOUM7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekIsWUFBWTtBQUNaLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLGFBQWE7QUFDYixhQUFhO0FBQ2I7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7O0FBRUEsWUFBWTtBQUNaLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBLGVBQWU7QUFDZixjQUFjO0FBQ2QseUJBQXlCO0FBQ3pCLG1CQUFtQjtBQUNuQixlQUFlO0FBQ2YsWUFBWTtBQUNaLGNBQWM7QUFDZDs7QUFFQTtBQUNBOztBQUVBOztBQUVBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LXF1YW50aXR5L3Byb2R1Y3QtcXVhbnRpdHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5udW1iZXItaW5wdXQgaW5wdXRbdHlwZT1cIm51bWJlclwiXSB7XG4td2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbi1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuXG4ubnVtYmVyLWlucHV0IGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbi5udW1iZXItaW5wdXQgaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbi13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLm51bWJlci1pbnB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubnVtYmVyLWlucHV0IGJ1dHRvbiB7XG4td2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG5iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbmJvcmRlcjogbm9uZTtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmN1cnNvcjogcG9pbnRlcjtcbm1hcmdpbjogMDtcbnBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm51bWJlci1pbnB1dCBidXR0b246YmVmb3JlLFxuLm51bWJlci1pbnB1dCBidXR0b246YWZ0ZXIge1xuZGlzcGxheTogaW5saW5lLWJsb2NrO1xucG9zaXRpb246IGFic29sdXRlO1xuY29udGVudDogJyc7XG5oZWlnaHQ6IDJweDtcbnRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ubnVtYmVyLWlucHV0IGJ1dHRvbi5wbHVzOmFmdGVyIHtcbnRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg5MGRlZyk7XG59XG5cbi5udW1iZXItaW5wdXQgaW5wdXRbdHlwZT1udW1iZXJdIHtcbnRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm51bWJlci1pbnB1dC5udW1iZXItaW5wdXQge1xuYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbndpZHRoOiAwN3JlbTtcbmJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbn1cblxuLm51bWJlci1pbnB1dC5udW1iZXItaW5wdXQgYnV0dG9uIHtcbndpZHRoOiAyLjZyZW07XG5oZWlnaHQ6IC43cmVtO1xufVxuXG4ubnVtYmVyLWlucHV0Lm51bWJlci1pbnB1dCBidXR0b24ubWludXMge1xucGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4ubnVtYmVyLWlucHV0Lm51bWJlci1pbnB1dCBidXR0b246YmVmb3JlLFxuLm51bWJlci1pbnB1dC5udW1iZXItaW5wdXQgYnV0dG9uOmFmdGVyIHtcbndpZHRoOiAuN3JlbTtcbmJhY2tncm91bmQtY29sb3I6ICM0OTUwNTc7XG59XG5cbi5udW1iZXItaW5wdXQubnVtYmVyLWlucHV0IGlucHV0W3R5cGU9bnVtYmVyXSB7XG5tYXgtd2lkdGg6IDRyZW07XG5wYWRkaW5nOiAuNXJlbTtcbmJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG5ib3JkZXItd2lkdGg6IDAgMXB4O1xuZm9udC1zaXplOiAxcmVtO1xuaGVpZ2h0OiAycmVtO1xuY29sb3I6ICM0OTUwNTc7XG59XG5cbkBtZWRpYSBub3QgYWxsIGFuZCAobWluLXJlc29sdXRpb246LjAwMWRwY20pIHtcbkBzdXBwb3J0cyAoLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lKSBhbmQgKHN0cm9rZS1jb2xvcjp0cmFuc3BhcmVudCkge1xuXG4ubnVtYmVyLWlucHV0LmRlZi1udW1iZXItaW5wdXQuc2FmYXJpX29ubHkgYnV0dG9uOmJlZm9yZSxcbi5udW1iZXItaW5wdXQuZGVmLW51bWJlci1pbnB1dC5zYWZhcmlfb25seSBidXR0b246YWZ0ZXIge1xubWFyZ2luLXRvcDogLS4zcmVtO1xufVxufVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/product-quantity/product-quantity.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product-quantity/product-quantity.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductQuantityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductQuantityComponent", function() { return ProductQuantityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shopping-cart.service */ "./src/app/shopping-cart.service.ts");



var ProductQuantityComponent = /** @class */ (function () {
    function ProductQuantityComponent(cartService) {
        this.cartService = cartService;
    }
    ProductQuantityComponent.prototype.addToCart = function () {
        this.cartService.addToCart(this.product);
    };
    ProductQuantityComponent.prototype.removeFromCart = function () {
        this.cartService.removeFromCart(this.product);
    };
    ProductQuantityComponent.prototype.ngOnInit = function () {
    };
    ProductQuantityComponent.ctorParameters = function () { return [
        { type: _shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('product')
    ], ProductQuantityComponent.prototype, "product", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('shopping-cart')
    ], ProductQuantityComponent.prototype, "shoppingCart", void 0);
    ProductQuantityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'product-quantity',
            template: __webpack_require__(/*! raw-loader!./product-quantity.component.html */ "./node_modules/raw-loader/index.js!./src/app/product-quantity/product-quantity.component.html"),
            styles: [__webpack_require__(/*! ./product-quantity.component.css */ "./src/app/product-quantity/product-quantity.component.css")]
        })
    ], ProductQuantityComponent);
    return ProductQuantityComponent;
}());



/***/ }),

/***/ "./src/app/product.service.ts":
/*!************************************!*\
  !*** ./src/app/product.service.ts ***!
  \************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ProductService = /** @class */ (function () {
    function ProductService(db) {
        this.db = db;
    }
    ProductService.prototype.create = function (product) {
        return this.db.list('/products').push(product);
    };
    ProductService.prototype.getAll = function () {
        return this.db.list('/products');
    };
    ProductService.prototype.get = function (productId) {
        return this.db.object('/products/' + productId);
    };
    ProductService.prototype.update = function (productId, product) {
        return this.db.object('/products/' + productId).update(product);
    };
    ProductService.prototype.delete = function (productId) {
        return this.db.object('/products/' + productId).remove();
    };
    ProductService.ctorParameters = function () { return [
        { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] }
    ]; };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/products/product-filter/product-filter.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/products/product-filter/product-filter.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".block {\n  display: block;\n  width: 100%;\n  border: none;\n  background-color: #4CAF50;\n  padding: 14px 28px;\n  font-size: 16px;\n  cursor: pointer;\n  text-align: center;\n}: center;\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1maWx0ZXIvcHJvZHVjdC1maWx0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7QUFDcEIsR0FBRyxNQUFNIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1maWx0ZXIvcHJvZHVjdC1maWx0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICBwYWRkaW5nOiAxNHB4IDI4cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59OiBjZW50ZXI7XG4iXX0= */"

/***/ }),

/***/ "./src/app/products/product-filter/product-filter.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/products/product-filter/product-filter.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProductFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilterComponent", function() { return ProductFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../category.service */ "./src/app/category.service.ts");



var ProductFilterComponent = /** @class */ (function () {
    function ProductFilterComponent(categoryService) {
        this.categories$ = categoryService.getAll();
    }
    ProductFilterComponent.prototype.ngOnInit = function () {
    };
    ProductFilterComponent.ctorParameters = function () { return [
        { type: _category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('category')
    ], ProductFilterComponent.prototype, "category", void 0);
    ProductFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'product-filter',
            template: __webpack_require__(/*! raw-loader!./product-filter.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/product-filter/product-filter.component.html"),
            styles: [__webpack_require__(/*! ./product-filter.component.css */ "./src/app/products/product-filter/product-filter.component.css")]
        })
    ], ProductFilterComponent);
    return ProductFilterComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shopping-cart.service */ "./src/app/shopping-cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");






var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(route, productService, shoppingCartService) {
        this.route = route;
        this.productService = productService;
        this.shoppingCartService = shoppingCartService;
        this.products = [];
        this.filteredProducts = [];
    }
    ProductsComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.cart$ = _b.sent();
                        this.populateProducts();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductsComponent.prototype.populateProducts = function () {
        var _this = this;
        this.productService
            .getAll()
            .switchMap(function (products) {
            _this.products = products;
            return _this.route.queryParamMap;
        })
            .subscribe(function (params) {
            _this.category = params.get('category');
            _this.applyFilter();
        });
    };
    ProductsComponent.prototype.applyFilter = function () {
        var _this = this;
        this.filteredProducts = (this.category) ?
            this.products.filter(function (p) { return p.category === _this.category; }) :
            this.products;
    };
    ProductsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
        { type: _shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"] }
    ]; };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
        })
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/shipping-form/shipping-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shipping-form/shipping-form.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoaXBwaW5nLWZvcm0vc2hpcHBpbmctZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shipping-form/shipping-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shipping-form/shipping-form.component.ts ***!
  \**********************************************************/
/*! exports provided: ShippingFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingFormComponent", function() { return ShippingFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../order.service */ "./src/app/order.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/order */ "./src/app/models/order.ts");






var ShippingFormComponent = /** @class */ (function () {
    function ShippingFormComponent(router, authService, orderService) {
        this.router = router;
        this.authService = authService;
        this.orderService = orderService;
        this.shipping = {};
    }
    ShippingFormComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.Usersubscription = this.authService.user$.subscribe(function (user) { return _this.userId = user.uid; });
                return [2 /*return*/];
            });
        });
    };
    ShippingFormComponent.prototype.ngOnDestroy = function () {
        this.Usersubscription.unsubscribe();
    };
    ShippingFormComponent.prototype.placeOrder = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var total, order, result, totalValue;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        total = this.cart.totalPrice;
                        order = new _models_order__WEBPACK_IMPORTED_MODULE_5__["Order"](this.userId, this.shipping, this.cart, this.cart.totalPrice);
                        return [4 /*yield*/, this.orderService.placeOrder(order)];
                    case 1:
                        result = _a.sent();
                        totalValue = JSON.stringify(total);
                        console.log(totalValue);
                        window.location.href = 'http://cablesyruidos.com/pg/examples/example_create_mail.php?totalSale=' + totalValue;
                        return [2 /*return*/];
                }
            });
        });
    };
    ShippingFormComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
        { type: _order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])('cart')
    ], ShippingFormComponent.prototype, "cart", void 0);
    ShippingFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'shipping-form',
            template: __webpack_require__(/*! raw-loader!./shipping-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/shipping-form/shipping-form.component.html"),
            styles: [__webpack_require__(/*! ./shipping-form.component.css */ "./src/app/shipping-form/shipping-form.component.css")]
        })
    ], ShippingFormComponent);
    return ShippingFormComponent;
}());



/***/ }),

/***/ "./src/app/shopping-cart-summary/shopping-cart-summary.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/shopping-cart-summary/shopping-cart-summary.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-text{\n  font-size: 14px;\n}\n\n.list-group-item{\n\nfont-size: 12px;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmctY2FydC1zdW1tYXJ5L3Nob3BwaW5nLWNhcnQtc3VtbWFyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTs7QUFFQSxlQUFlOztBQUVmIiwiZmlsZSI6InNyYy9hcHAvc2hvcHBpbmctY2FydC1zdW1tYXJ5L3Nob3BwaW5nLWNhcnQtc3VtbWFyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtdGV4dHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubGlzdC1ncm91cC1pdGVte1xuXG5mb250LXNpemU6IDEycHg7XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shopping-cart-summary/shopping-cart-summary.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shopping-cart-summary/shopping-cart-summary.component.ts ***!
  \**************************************************************************/
/*! exports provided: ShoppingCartSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartSummaryComponent", function() { return ShoppingCartSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShoppingCartSummaryComponent = /** @class */ (function () {
    function ShoppingCartSummaryComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cart')
    ], ShoppingCartSummaryComponent.prototype, "cart", void 0);
    ShoppingCartSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'shopping-cart-summary',
            template: __webpack_require__(/*! raw-loader!./shopping-cart-summary.component.html */ "./node_modules/raw-loader/index.js!./src/app/shopping-cart-summary/shopping-cart-summary.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart-summary.component.css */ "./src/app/shopping-cart-summary/shopping-cart-summary.component.css")]
        })
    ], ShoppingCartSummaryComponent);
    return ShoppingCartSummaryComponent;
}());



/***/ }),

/***/ "./src/app/shopping-cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/shopping-cart.service.ts ***!
  \******************************************/
/*! exports provided: ShoppingCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartService", function() { return ShoppingCartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _models_shopping_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/shopping-cart */ "./src/app/models/shopping-cart.ts");






var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService(db) {
        this.db = db;
    }
    ShoppingCartService.prototype.getCart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cartId;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        return [2 /*return*/, this.db.object('/shopping-carts/' + cartId)
                                .map(function (x) { return new _models_shopping_cart__WEBPACK_IMPORTED_MODULE_5__["ShoppingCart"](x.items); })];
                }
            });
        });
    };
    ShoppingCartService.prototype.addToCart = function (product) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.updateItem(product, 1);
                return [2 /*return*/];
            });
        });
    };
    ShoppingCartService.prototype.removeFromCart = function (product) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.updateItem(product, -1);
                return [2 /*return*/];
            });
        });
    };
    ShoppingCartService.prototype.clearCart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cartId;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        this.db.object('/shopping-carts/' + cartId + '/items').remove();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartService.prototype.create = function () {
        return this.db.list('/shopping-carts').push({
            dateCreated: new Date().getTime()
        });
    };
    ShoppingCartService.prototype.getItem = function (cartId, productId) {
        return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
    };
    ShoppingCartService.prototype.getOrCreateCartId = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cartId, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cartId = localStorage.getItem('cartId');
                        if (cartId)
                            return [2 /*return*/, cartId];
                        return [4 /*yield*/, this.create()];
                    case 1:
                        result = _a.sent();
                        localStorage.setItem('cartId', result.key);
                        return [2 /*return*/, result.key];
                }
            });
        });
    };
    ShoppingCartService.prototype.updateItem = function (product, change) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cartId, item$;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        item$ = this.getItem(cartId, product.$key);
                        item$.take(1).subscribe(function (item) {
                            var quantity = (item.quantity || 0) + change;
                            if (quantity === 0)
                                item$.remove();
                            else
                                item$.update({
                                    title: product.title,
                                    imageUrl: product.imageUrl,
                                    price: product.price,
                                    quantity: quantity
                                });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartService.ctorParameters = function () { return [
        { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] }
    ]; };
    ShoppingCartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], ShoppingCartService);
    return ShoppingCartService;
}());



/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-thumbnail{\n    width: 80px;\n\n    height: 60px;\n    overflow: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXOztJQUVYLFlBQVk7SUFDWixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXRodW1ibmFpbHtcbiAgICB3aWR0aDogODBweDtcblxuICAgIGhlaWdodDogNjBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shopping-cart.service */ "./src/app/shopping-cart.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.cart$ = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartComponent.prototype.clearCart = function () {
        this.shoppingCartService.clearCart();
    };
    ShoppingCartComponent.ctorParameters = function () { return [
        { type: _shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"] }
    ]; };
    ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(/*! raw-loader!./shopping-cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/shopping-cart/shopping-cart.component.css")]
        })
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");



var UserService = /** @class */ (function () {
    function UserService(db) {
        this.db = db;
    }
    UserService.prototype.save = function (user) {
        this.db.object('/users/' + user.uid).update({
            name: user.displayName,
            email: user.email
        });
    };
    UserService.prototype.get = function (uid) {
        return this.db.object('/users/' + uid);
    };
    UserService.ctorParameters = function () { return [
        { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyC_OHRzB2ekYFsPCwIR-17ysCw1Tg9GjcA",
        authDomain: "claseseptiembre-74980.firebaseapp.com",
        databaseURL: "https://claseseptiembre-74980.firebaseio.com",
        projectId: "claseseptiembre-74980",
        storageBucket: "claseseptiembre-74980.appspot.com",
        messagingSenderId: "144645579343",
        appId: "1:144645579343:web:2c28d4fabdfe84fe77403a"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hacking/udd/carro15/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map