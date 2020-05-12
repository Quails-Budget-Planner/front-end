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
<<<<<<< HEAD
    this.router.navigateByUrl("");
=======
    this.router.navigateByUrl('');
>>>>>>> 13998b4ea3a764f91698eccdb62ef5bffe32c01a
  }

  ngOnInit(): void {
    this.loggedInService.isLoggedIn().subscribe((x) => (this.signedIn = x));
  }
}
