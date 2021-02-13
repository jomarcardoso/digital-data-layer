import { Price } from './primitive';
import { Product } from './product';

interface CartPrice<ShippingMethod> extends Price<ShippingMethod> {
  cartTotal: number;
}

interface CartProduct<ShippingMethod> extends Product<ShippingMethod> {
  quantity: number;
}

export interface Cart<ShippingMethod> {
  cartID: string;
  price: CartPrice<ShippingMethod>;
  item: Array<CartProduct<ShippingMethod>>;
  attributes?: Record<string, unknown>;
}
