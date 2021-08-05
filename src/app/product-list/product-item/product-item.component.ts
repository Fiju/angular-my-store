import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = new Product();
  quantity: number = 1;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  updateQuantity(event: Event) {
    this.quantity = Number((event.target as HTMLSelectElement).value);
  }

  addToCart() {
    this.cartService.add(this.quantity, this.product);
  }
}
