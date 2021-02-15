import { DigitalData } from './types/digital-data';
import { Country, Currency } from './types/primitive';

enum ShippingMethod {
  UPS = 'UPS',
}

enum PagePrimaryCategory {
  FAQ = 'FAQ Pages',
  HOME = 'home',
}

enum ProductPrimaryCategory {
  HAIRCARE = 'Haircare',
  SHOE = 'Shoe',
}

enum ComponentPrimaryCategory {
  VIDEO = 'video',
}

enum PrimaryCategory {
  PORTAL = 'portal',
}

const digitalData: DigitalData<
  ShippingMethod,
  PagePrimaryCategory,
  ProductPrimaryCategory,
  ComponentPrimaryCategory,
  PrimaryCategory
> = {
  pageInstanceID: 'namePage-environment',
  page: {
    pageInfo: {
      pageID: '316',
      pageName: 'Rogaine Hair Regrowth Treatment',
      destinationURL: 'http://site.com/r.html',
      referringURL: 'http://www.google.com/url?&q=&esrc=s',
      sysEnv: 'mobile',
      variant: '2',
      version: '1.14',
      breadCrumbs: ['home', 'Products', 'haircare'],
      author: 'J Smith',
      issueDate: '2013-09-01',
      effectiveDate: '2013-09-20',
      expiryDate: '2014-09-20',
      language: 'en-US',
      geoRegion: 'US',
      industryCodes: 'SIC codes',
      publisher: 'BusDev',
    },
    category: {
      primaryCategory: PagePrimaryCategory.FAQ,
      subCategory1: 'ProductInfo',
      pageType: 'FAQ',
    },
    attributes: {
      // aqui vai o resto do conteúdo da página
    },
  },
  product: [
    {
      productInfo: {
        productID: 'rog3000',
        productName: 'Rogaine',
        description: 'Hair Regrowth',
        productURL: 'http://site.com/r.html',
        productImage: 'http://site.com/rog300_large.png',
        productThumbnail: 'http://site.com/rog300_thumb.png',
        manufacturer: 'Pharma',
        size: '300ml',
      },
      category: {
        primaryCategory: ProductPrimaryCategory.HAIRCARE,
        subCategory1: "Men's",
        productType: 'Thinning Hair Treatments',
      },
      linkedProduct: [
        {
          productInfo: {
            productID: 'rog3000',
            productName: 'Rogaine',
            description: 'Hair Regrowth',
            productURL: 'http://site.com/r.html',
            productImage: 'http://site.com/rog300_large.png',
            productThumbnail: 'http://site.com/rog300_thumb.png',
            manufacturer: 'Pharma',
            size: '300ml',
          },
          category: {
            primaryCategory: ProductPrimaryCategory.HAIRCARE,
            subCategory1: "Men's",
            productType: 'Thinning Hair Treatments',
          },
        },
      ], // lista de outros produtos lincados
      attributes: {
        // aqui vai o resto do conteúdo do produto
      },
    },
  ],
  cart: {
    cartID: '',
    price: {
      basePrice: 200.0,
      voucherCode: 'Alpha',
      voucherDiscount: 0.5,
      currency: Currency.BRL,
      taxRate: 0.2,
      shipping: 5.0,
      shippingMethod: ShippingMethod.UPS,
      priceWithTax: 120,
      cartTotal: 125,
    },
    attributes: {
      // aqui vai o resto do conteúdo do carrinho
    },
    item: [
      {
        productInfo: {
          productID: 'rog3000',
          productName: 'Rogaine',
          description: 'Hair Regrowth',
          productURL: 'http://site.com/r.html',
          productImage: 'http://site.com/rog300_large.png',
          productThumbnail: 'http://site.com/rog300_thumb.png',
          manufacturer: 'Pharma',
          size: '300ml',
        },
        category: {
          primaryCategory: ProductPrimaryCategory.HAIRCARE,
          subCategory1: "Men's",
          productType: 'Thinning Hair Treatments',
        },
        quantity: 3,
        price: {
          basePrice: 200.0,
          voucherCode: 'Alpha',
          voucherDiscount: 0.5,
          currency: Currency.BRL,
          taxRate: 0.2,
          shipping: 5.0,
          shippingMethod: ShippingMethod.UPS,
          priceWithTax: 120,
        },
        linkedProduct: [
          {
            productInfo: {
              productID: 'rog3000',
              productName: 'Rogaine',
              description: 'Hair Regrowth',
              productURL: 'http://site.com/r.html',
              productImage: 'http://site.com/rog300_large.png',
              productThumbnail: 'http://site.com/rog300_thumb.png',
              manufacturer: 'Pharma',
              size: '300ml',
            },
            category: {
              primaryCategory: ProductPrimaryCategory.HAIRCARE,
              subCategory1: "Men's",
              productType: 'Thinning Hair Treatments',
            },
          },
        ], // lista de outros produtos lincados
        attributes: {
          // aqui vai o resto do conteúdo do produto do carrinho
        },
      },
    ],
  },
  transaction: {
    transactionID: '', // A unique identifier for a particulartransaction;
    // usually an existing order identifier.
    profile: {
      profileInfo: {
        profileID: 'humanbeing12345',
        userName: 'me',
      },
    },
    address: {
      line1: '673 My Street',
      line2: 'Apt 1',
      city: 'Austin',
      stateProvince: 'TX',
      postalCode: '78610',
      country: Country.US,
    },
    shippingAddress: {
      line1: '673 My Street',
      line2: 'Apt 1',
      city: 'Austin',
      stateProvince: 'TX',
      postalCode: '78610',
      country: Country.US,
    },
    total: {
      basePrice: 200.0,
      voucherCode: 'Alpha',
      voucherDiscount: 0.5,
      currency: Currency.BRL,
      taxRate: 0.2,
      shipping: 5,
      shippingMethod: ShippingMethod.UPS,
      priceWithTax: 120,
      transactionTotal: 125,
    },
    attributes: {
      // aqui vai o resto do conteúdo da transação
    },
    item: [
      {
        productInfo: {
          productID: 'rog3000',
          productName: 'Rogaine',
          description: 'Hair Regrowth',
          productURL: 'http://site.com/r.html',
          productImage: 'http://site.com/rog300_large.png',
          productThumbnail: 'http://site.com/rog300_thumb.png',
          manufacturer: 'Pharma',
          sku: 'sku',
          color: 'color',
          size: '300ml',
        },
        category: {
          primaryCategory: ProductPrimaryCategory.SHOE,
        },
        quantity: 3,
        price: {
          basePrice: 200.0,
          voucherCode: 'Alpha',
          voucherDiscount: 0.5,
          currency: Currency.BRL,
          taxRate: 0.2,
          shipping: 5.0,
          shippingMethod: ShippingMethod.UPS,
          priceWithTax: 120,
        },
        linkedProduct: [
          {
            productInfo: {
              productID: 'rog3000',
              productName: 'Rogaine',
              description: 'Hair Regrowth',
              productURL: 'http://site.com/r.html',
              productImage: 'http://site.com/rog300_large.png',
              productThumbnail: 'http://site.com/rog300_thumb.png',
              manufacturer: 'Pharma',
              size: '300ml',
            },
          },
        ], // lista de outros produtos lincados
        attributes: {
          /* This object provides extensibility to each item within the transaction.
        Any additional dimensions
        related to the item can be provided. All names are optional and should fit the individual
        implementation needs in both naming and values passed. */
        },
      },
    ],
  },
  event: [
    {
      eventInfo: {
        eventName: 'Add News Portal',
        eventAction: 'addportal',
        eventPoints: 200,
        type: 'contentModifier',
        timeStamp: new Date(),
        effect: 'include portal 1234',
      },
      category: {
        primaryCategory: PrimaryCategory.PORTAL,
        subCategory1: 'dashboard',
      },
      attributes: {
        /* This object provides extensibility to each item within the transaction.
      Any additional dimensions
      related to the item can be provided. All names are optional and should fit the individual
      implementation needs in both naming and values passed. */
      },
    },
  ],
  component: [
    {
      componentInfo: {
        componentID: 'rog300v',
        componentName: 'How to Use Rogaine',
        description: 'Hair Treatment Video',
      },
      category: {
        primaryCategory: ComponentPrimaryCategory.VIDEO,
        subCategory1: 'Videos',
        componentType: 'Flash Movie',
      },
      attributes: {
        // outros valores
      },
    },
  ],
  user: [
    {
      segment: {
        /* This object provides population segmentation information for the user,
      such as premium versus
      basic membership, or any other forms of segmentation that are desirable. Any additional
      dimensions related to the user can be provided. All names are optional and should fit the
      individual implementation needs in both naming and values passed. */
      },
      profile: [
        {
          profileInfo: {
            profileID: 'humanbeing12345',
            userName: 'me',
          },
          address: {
            line1: '673 My Street',
            line2: 'Apt 1',
            city: 'Austin',
            stateProvince: 'TX',
            postalCode: '78610',
            country: Country.US,
          },
          social: {
            twitter: 'somebody',
            twitterInfo: 'stuff',
            facebook: 'somebody1234',
            facebookInfo: 'morestuff',
          },
          attributes: {
            // outras informações
          },
        },
      ],
    },
  ],
  privacy: {
    accessCategories: [
      {
        categoryName: '',
        domains: [],
      },
    ],
  },
  // privacyAccessCategories,
  version: '1.0', // valor fixo https://www.w3.org/2013/12/ceddl-201312.pdf
};

export default digitalData;
