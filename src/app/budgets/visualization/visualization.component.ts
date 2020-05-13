import { Component, OnInit, Input } from '@angular/core';
import * as CanvasJS from '../../../assets/scripts/canvasjs.min';
@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent implements OnInit {
  @Input() _budget: any = {};
  chart: CanvasJS.Chart;
  constructor() { }

  get budget(): any {
    this.updateChart();
    return this._budget
  }

  @Input() set budget(val: any) {
    this._budget = val;
  }
  
  updateChart(): void {
    this.chart.options.data[0].dataPoints = [
      { y: this._budget.food.groceries, label: "Groceries" },
    ];
    this.chart.render();
  }

  ngOnInit(): void {
    this.chart = new CanvasJS.Chart("chartContainer", {

      animationEnabled: true,
      // exportEnabled: true,
      title: {
        text: "Your spendings"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: this._budget.food.groceries, label: "Groceries" },
        ]
      }]
    });
  }


}
