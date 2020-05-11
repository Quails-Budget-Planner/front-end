import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IBudget, emptyBudget } from './budget';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private budgetSource = new BehaviorSubject(emptyBudget);
  currentBudget = this.budgetSource.asObservable();

  constructor() {}

  changeBudget(budget: IBudget) {
    this.budgetSource.next(budget);
  }
}
