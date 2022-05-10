import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { AuthService } from '@core/auth.service';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: AuthService.getToken
      }
    })
  ],
  providers: [
    JwtHelperService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
