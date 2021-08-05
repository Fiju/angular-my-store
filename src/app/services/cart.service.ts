import { Injectable } from '@angular/core';
import { CartItem } from '../models/CartItem';
import { Product } from '../models/Product';

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
    else this.cart.push({ quantity, id: product.id, product });
    window.alert('Product successfully added');
  }

  get(): CartItem[] {
    return this.cart;
  }

  remove(product: string | Number) {
    if (window.confirm('Are you sure about removing this product?'))
      this.cart = this.cart.filter((i) => i.id !== product);
  }

  getSubtotal(): any {
    return this.cart
      .reduce(
        (acc: any, current: CartItem): any =>
          acc + Number(current.product.price) * current.quantity,
        0
      )
      .toFixed(2);
  }
  clear(): void {
    this.cart = [];
  }
}
