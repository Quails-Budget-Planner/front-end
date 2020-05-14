import { Component, OnInit } from '@angular/core';
// import jordan from '/assets/images/jordan.png';
// import jonathan from '/assets/images/jonathan.jpg';
const jordan = "assets/images/jordan.png";
const jonathan = "assets/images/jonathan.jpg";

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
        github: 'https://github.com/jordandoan',
        portfolio: 'https://jordan-doan.com'
      },
      {
        name: 'Jonathan',
        url: jonathan,
        title: 'Full Stack Developer',
        quote: 'Big Papa Ho',
        github: 'https://github.com/Jonathan-YungHsin-Ho',
        // portfolio: 'https://google.com',
        portfolio: 'https://www.jonathan-ho.dev'
      },
    ];

  }

  ngOnInit(): void {}
}
