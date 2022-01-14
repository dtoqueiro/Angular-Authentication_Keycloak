import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessComponent } from './access/access.component';
import { DenyRoutingModule } from './deny-routing.module';

@NgModule({
  declarations: [AccessComponent],
  imports: [CommonModule, DenyRoutingModule],
})
export class DenyModule {}
