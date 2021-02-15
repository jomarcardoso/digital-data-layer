import { Page } from './page';
import { Product } from './product';
import { Cart } from './cart';
import { Transaction } from './transaction';
import { DigitalDataEvent } from './event';
import { Component } from './component';
import { User } from './user';
import { Privacy } from './privacy';

export interface DigitalData<
  ShippingMethod,
  PagePrimaryCategory,
  ProductPrimaryCategory,
  ComponentPrimaryCategory,
  PrimaryCategory
> {
  pageInstanceID: string;
  page: Page<PagePrimaryCategory>;
  product: Array<Product<ShippingMethod, ProductPrimaryCategory>>;
  cart: Cart<ShippingMethod, ProductPrimaryCategory>;
  transaction: Transaction<ShippingMethod, ProductPrimaryCategory>;
  event: Array<DigitalDataEvent<PrimaryCategory>>;
  component: Array<Component<ComponentPrimaryCategory>>;
  user: Array<User>;
  privacy: Privacy;
  version: string;
}
