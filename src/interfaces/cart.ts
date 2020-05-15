import { Price } from './primitive';
import { Product } from './product';

interface CartPrice extends Price {
  cartTotal: number,
}

interface CartProduct extends Product {
  quantity: number;
}

export interface Cart {
  cartID: string;
  price: CartPrice;
  item: Array<CartProduct>;
  attributes?: Object
}
