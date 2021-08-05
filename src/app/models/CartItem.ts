export class CartItem {
  id: Number;
  quantity: number;
  product: { name: string; price: Number; url: string; description: string };

  constructor() {
    this.id = 0;
    this.quantity = 0;
    this.product = {
      name: '',
      price: 0,
      url: '',
      description: '',
    };
  }
}
