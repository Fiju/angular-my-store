import { Injectable } from '@angular/core';
import { CartItem } from './models/CartItem';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: CartItem[] = [];

  constructor() {}

  add(quantity: number, product: Product) {
    const alreadyAdded: Boolean = !!this.cart.find(
      (item) => item.id === product.id
    );
    if (alreadyAdded)
      this.cart = this.cart.map((item) => {
        if (item.id === product.id) {
          item.quantity = quantity + item.quantity;
        }
        return item;
      });
    else this.cart.push({ quantity, id: product.id });
  }
}
