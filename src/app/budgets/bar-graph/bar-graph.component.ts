import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as CanvasJS from '../../../assets/scripts/canvasjs.min';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css'],
})
export class BarGraphComponent implements OnInit {
  @Output() summaryCalculated = new EventEmitter<any>();
  @Input() _budget: any = {};
  chart: CanvasJS.Chart;
  constructor() {}

  get budget(): any {
    this.updateChart();
    return this._budget;
  }

  @Input() set budget(val: any) {
    this._budget = val;
  }

  updateChart(): void {
    const datapoints = this.createData();
    this.chart.options.data[0].dataPoints = datapoints;
    this.chart.render();
  }

  createData(): any[] {
    const categories = [
      this._budget.food,
      this._budget.personal_expenses,
      this._budget.medical,
      this._budget.housing,
      this._budget.transportation,
      this._budget.savings,
      this._budget.other_necessary,
    ];
    const totalCosts = categories.reduce(function (current, category: any) {
      return (
        current +
        Object.values(category).reduce(
          (val: number, cur: number) => cur + val,
          0
        )
      );
    }, 0);
    const monthlyIncome =
      Math.floor(
        (
          // Tax deduction on salary
          (1 - (this._budget.estimated_tax + this._budget.other_deductions) / 100) 
          * (this._budget.salary * 100) + 
          // Add flat additional income
          (this._budget.additional_income * 100))  /
          12
      ) / 100;
    const barpoints = [
      {
        y: monthlyIncome,
        label: 'Income',
      },
      {
        y: totalCosts,
        label: 'Costs',
      },
    ];
    this.summaryCalculated.emit({ income: monthlyIncome, expenses: totalCosts, extra: monthlyIncome - totalCosts});
    return barpoints;
  }

  ngOnInit(): void {
    this.chart = new CanvasJS.Chart('barContainer', {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Salary vs Income',
      },
      axisY: {
        title: 'Dollars',
      },
      data: [
        {
          type: 'bar',
        },
      ],
    });
    this.chart.render();
  }
}
