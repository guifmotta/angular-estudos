import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    CustomerRoutingModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class CustomerModule { }
