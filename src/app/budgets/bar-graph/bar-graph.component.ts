import { Component, OnInit, Input } from '@angular/core';
import * as CanvasJS from '../../../assets/scripts/canvasjs.min';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit {
  @Input() _budget: any = {};
  chart: CanvasJS.Chart;
  constructor() { }

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
      this._budget.other_necessary
    ]
    const totalCosts = categories.reduce(
      function(current, category: any) {
        return current + Object.values(category).reduce(
          (val: number, cur: number) => cur + val,
          0)
      },0)

    const barpoints = [
      {
        y: this._budget.salary/12, label: "Income"
      },
      {
        y: totalCosts, label: "Costs"
      }
    ]

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
        title: "Dollars"
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
