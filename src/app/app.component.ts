import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'front-end';
  signedIn = false;

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.signedIn = true;
    } else {
      console.log('NO token');
    }
  }
}
