import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.scss']
})
export class MoreDetailsComponent implements OnInit {
  isbn13: string = '';
  @Input() book: any;
  @Output() close = new EventEmitter<void>();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (!this.book) {
      this.isbn13 = this.route.snapshot.paramMap.get('isbn13') || '';
      this.fetchBookDetails();
    }
  }

  fetchBookDetails() {
    const allBooks = JSON.parse(localStorage.getItem('allBooks') || '[]');
    this.book = allBooks.find((b: any) => b.isbn13 === this.isbn13);
  }

  closeModal() {
    this.close.emit();
  }

  openChapter2() {
    window.open('https://itbook.store/files/9781617294136/chapter2.pdf', '_blank');
  }

  openChapter5() {
    window.open("https://itbook.store/files/9781617294136/chapter5.pdf", '_blank');
  }
}
