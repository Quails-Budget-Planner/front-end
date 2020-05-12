import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiHttpService } from 'src/app/core/api-http.service';
import { LoggedInService } from 'src/app/core/logged-in.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  name: String = '';
  username: String = '';
  password: String = '';
  loading: boolean = false;
  complete: boolean = false;
  isSuccess: boolean = false;
  isError: boolean = false;

  constructor(
    private apiHttpService: ApiHttpService,
    private router: Router,
    private loggedInService: LoggedInService
  ) {}

  ngOnInit(): void {}

  register() {
    const body = {
      name: this.name,
      username: this.username,
      password: this.password,
    };

    this.loading = true;
    this.complete = false;
    this.isError = false;
    this.apiHttpService.post('auth/register', body).subscribe(
      (res) => {
        this.success(res);
      },
      (err) => {
        this.error();
      }
    );
  }

  onCompleteRequest(error) {
    if (!error) {
      setTimeout(() => {
        this.loading = false;
        this.complete = true;
        this.isSuccess = true;
        this.isError = false;
      }, 600);
    } else {
      setTimeout(() => {
        this.loading = false;
        this.complete = true;
        this.isError = true;
      }, 600);
    }
  }

  success(res) {
    this.onCompleteRequest(false);
    this.loggedInService.login(res.token);
    setTimeout(() => {
      this.router.navigateByUrl('budgets');
    }, 500);
  }

  error() {
    this.onCompleteRequest(true);
    this.isSuccess = false;
  }
}
