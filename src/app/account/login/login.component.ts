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

<<<<<<< HEAD
  constructor(private apiHttpService: ApiHttpService, private router: Router ) { }
=======
  constructor(private apiHttpService: ApiHttpService) {}

  ngOnInit(): void {}
>>>>>>> b8900aae4f97bc5f6e38fdd1129c03de12e2039c

  register() {
    const body = {
      username: this.username,
      password: this.password,
    };
    this.loading = true;
<<<<<<< HEAD
    this.apiHttpService.post('auth/login', body)
      .subscribe(
        res => {
          this.loading = false;
          this.complete = true;
          localStorage.setItem("token", res.token);
          this.router.navigateByUrl("");
          
        },
        err => {
          console.log("ERROR!!!");
          console.log(err);
          this.loading = false;
        }
      )
    
=======
    this.apiHttpService.post('auth/login', body).subscribe(
      (x) => {
        console.log('SUCCESS!!!');
        console.log(x);
        this.loading = false;
        this.complete = true;
      },
      (err) => {
        console.log('ERROR!!!');
        this.loading = false;
      }
    );
>>>>>>> b8900aae4f97bc5f6e38fdd1129c03de12e2039c
  }
}
