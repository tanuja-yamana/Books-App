import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  visible = true;
  @Output() closeCartEvent = new EventEmitter<void>();

  closeCart() {
    this.closeCartEvent.emit();  
  }
}
