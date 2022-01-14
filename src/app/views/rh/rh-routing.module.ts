import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalariosComponent } from './salarios/salarios.component';

const routes: Routes = [
  { path: '', redirectTo: 'salarios' },
  { path: 'salarios', component: SalariosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RhRoutingModule {}
