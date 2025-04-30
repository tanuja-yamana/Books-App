import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartQuantityService {
  private cartItems: any[] = [];
  private quantities: { [key: string]: number } = {};

  constructor() {
    this.loadCartFromLocalStorage();
    window.addEventListener('storage', this.onStorageChange.bind(this));
  }

  private saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    localStorage.setItem('quantities', JSON.stringify(this.quantities));
  }

  private loadCartFromLocalStorage() {
    const storedCartItems = localStorage.getItem('cartItems');
    const storedQuantities = localStorage.getItem('quantities');

    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
    }

    if (storedQuantities) {
      this.quantities = JSON.parse(storedQuantities);
    }
  }

  private onStorageChange(event: StorageEvent) {
    if (event.key === 'cartItems' || event.key === 'quantities') {
      this.loadCartFromLocalStorage();
    }
  }

  getQuantity(bookId: string) {
    return this.quantities[bookId] || 1;
  }

  increment(bookId: string) {
    this.quantities[bookId] = this.getQuantity(bookId) + 1;
    this.updateCart(bookId);
  }

  decrement(bookId: string) {
    const currentQty = this.getQuantity(bookId);
    if (currentQty > 1) {
      this.quantities[bookId] = currentQty - 1;
      this.updateCart(bookId);
    }
  }

  updateQuantity(bookId: string, newQty: number) {
    if (newQty > 0) {
      this.quantities[bookId] = newQty;
      this.updateCart(bookId);
    }
  }

  addToCart(book: any) {
    const index = this.cartItems.findIndex(item => item.bookId === book.bookId);
    if (index === -1) {
      this.cartItems.push({
        ...book,
        totalPrice: book.price * book.quantity
      });
    } else {
      this.cartItems[index].quantity = book.quantity;
      this.cartItems[index].totalPrice = book.price * book.quantity;
    }
    this.quantities[book.bookId] = book.quantity;
    this.saveCartToLocalStorage();
  }

  getCartItems() {
    return this.cartItems;
  }

  private updateCart(bookId: string) {
    const index = this.cartItems.findIndex(item => item.bookId === bookId);
    if (index !== -1) {
      const qty = this.quantities[bookId];
      this.cartItems[index].quantity = qty;
      this.cartItems[index].totalPrice = (this.cartItems[index].price * qty).toFixed(2);  
    }
    this.saveCartToLocalStorage();
  }
  

  deleteFromCart(bookId: string) {
    const updatedCartItems = this.cartItems.filter(item => item.bookId !== bookId);
    delete this.quantities[bookId];
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    localStorage.setItem('quantities', JSON.stringify(this.quantities));
    this.cartItems = updatedCartItems;
  }

  
}
