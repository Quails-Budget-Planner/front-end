import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../../core/api-http.service'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  data: any = {}
  fields: any = {}
  constructor(private apiHttpService: ApiHttpService ) { }

  ngOnInit(): void {
    this.apiHttpService.get('users', { headers: { Authorization: localStorage.getItem('token')}})
      .subscribe(res => {
        this.data = res;
        this.fields = res;
      })
  }

}
