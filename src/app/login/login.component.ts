import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  login() {
    console.log('USERNAME', this.username);
    console.log('PASSWORD', this.password);
    if (this.password.length > 0 && this.username.length > 0) {
      // TODO login http
    } else {
      this._snackBar.open('Favor de ingresar usuario y password', 'Ok', {
        duration: 3000
      });
    }
  }
}
