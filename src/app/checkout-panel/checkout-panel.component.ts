import { Component, OnInit } from '@angular/core';
import { isEqual } from 'lodash';

import { Product } from '../models/Product';
import { CartItem } from '../models/CartItem';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout-panel',
  templateUrl: './checkout-panel.component.html',
  styleUrls: ['./checkout-panel.component.scss'],
})
export class CheckoutPanelComponent implements OnInit {
  cart: CartItem[] = [];
  subTotal: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.get();
    this.subTotal = this.cartService.getSubtotal();
  }

  ngDoCheck() {
    const updatedCart = this.cartService.get();
    if (!isEqual(updatedCart, this.cart)) {
      this.cart = updatedCart;
    }
    this.subTotal = this.cartService.getSubtotal();
  }

  ngOnChanges(): void {}
}
