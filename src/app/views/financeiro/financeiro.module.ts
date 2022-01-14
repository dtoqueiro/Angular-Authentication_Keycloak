import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceiroRoutingModule } from './financeiro-routing.module';
import { FinancasComponent } from './financas/financas.component';

@NgModule({
  declarations: [FinancasComponent],
  imports: [CommonModule, FinanceiroRoutingModule],
})
export class FinanceiroModule {}
