import { Component, OnInit, Input } from '@angular/core';
import * as CanvasJS from '../../../assets/scripts/canvasjs.min';
@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css'],
})
export class VisualizationComponent implements OnInit {
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
    const datapoints = [
      {
        y: Object.values(this._budget.food).reduce(
          (val: number, cur: number) => cur + val,
          0
        ),
        name: 'Food',
      },
      {
        y: Object.values(this._budget.personal_expenses).reduce(
          (val: number, cur: number) => cur + val,
          0
        ),
        name: 'Personal Expenses',
      },
      {
        y: Object.values(this._budget.medical).reduce(
          (val: number, cur: number) => cur + val,
          0
        ),
        name: 'Medical',
      },
      {
        y: Object.values(this._budget.housing).reduce(
          (val: number, cur: number) => cur + val,
          0
        ),
        name: 'Housing',
      },
      {
        y: Object.values(this._budget.transportation).reduce(
          (val: number, cur: number) => cur + val,
          0
        ),
        name: 'Transportation',
      },
      {
        y: Object.values(this._budget.savings).reduce(
          (val: number, cur: number) => cur + val,
          0
        ),
        name: 'Savings',
      },
      {
        y: Object.values(this._budget.other_necessary).reduce(
          (val: number, cur: number) => cur + val,
          0
        ),
        name: 'Other',
      },
    ];
    return datapoints;
  }

  ngOnInit(): void {
    this.chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Expense Breakdown',
      },
      data: [
        {
          type: 'pie',
          showInLegend: true,
          toolTipContent: '<b>{name}</b>: ${y} (#percent%)',
          // indexLabel: '{name} - #percent%',
        },
      ],
    });
    this.chart.render();
  }
}
