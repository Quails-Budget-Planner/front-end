import {
  Component,
  OnInit,
  Input,

} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() _summary;

  get summary(): any {
    return this._summary;
  }

  @Input() set summary(val: any) {
    this._summary = val;
  }

  constructor() { 
  }

  ngOnInit(): void {
  }
}
