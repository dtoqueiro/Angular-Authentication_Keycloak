import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../app/helpers/app.guard';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./views/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'deny',
    loadChildren: () =>
      import('./views/deny/deny.module').then((m) => m.DenyModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./views/profile/profile.module').then((m) => m.ProfileModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'financas',
    loadChildren: () =>
      import('./views/financeiro/financeiro.module').then(
        (m) => m.FinanceiroModule
      ),
    canActivate: [AuthGuard],
    data: { roles: ['Financeiro'] },
  },
  {
    path: 'salarios',
    loadChildren: () => import('./views/rh/rh.module').then((m) => m.RhModule),
    canActivate: [AuthGuard],
    data: { roles: ['RH'] },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
