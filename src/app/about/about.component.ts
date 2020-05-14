import { Component, OnInit } from '@angular/core';
// import jordan from '/assets/images/jordan.png';
// import jonathan from '/assets/images/jonathan.jpg';
const jordan = 'assets/images/jordan.png';
const jonathan = 'assets/images/jonathan.jpg';

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
        linkedin: 'https://www.linkedin.com/in/jordan-doan',
        portfolio: 'https://jordan-doan.com/',
        twitter: '',
      },
      {
        name: 'Jonathan',
        url: jonathan,
        github: 'https://github.com/Jonathan-YungHsin-Ho',
        portfolio: 'https://www.jonathan-ho.dev',
        title: 'Full-Stack Software Engineer',
        quote: '"Code with the monitor off for the darkest mode."',
        github: 'https://github.com/Jonathan-YungHsin-Ho',
        linkedin: 'https://www.linkedin.com/in/jonathan-y-ho/',
        portfolio: 'https://www.jonathan-ho.dev/',
        twitter: 'https://twitter.com/JonathanHoDev',
      },
    ];
  }

  ngOnInit(): void {}
}
