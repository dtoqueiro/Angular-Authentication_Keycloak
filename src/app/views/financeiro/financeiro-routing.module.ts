import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinancasComponent } from './financas/financas.component';

const routes: Routes = [
  { path: '', redirectTo: 'financas' },
  { path: 'financas', component: FinancasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinanceiroRoutingModule {}
