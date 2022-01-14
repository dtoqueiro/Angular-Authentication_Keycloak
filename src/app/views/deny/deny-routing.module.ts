import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessComponent } from './access/access.component';

const routes: Routes = [
  { path: '', redirectTo: 'deny' },
  { path: 'deny', component: AccessComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DenyRoutingModule {}
