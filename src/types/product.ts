import { Category, Price } from './primitive';

export interface ProductCategory<PrimaryCategory>
  extends Category<PrimaryCategory> {
  productType?: string;
}

export interface Product<ShippingMethod, PrimaryCategory> {
  productInfo: {
    productID: string;
    productName: string;
    description: string;
    productURL: string;
    productImage: string;
    productThumbnail: string;
    manufacturer: string;
    sku?: string;
    color?: string;
    size?: string;
  };
  category?: ProductCategory<PrimaryCategory>;
  linkedProduct?: Array<Product<ShippingMethod, PrimaryCategory>>;
  attributes?: Record<string, unknown>;
  price?: Price<ShippingMethod>;
}
