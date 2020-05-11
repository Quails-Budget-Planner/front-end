import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiHttpService } from 'src/app/core/api-http.service';
import { DataService } from '../data.service';

import { IBudget, emptyBudget } from '../budget';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private apiHttpService: ApiHttpService,
    private data: DataService,
    private router: Router
  ) {}

  username = '';
  loading: boolean = false;
  complete: boolean = false;

  selectedBudget: IBudget = emptyBudget;

  budgets: IBudget[] = [];

  ngOnInit(): void {
    this.data.currentBudget.subscribe(
      (budget) => (this.selectedBudget = budget)
    );

    this.loading = true;

    const token = localStorage.getItem('token');

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'applications/json',
        Authorization: token,
      }),
    };

    this.apiHttpService.get('budget', options).subscribe(
      (data) => {
        this.username = data.Items[0]['username'];
        this.budgets = data.Items;

        this.loading = false;
        this.complete = true;
      },
      (err) => {
        console.log(err);
        this.loading = false;
      }
    );
  }

  selectBudget(budget: IBudget) {
    const budgetURL = budget.username + '-' + budget.name.split(' ').join('');
    this.data.changeBudget(budget);
    this.router.navigateByUrl(`budget/${budgetURL}`);
  }
}
