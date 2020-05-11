import { Component, OnInit } from '@angular/core';
import { LoggedInService } from './core/logged-in.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // title = 'front-end';
  signedIn: Boolean;

  constructor (private loggedInService: LoggedInService) {
  }

  logout() {
    this.loggedInService.logout();
  }
  
  ngOnInit(): void {
    this.loggedInService.isLoggedIn().subscribe(x => this.signedIn = x);
  }

}
