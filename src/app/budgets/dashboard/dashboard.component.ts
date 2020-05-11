import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from 'src/app/core/api-http.service';

export interface Budget {
  id: string;
  name: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private apiHttpService: ApiHttpService) {}

  username = 'JOHNNIE';
  loading: boolean = false;
  complete: boolean = false;

  budgets: Budget[] = [
    {
      id: 'budget01',
      name: 'Budget 01',
    },
    {
      id: 'budget02',
      name: 'Budget 02',
    },
    {
      id: 'budget03',
      name: 'Budget 03',
    },
  ];

  ngOnInit(): void {
    // this.loading = true;
    // this.apiHttpService.get('').subscribe(
    //   (x) => {
    //     console.log(x);
    //     this.loading = false;
    //     this.complete = true;
    //   },
    //   (err) => {
    //     console.log(err);
    //     this.loading = false;
    //   }
    // );
  }
}
