import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BudgetComponent, SnackBarComponent } from './budget/budget.component';
import { CreateBudgetComponent } from './create-budget/create-budget.component';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { SettingsComponent } from '../budgets/settings/settings.component';
import { VisualizationComponent } from './visualization/visualization.component';

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
    SettingsComponent,
    SnackBarComponent,
    VisualizationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTabsModule,
  ],
  exports: [RouterModule],
})
export class BudgetsModule {}
