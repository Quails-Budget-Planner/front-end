import { Component, OnInit } from '@angular/core';
import { LoggedInService } from './core/logged-in.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './shared/modal/modal.component';

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
    private router: Router,
    private dialog: MatDialog
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        title: 'Logout',
        message: 'Are you sure? You cannot undo this action.',
      },
    });
    dialogRef.afterClosed().subscribe((confirm) => {
      if (confirm) {
        this.logout();
      }
    });
  }

  logout() {
    this.loggedInService.logout();
    this.router.navigateByUrl('');
  }

  ngOnInit(): void {
    this.loggedInService.isLoggedIn().subscribe((x) => (this.signedIn = x));
  }
}
