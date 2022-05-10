import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FirstChartComponent } from './first-chart/first-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    DashboardComponent,
    FirstChartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    NgApexchartsModule
  ]
})
export class DashboardModule { }
