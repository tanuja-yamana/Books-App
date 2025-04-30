import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CartQuantityService } from 'src/app/modules/cart/services/cart-quantity.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Output() cartClick = new EventEmitter<void>();
  cartItems: any[] = [];
  navLinks = [
    { label : 'About' , path : 'about' },
    { label : 'Books' , path : 'books' },
    { label : 'Contact us' , path : 'contactus' },
    { label : 'New Books' , path: 'newbooks' },
  ];

  constructor(private cartQuantityService: CartQuantityService) { }
  ngOnInit() {
    this.cartItems = this.cartQuantityService.getCartItems();
  }
  getTotalCartQuantity() {
    let totalQuantity = 0;
    const cartItems = this.cartQuantityService.getCartItems();
    cartItems.forEach(item => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  }

  ngOnDestroy() {
    this.cartItems=[];
  }
}
