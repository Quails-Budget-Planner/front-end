import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from 'src/app/core/api-http.service';
import { Router } from '@angular/router';

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

  constructor(private apiHttpService: ApiHttpService, private router: Router ) { }

  ngOnInit(): void {}

  register() {
    const body = {
      username: this.username,
      password: this.password,
    };
    this.loading = true;
    this.apiHttpService.post('auth/login', body)
      .subscribe(
        res => {
          this.loading = false;
          this.complete = true;
          localStorage.setItem("token", res.token);
          this.router.navigateByUrl("budgets");
          
        },
        err => {
          console.log("ERROR!!!");
          console.log(err);
          this.loading = false;
        }
      )
    
  }
}
