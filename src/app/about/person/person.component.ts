import { Component, OnInit, Input } from '@angular/core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
<<<<<<< HEAD
  @Input() person: { name: String, url: String, title: String, quote: String, github: String, portfolio: String };
=======
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faGlobe = faGlobe;
  faTwitter = faTwitter;

  @Input() person: {
    name: String;
    url: String;
    title: String;
    quote: String;
    github: String;
    linkedin: String;
    portfolio: String;
    twitter: String;
  };
>>>>>>> 2ad9875a274d6c7e6cb375ec2f546502edf4c55e
  constructor() {}

  ngOnInit(): void {
  }
}
