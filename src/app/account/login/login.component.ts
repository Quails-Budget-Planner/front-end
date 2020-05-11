import { Component, OnInit} from '@angular/core';
import { ApiHttpService } from 'src/app/core/api-http.service';
import { Router } from '@angular/router';
import { LoggedInService } from 'src/app/core/logged-in.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: String = '';
  password: String = '';
  loading: boolean = false;
  complete: boolean = false;
  isSuccess: boolean = false;
  isError: boolean = false;

  constructor(private apiHttpService: ApiHttpService, private router: Router, private loggedInService: LoggedInService ) { }

  ngOnInit(): void {
  }

  login() {
    const body = {
      username: this.username,
      password: this.password,
    };
    this.loading = true;
    this.complete = false;
    this.isError = false;
    this.apiHttpService.post('auth/login', body)
      .subscribe(
        res => {
          this.success(res)
        },
        err => {
          this.error();
        }
      )
    
  }

  success(res) {
    this.loading = false;
    this.complete = true;
    this.isSuccess = true;
    this.isError = false;
    this.loggedInService.login(res.token);
    setTimeout(() => {
      this.router.navigateByUrl("budgets");
    }, 500)
  }

  error() {
    this.loading = false;
    this.complete = true;
    this.isSuccess = false;
    this.isError = true;
  }
}
