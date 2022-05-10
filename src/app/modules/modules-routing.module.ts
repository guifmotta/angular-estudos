import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules.component';

const routes: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [
      { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
      { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
