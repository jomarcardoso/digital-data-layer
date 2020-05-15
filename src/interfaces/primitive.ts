export interface Category {
  primaryCategory: string;
}

enum Currency {
  BRL = 'BRL',
}

enum ShippingMethod {
  STANDARD_DELIVERY = 'STANDARD_DELIVERY',
  SHIPPING_FROM_STORE = 'SHIPPING_FROM_STORE',
  PICK_UP_IN_STORE = 'PICK_UP_IN_STORE',
}

export interface Price {
  basePrice: number,
  voucherCode: string,
  voucherDiscount: number,
  currency: Currency,
  taxRate: number,
  shipping: number,
  shippingMethod: ShippingMethod,
  priceWithTax: number,
}

export interface Profile {
  profileInfo: {
    profileID: string;
    userName: string;
    email?: string;
    // language?: string;
    // returningStatus?: string;
    // type?: string;
  };
}

export interface Address {
  line1: string;
  line2: string;
  city: string;
  stateProvince: string;
  postalCode: string;
  country: string;
}
