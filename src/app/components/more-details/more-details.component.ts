import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartQuantityService } from 'src/app/modules/cart/services/cart-quantity.service';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.scss']
})
export class MoreDetailsComponent implements OnInit, OnDestroy {
  isbn13: string = '' ;
  @Input() book: any;
  @Output() close = new EventEmitter<void>();
  @Output() addToCart = new EventEmitter<any>();
  buyButtonDisabled: boolean | undefined= false ;

  constructor(
    private route: ActivatedRoute,
    public cartQuantityService: CartQuantityService
  ) {}

  ngOnInit(): void {
    if (!this.book) {
      this.isbn13 = this.route.snapshot.paramMap.get('isbn13') || '';
      this.fetchBookDetails();
    }
  }

  fetchBookDetails() {
    const allBooks = JSON.parse(localStorage.getItem('allBooks') || '[]');
    this.book = allBooks.find((b: any) => b.isbn13 === this.isbn13);
    if (this.book && !this.book.buyClicked) {
      this.book.buyClicked = false;
    }
  }

  openChapter2() {
    window.open('https://itbook.store/files/9781617294136/chapter2.pdf', '_blank');
  }

  openChapter5() {
    window.open('https://itbook.store/files/9781617294136/chapter5.pdf', '_blank');
  }

  onBuyClick() {
    const bookDetails = {
      bookImage: this.book?.image,
      bookId: this.book.isbn13,
      title: this.book.title,
      price: parseFloat(this.book.price.replace('$', '')),
      quantity: this.cartQuantityService.getQuantity(this.book.isbn13)
    };
    this.cartQuantityService.addToCart(bookDetails);
    this.addToCart.emit(bookDetails);
    this.buyButtonDisabled = true;
    this.book.buyClicked = true;
  }

  updateBuyButtonState() {
    const quantity = this.cartQuantityService.getQuantity(this.book.isbn13);
    if (quantity === 1) {
      this.buyButtonDisabled = false;
    }
  }

  ngOnDestroy(): void {
    this.buyButtonDisabled=undefined;
    this.isbn13 = '';
  }
}
