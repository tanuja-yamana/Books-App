import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() cartClick = new EventEmitter<void>();

  navLinks = [
    { label : 'About' , path : 'about' },
    { label : 'Books' , path : 'books' },
    { label : 'Contact us' , path : 'contactus'},
    { label : 'New Books' , path: 'newbooks' },
    // { label : 'Cart' , path: 'cart'},
  ];


  
}
