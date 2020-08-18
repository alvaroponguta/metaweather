import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'foo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name: string;

  constructor() { }

  ngOnInit(): void {
    this.name = 'Alvaro';
  }

}
