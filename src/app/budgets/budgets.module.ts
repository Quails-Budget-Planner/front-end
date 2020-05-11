import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core/core.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BudgetComponent } from './budget/budget.component';

const routes = [
  { path: 'budgets', component: DashboardComponent },
  { path: 'budget/:budgetId', component: BudgetComponent },
];

@NgModule({
  declarations: [DashboardComponent, BudgetComponent],
  imports: [CommonModule, RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule],
})
export class BudgetsModule {}
