import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  summary;
  @Input() _budget: any = {};

  get budget(): any {
    console.log('hi');
    this.calculateSummary();
    return this._budget;
  }
  @Input() set budget(val: any) {
    console.log('hi2');
    this._budget = val;
  }
  constructor(private cd: ChangeDetectorRef) { 
    // this.cd.detectChanges();
  }

  calculateSummary() {
    const categories = [
      this._budget.food,
      this._budget.personal_expenses,
      this._budget.medical,
      this._budget.housing,
      this._budget.transportation,
      this._budget.savings,
      this._budget.other_necessary
    ]
    const expenses = categories.reduce(
      function(current, category: Object) {
        return current + Object.values(category).reduce(
          (val: number, cur: number) => cur + val,
          0)
      },0)
    const income = Math.floor(this._budget.salary * 100 / 12) / 100;
    this.summary = { income, expenses, extra: income - expenses}
  }

  ngOnInit(): void {
    this.calculateSummary();
    this.cd.detectChanges();
  }

}
