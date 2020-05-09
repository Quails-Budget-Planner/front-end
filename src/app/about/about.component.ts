import { Component, OnInit } from '@angular/core';
import jordan from '../assets/images/jordan.png';
import jonathan from '../assets/images/jonathan.jpg';
// const jordan = "/assets/images/jordan.png";
// const jonathan = "/assets/images/jonathan.jpg";

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
        // url: 'sdjfklsdjf',
        url: jordan,
        title: 'Full Stack Developer',
        quote: 'I love chicken nuggets!',
      },
      {
        name: 'Jonathan',
        // url: 'asdasdas',
        url: jonathan,
        title: 'Full Stack Developer',
        quote: 'Big Papa Ho',
      },
    ];
  }

  ngOnInit(): void {}
}
