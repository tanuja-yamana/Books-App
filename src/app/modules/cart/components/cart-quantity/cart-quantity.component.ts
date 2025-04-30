import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartQuantityService } from '../../services/cart-quantity.service';

@Component({
  selector: 'app-cart-quantity',
  templateUrl: './cart-quantity.component.html',
  styleUrls: ['./cart-quantity.component.scss']
})
export class CartQuantityComponent {
  @Input() bookId: string = '';
  @Output() quantityChanged = new EventEmitter<void>();

  constructor(public cartQuantityService: CartQuantityService) {}

  onInputChange(event: any) {
    const value = +event.target.value;
    if (value >= 0) {
      this.cartQuantityService.updateQuantity(this.bookId, value);
      this.quantityChanged.emit();
    }
  }
  
  increment() {
    this.cartQuantityService.increment(this.bookId);
    this.quantityChanged.emit();
  }
  
  decrement() {
    this.cartQuantityService.decrement(this.bookId);
    this.quantityChanged.emit();
  }
}
