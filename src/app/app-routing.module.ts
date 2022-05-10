import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/auth.guard';
import { RedirectGuard } from '@core/redirect.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    canLoad: [RedirectGuard]
  },
  {
    path: 'modules',
    loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/auth'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
