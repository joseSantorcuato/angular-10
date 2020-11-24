import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/Map';
import { Observable } from 'rxjs/Observable';
import { map, switchMap } from 'rxjs/operators'



@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private auth : AuthService, private userService :UserService) { }

  canActivate(): Observable<boolean> {
    return this.auth.user$.pipe(
      switchMap(user => this.userService.get(user.uid)),
      map (appUser => appUser.isAdmin)
    )
  }
}
