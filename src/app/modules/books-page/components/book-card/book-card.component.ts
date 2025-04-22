import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  @Input() book: any;
  popoverVisible = false;
  modalVisible = false;
  selectedBook: any = null;

  ngOnInit(): void {}

  showPopover(): void {
    this.popoverVisible = true;
  }

  hidePopover(): void {
    this.popoverVisible = false;
  }

  storeBook(book: any) {
    localStorage.setItem('selectedBook', JSON.stringify(book));
  }

  openModal() {
    this.selectedBook = this.book;  
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
    this.selectedBook = null;  
  }
  
}
