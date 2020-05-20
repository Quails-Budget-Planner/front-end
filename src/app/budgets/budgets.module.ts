import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BudgetComponent, SnackBarComponent } from './budget/budget.component';
import { CreateBudgetComponent } from './create-budget/create-budget.component';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { SettingsComponent } from '../budgets/settings/settings.component';
import { VisualizationComponent } from './visualization/visualization.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { TableComponent } from './table/table.component';

import { AuthGuardService } from '../core/auth-guard.service';

const routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'budget/:budgetId',
    component: BudgetComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'createbudget',
    component: CreateBudgetComponent,
    canActivate: [AuthGuardService],
  },
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
    BarGraphComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule,
    MatSnackBarModule,
    MatDialogModule,
    MatExpansionModule,
    MatTableModule,
  ],
  exports: [RouterModule],
})
export class BudgetsModule {}
