import { Component, OnInit } from '@angular/core';
import jordan from '../images/jordan.png';
import jonathan from '../images/jonathan.jpg';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  team: Object[] = [];
  constructor() {
    this.team = [
      {
        name: 'Jordan',
        url: jordan,
        title: 'Full Stack Developer',
        quote: 'I love chicken nuggets!',
      },
      {
        name: 'Jonathan',
        url: jonathan,
        title: 'Full Stack Developer',
        quote: 'Big Papa Ho',
      },
    ];
  }

  ngOnInit(): void {}
}
