import { Category } from './primitive';

interface ProductCategory extends Category {
  subCategory1?: string;
  productType?: string;
}

export interface Product {
  productInfo: {
    productID: string;
    productName: string;
    description: string;
    productURL: string;
    productImage: string;
    productThumbnail: string;
    manufacturer: string;
    size: string;
  };
  category: ProductCategory;
  linkedProduct: Array<Product>;
  attributes?: Object
}
