import { Price } from './primitive';
import { Product } from './product';

interface CartPrice<ShippingMethod> extends Price<ShippingMethod> {
  cartTotal: number;
}

export interface CartProduct<ShippingMethod, PrimaryCategory> extends Product<ShippingMethod, PrimaryCategory> {
  quantity: number;
}

export interface Cart<ShippingMethod, ProductPrimaryCategory> {
  cartID: string;
  price: CartPrice<ShippingMethod>;
  item: Array<CartProduct<ShippingMethod, ProductPrimaryCategory>>;
  attributes?: Record<string, unknown>;
}
