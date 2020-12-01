import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { Router } from "@angular/router";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {
  }

  login() {

    this.authService.login();
  }

  signInWithFacebook() {
      this.authService.signInWithFacebook()
      .then((res) => {
          this.router.navigate(['products'])
        })
      .catch((err) => console.log(err));

    }


}
