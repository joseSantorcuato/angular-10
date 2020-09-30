import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  //if user is login it return true else false and navigate to login
  /*
  * We use map instead of subcscribe b/c we want to return an obeservable<boolean> instead of boolean
  */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.user$
      .map(user => {
        if(user) return true;

        // this.router.navigate(<navigation>, <navigation-extras>);
        this.router.navigate(
          ['/login'],
          { queryParams: { returnUrl: state.url } }
        );
        // RESULT: http://localhost:4200/login?returnUrl=%2Fcheck-out
        return false;
    });
  }
}
