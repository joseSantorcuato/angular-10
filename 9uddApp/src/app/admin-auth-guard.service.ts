import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable({
 providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

 constructor(private auth: AuthService, private userService: UserService) { }

 // switchMap is to switch to new Observable
 canActivate(): Observable<boolean> {
   return this.auth.appUser$
   .map(appUser => appUser.isAdmin);
 }

}
