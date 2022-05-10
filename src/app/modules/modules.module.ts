import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';
import { ComponentsModule } from '../components/components.module';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    ModulesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MatSidenavModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule { }
