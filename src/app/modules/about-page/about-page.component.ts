import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  bookList: string[] = ['HTML','CSS','JavaScript','NodeJS','Python','MongoDB','Node','Databases','JSON','AWS','Flask','Angular','Express'];
  constructor() { }

  ngOnInit(): void {
  }

}
