import { Component, OnInit } from '@angular/core';
import { LoggedInService } from './core/logged-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // title = 'front-end';
  signedIn: Boolean;

  constructor(
    private loggedInService: LoggedInService,
    private router: Router
  ) {}

  logout() {
    this.loggedInService.logout();
    this.router.navigateByUrl('');
  }

  ngOnInit(): void {
    this.loggedInService.isLoggedIn().subscribe((x) => (this.signedIn = x));
  }
}
