import { Category, Price } from './primitive';

interface ProductCategory extends Category {
  subCategory1?: string;
  productType?: string;
}

export interface Product<ShippingMethod> {
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
  category?: ProductCategory;
  linkedProduct?: Array<Product<ShippingMethod>>;
  attributes?: Record<string, unknown>;
  price?: Price<ShippingMethod>;
  quantity?: number;
}
