import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { RouterModule } from '@angular/router';


const components = [
  HeaderMenuComponent,
  SideMenuComponent
];

const modules = [
  CommonModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  RouterModule
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [...modules]
})
export class ComponentsModule { }
