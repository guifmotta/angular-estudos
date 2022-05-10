import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Login } from '@interfaces/login';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    // private _http: HttpClient,
    private _router: Router,
    private _jwtHelper: JwtHelperService
  ) { }

  /**
   * Método que retorna o token JWT simulando retorno de endpoint de autenticação
   * Token válido até 31/12/2099 23:59:59
   * @param {Login} data
   * @returns {Observable<string>} Retorna um observable com token JWT
   */
  public login(data: Login): Observable<string> {
    if( data.email == 'teste@email.com' && data.password == '123456')
      return of('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6Ikd1aWxoZXJtZSBNb3R0YSIsImlhdCI6NDEwMjQ1NTU5OX0.xINbNR96czBamEFt2_qgMY0SfnUOFKDQb0u9QeCQInI');
    else
      return throwError(() => 'Login inválido!');

      // return this._http.post('/api/login', data);
  }

  public static getToken(): string {
    return localStorage.getItem('token') ?? '';
  }

  public isAuthenticated(): boolean {
    const token = AuthService.getToken();
    const dataUser = this._jwtHelper.decodeToken(token);
    if (token) {
      return !this._jwtHelper.isTokenExpired(token);
    }
    return false;
  }

  public logout() {
    localStorage.clear();
    this._router.navigate(['/']);
  }

  public isLoggedIn() {
    if (this.isAuthenticated()) {
      this._router.navigate(['/modules']);
    }
  }

  public startSession(token: string) {
    localStorage.setItem('token', token);
  }
}
