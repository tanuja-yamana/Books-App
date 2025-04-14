import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input() book: any;
  popoverVisible = false;

  ngOnInit(): void {}

  showPopover(): void {
    this.popoverVisible = true;
  }

  hidePopover(): void {
    this.popoverVisible = false;
  }
}
