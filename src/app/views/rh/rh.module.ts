import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalariosComponent } from './salarios/salarios.component';
import { RhRoutingModule } from './rh-routing.module';

@NgModule({
  declarations: [SalariosComponent],
  imports: [CommonModule, RhRoutingModule],
})
export class RhModule {}
