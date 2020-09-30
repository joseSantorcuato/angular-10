import { UserService } from './user.service';
import { AppUser } from './models/app-user';
import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/Observable/of';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  user$: Observable<firebase.User>;

  constructor(
    private userService: UserService,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute
  ) {
    this.user$ = afAuth.authState;
    console.log(this.user$);
   }

  login() {

    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  

  logout() {
    this.afAuth.auth.signOut();
  }



  get appUser$(): Observable<AppUser> {
    return this.user$
      .switchMap( user => {
        if (user) {
          console.log(user);

          return this.userService.get(user.uid)
        };
        return Observable.of(null);
      });
  }
}
