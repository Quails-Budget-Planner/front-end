import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  @Input() person: { name: String, url: String, title: String, quote: String, github: String, portfolio: String };
  constructor() {}

  ngOnInit(): void {
  }
}
