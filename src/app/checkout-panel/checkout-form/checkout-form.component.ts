import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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

  checkoutForm = new FormGroup({
    fullname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    card: new FormControl('', [
      Validators.required,
      Validators.minLength(12),
      Validators.maxLength(16),
    ]),
  });

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.userService.save(this.checkoutForm.value);
    this.router.navigateByUrl('/checked-out');
  }
}
