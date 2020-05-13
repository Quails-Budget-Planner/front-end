import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core/core.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BudgetComponent } from './budget/budget.component';
import { CreateBudgetComponent } from './create-budget/create-budget.component';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { SettingsComponent } from '../budgets/settings/settings.component';

const routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'budget/:budgetId', component: BudgetComponent },
  { path: 'createbudget', component: CreateBudgetComponent },
];

@NgModule({
  declarations: [
    DashboardComponent,
    BudgetComponent,
    CreateBudgetComponent,
    BudgetFormComponent,
    SettingsComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule],
})
export class BudgetsModule {}
