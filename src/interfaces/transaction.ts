import { Profile, Address, Price } from './primitive';

interface TransactionPrice extends Price {
  transactionTotal: Price;
}

export interface Transaction {
  transactionID: string;
  profile: Profile;
  address: Address;
  shippingAddress: Address;
  total: TransactionPrice;
  attributes: Object;
}
