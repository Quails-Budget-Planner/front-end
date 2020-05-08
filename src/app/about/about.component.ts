import { Component, OnInit } from '@angular/core';
import jordan from '../images/jordan.png';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  team: Object[] = [];
  constructor() { 
    this.team = [
      {
        name: "Jonathan",
        url: jordan
      },
      {
        name: "Jordan",
        url: jordan
      }
    ]
  }

  ngOnInit(): void {
  }

}
