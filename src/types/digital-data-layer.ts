import { Page } from './page';
import { Product } from './product';
import { Cart } from './cart';
import { Transaction } from './transaction';
import { DigitalDataEvent } from './event';
import { Component } from './component';
import { User } from './user';
import { Privacy } from './privacy';

export interface DigitalDataLayer<ShippingMethod> {
  pageInstanceID: string;
  page: Page;
  product: Array<Product>;
  cart: Cart<ShippingMethod>;
  transaction: Transaction<ShippingMethod>;
  event: Array<DigitalDataEvent>;
  component: Array<Component>;
  user: Array<User>;
  privacy: Privacy;
  version: string;
}