import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiHttpService } from 'src/app/core/api-http.service';
import { DataService } from '../data.service';

import { IBudget, emptyBudget } from '../budget';

@Component({
  selector: 'app-create-budget',
  templateUrl: './create-budget.component.html',
  styleUrls: ['./create-budget.component.css'],
})
export class CreateBudgetComponent implements OnInit {
  newBudget: IBudget = emptyBudget;
  loading: boolean = false;
  complete: boolean = false;
  isSuccess: boolean = false;
  isError: boolean = false;

  constructor(
    private apiHttpService: ApiHttpService,
    private data: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  submitBudget() {
    console.log(this.newBudget);
    this.loading = true;
    this.complete = false;
    this.isError = false;

    const token = localStorage.getItem('token');

    const options = {
      headers: {
        Authorization: token,
      },
    };

    this.apiHttpService.post('budget', this.newBudget, options).subscribe(
      (res) => {
        this.success(res);

        const budgetURL =
          this.newBudget.username +
          '-' +
          this.newBudget.name.split(' ').join('');
        this.data.changeBudget(this.newBudget);
        this.router.navigateByUrl(`budget/${budgetURL}`);
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
