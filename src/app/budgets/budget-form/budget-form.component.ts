import { Component, OnInit, Input } from '@angular/core';

import { IBudget } from '../budget';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.css'],
})
export class BudgetFormComponent implements OnInit {
  @Input() budget: IBudget;

  constructor() {}

  ngOnInit(): void {}
}
