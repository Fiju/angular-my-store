import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/CartItem';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss'],
})
export class CheckoutFormComponent implements OnInit {
  @Input() cart: CartItem[] = [];
  fullname: string = '';
  address: string = '';
  card: string = '';

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.userService.save({
      fullname: this.fullname,
      address: this.address,
      card: this.card,
    });
    this.router.navigateByUrl('/checked-out');
  }
}
