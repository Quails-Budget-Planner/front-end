import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { IBudget } from '../budget';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css'],
})
export class BudgetComponent implements OnInit {
  selectedBudget: IBudget;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.currentBudget.subscribe(
      (budget) => (this.selectedBudget = budget)
    );
  }
}
