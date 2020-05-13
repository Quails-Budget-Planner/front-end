import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../../core/api-http.service'
import { Router } from '@angular/router';
import { LoggedInService } from 'src/app/core/logged-in.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../shared/modal/modal.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  data: any = {}
  fields: any = {}
  name: String = "";
  loading: Boolean = false;
  deletePrompt: Boolean = false;
  constructor(
    private apiHttpService: ApiHttpService, 
    private router: Router, 
    private loggedInService: LoggedInService,
    public dialog: MatDialog
    ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, { data: { title: "Delete Account", message: "Are you sure? You cannot undo this action."}});
    dialogRef.afterClosed().subscribe(confirm => {
      if (confirm) {
        this.handleDelete();
      }
    })
  }


  ngOnInit(): void {
    this.apiHttpService.get('users', { headers: { Authorization: localStorage.getItem('token')}})
      .subscribe(res => {
        this.data = res;
        this.name = res.name;
      })
  }

  handleEdit() {
    this.loading = true;
    this.apiHttpService.put('users', { name: this.name }, { headers: { Authorization: localStorage.getItem('token')}})
      .subscribe(res => {
        this.loading = false;
        this.data.name = this.name;
      })
  }

  toggleDelete() {
    this.deletePrompt = !this.deletePrompt;
  }

  handleDelete() {
    this.loading = true;
    this.apiHttpService.delete('users', { headers: { Authorization: localStorage.getItem('token')}})
      .subscribe(res => {
        this.loading = false;
        this.router.navigateByUrl("");
        this.loggedInService.logout();
      })
  }

}
