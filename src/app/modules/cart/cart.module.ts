import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartQuantityComponent } from './components/cart-quantity/cart-quantity.component';


@NgModule({
  declarations: [CartComponent, CartQuantityComponent],
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  exports: [
    CartComponent,
    CartQuantityComponent
  ]
})
export class CartModule { }
