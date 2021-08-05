import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { CartService } from 'src/app/services/cart.service';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-checkout-confirm',
  templateUrl: './checkout-confirm.component.html',
  styleUrls: ['./checkout-confirm.component.scss'],
})
export class CheckoutConfirmComponent implements OnInit {
  user: User = new User();
  subTotal: number = 0;

  constructor(
    private userService: UserService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.get();
    this.subTotal = this.cartService.getSubtotal();
  }

  ngOnDestroy(): void {
    this.userService.clear();
    this.cartService.clear();
  }
}
