import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiHttpService } from 'src/app/core/api-http.service';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  summary;
  durationInSeconds = 5;

  constructor(
    private apiHttpService: ApiHttpService,
    private data: DataService,
    private router: Router,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  receiveSummary(event) {
    this.summary = event;
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        title: 'Delete Budget',
        message: 'Are you sure? You cannot undo this action.',
      },
    });
    dialogRef.afterClosed().subscribe((confirm) => {
      if (confirm) {
        this.deleteBudget();
      }
    });
  }


  ngOnInit(): void {
    this.data.currentBudget.subscribe(
      (budget) => (this.selectedBudget = budget)
    );
    if (this.selectedBudget.name === '') {
      this.selectedBudget = JSON.parse(localStorage.getItem('currentBudget'));
    }
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

        localStorage.setItem(
          'currentBudget',
          JSON.stringify(this.selectedBudget)
        );
        this.data.changeBudget(this.selectedBudget);
        this.openSnackBar();
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

@Component({
  selector: 'snack-bar-component',
  template: '<span>Budget saved!</span>',
})
export class SnackBarComponent {}
