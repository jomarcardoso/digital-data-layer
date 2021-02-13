import { Profile, Address, Price } from './primitive';
import { Product } from './product';

interface TransactionPrice<ShippingMethod> extends Price<ShippingMethod> {
  transactionTotal: number;
}

export interface Transaction<ShippingMethod> {
  transactionID: string;
  profile: Profile;
  address: Address;
  shippingAddress: Address;
  total: TransactionPrice<ShippingMethod>;
  attributes: Record<string, unknown>;
  item?: Array<Product<ShippingMethod>>;
}