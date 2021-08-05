import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/CartItem';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem = new CartItem();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  updateQuantity(event: Event) {
    this.cartItem.quantity = Number((event.target as HTMLSelectElement).value);
  }

  removeFromCart() {
    this.cartService.remove(this.cartItem.id);
  }
}
