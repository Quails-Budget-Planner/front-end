import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiHttpService } from 'src/app/core/api-http.service';
import { DataService } from '../data.service';

import { IBudget } from '../budget';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css'],
})
export class BudgetComponent implements OnInit {
  loading: boolean = false;
  complete: boolean = false;
  isSuccess: boolean = false;
  isError: boolean = false;

  selectedBudget: IBudget;

  constructor(
    private apiHttpService: ApiHttpService,
    private data: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.data.currentBudget.subscribe(
      (budget) => (this.selectedBudget = budget)
    );
  }

  updateBudget() {
    this.loading = true;
    this.complete = false;
    this.isError = false;

    const token = localStorage.getItem('token');

    const name = this.selectedBudget.name;

    const options = {
      headers: {
        Authorization: token,
      },
    };

    this.apiHttpService.put('budget', this.selectedBudget, options).subscribe(
      (res) => {
        this.success(res);

        this.data.changeBudget(this.selectedBudget);
      },
      (err) => {
        console.log(err);
        this.error();
      }
    );
  }

  deleteBudget() {
    this.loading = true;
    this.complete = false;
    this.isError = false;

    const token = localStorage.getItem('token');

    const name = this.selectedBudget.name;

    const options = {
      headers: {
        Authorization: token,
        name,
      },
    };

    this.apiHttpService.delete('budget', options).subscribe(
      (res) => {
        this.success(res);

        this.router.navigateByUrl('dashboard');
      },
      (err) => {
        console.log(err);
        this.error();
      }
    );
  }

  success(res) {
    this.loading = false;
    this.complete = true;
    this.isSuccess = true;
    this.isError = false;
  }

  error() {
    this.loading = false;
    this.complete = true;
    this.isSuccess = false;
    this.isError = true;
  }
}
