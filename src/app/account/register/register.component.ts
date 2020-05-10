import { Component, OnInit } from '@angular/core';
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
  constructor(private apiHttpService: ApiHttpService ) { 
    
  }

  ngOnInit(): void {
    this.apiHttpService.post('auth/login', {
      "username":"jordandoan7",
      "password":"password",
      "name": "jordan"
    }).subscribe(x => console.log(x));
    
  }
}
