import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiHttpService } from 'src/app/core/api-http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String = "";
  username: String = "";
  password: String = "";
  loading: boolean = false;
  complete: boolean = false;
  message: String = "";

  constructor(private apiHttpService: ApiHttpService, private router: Router) { 
    
  }

  ngOnInit(): void {
  }

  register() {
    const body = {
      name: this.name,
      username: this.username,
      password: this.password,
    }

    this.loading = true;
    this.apiHttpService.post('auth/register', body)
      .subscribe(
        x => {
          this.loading = false;
          this.complete = true;
          this.message = "Sign up complete! Redirecting..."
          this.router.navigateByUrl("");
      },
        err => {
          this.loading = false;
          this.complete = true;
          this.message = "Error..."
        }
      );
  }
}
