import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../../core/api-http.service'
import { Router } from '@angular/router';
import { LoggedInService } from 'src/app/core/logged-in.service';
// import { MatDialog } from '@angular/material/dialog';
// import { ModalComponent } from '../../shared/modal/modal.component';

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
  constructor(private apiHttpService: ApiHttpService, 
    private router: Router, 
    private loggedInService: LoggedInService,
    ) { }

  // openDialog(): void {
  //   // const dialogRef = this.dialog.open(ModalComponent, { width: '250px'});
  //   // dialogRef.afterClosed().subscribe(result => {
  //   //   console.log('Dialog closed');
  //   //   console.log(result);
  //   // })
  // }


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
