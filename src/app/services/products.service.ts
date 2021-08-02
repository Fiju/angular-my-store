import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  fetchProducts() {
    return this.http.get('../../assets/data.json');
  }

  get() {
    return this.fetchProducts();
  }
}
