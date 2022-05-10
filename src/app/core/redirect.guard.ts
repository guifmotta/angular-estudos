import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanLoad {
  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  canLoad(): boolean {
    if( this._authService.isAuthenticated() ) {
      this._router.navigate(['modules'])
      return false;
    }
    return true;
  }
}
