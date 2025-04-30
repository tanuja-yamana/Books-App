import { Component, EventEmitter, Output } from '@angular/core';
import { CartQuantityService } from './services/cart-quantity.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  visible = true;
  cartItems = this.cartQuantityService.getCartItems();

  @Output() closeCartEvent = new EventEmitter<void>();

  constructor(
    private cartQuantityService: CartQuantityService
  ) {}

  closeCart() {
    this.closeCartEvent.emit();
  }

  getTotalPrice() {
    let total = 0;
    this.cartItems.forEach(item => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  }

  getTotalQuantity() {
    let totalQuantity = 0;
    this.cartItems.forEach(item => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  }

  removeFromCart(bookId: string) {
    this.cartQuantityService.deleteFromCart(bookId);  
    this.cartItems = this.cartQuantityService.getCartItems();
    this.cartQuantityService.updateQuantity(bookId, 1);  
  }

  updateBuyButtonState() {
    this.cartQuantityService.getCartItems().forEach(item => {});
  }
}
