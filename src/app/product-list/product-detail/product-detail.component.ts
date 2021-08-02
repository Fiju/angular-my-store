import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../../models/Product';
import { ProductsService } from '../../services/products.service';
import { switchMap } from 'rxjs/operators';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product = new Product();
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productsService.fetchProducts().subscribe((res): any => {
        const data = res as Product[];
        this.product = data.find(
          (product: Product) => product.id == params.id
        ) as any;
      });
    });
  }

  updateQuantity(event: Event) {
    this.quantity = Number((event.target as HTMLSelectElement).value);
  }

  addToCart() {
    this.cartService.add(this.quantity, this.product);
  }
}
