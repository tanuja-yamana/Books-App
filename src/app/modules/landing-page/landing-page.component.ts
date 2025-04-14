import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // @Input() landingPageName = "abc";
  // @Output() clickEmitter = new EventEmitter();

  // i: number=0;
  // submit() {
  //   this.i=this.i+1;
  //   console.log(this.i);
  //   if (this.i%2===0) {
  //     this.clickEmitter.emit(true);
  //   }
  //   else {
  //     this.clickEmitter.emit(false);
  //   }
  // }

}
