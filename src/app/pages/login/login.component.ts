import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/auth.service';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public hidePassword = true;
  public emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  public passwordFormControl = new FormControl('', [Validators.required]);

  constructor(
    private _authService: AuthService,
    private _route: Router
  ) { }

  ngOnInit(): void {
  }

  public loginButtonHandler() {
    this._authService.login({email: this.emailFormControl.value, password: this.passwordFormControl.value}).pipe(
      tap(x => {
        let token = x;
        this._authService.startSession(token);
        this._route.navigate(['modules']);
      }),
      catchError(x => of(x))
    ).subscribe(x => console.log(x));
  }

}
