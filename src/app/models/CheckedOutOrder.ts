import { CartItem } from './CartItem';
import { User } from './User';

export class CheckedOutOrder {
  user: User;
  cart: CartItem[];

  constructor() {
    this.user = new User();
    this.cart = [];
  }
}
