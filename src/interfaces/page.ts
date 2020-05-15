import { Category } from './primitive';

interface PageCategory extends Category {
  pageType?: string;
}

export interface Page {
  pageInfo: {
    pageID: string;
    pageName: string;
    destinationURL: string;
    referringURL: string;
    sysEnv: string;
    variant: string;
    version: string;
    breadCrumbs: Array<string>;
    author: string;
    issueDate: string | Date;
    effectiveDate: string | Date;
    expiryDate: string | Date;
    language: string;
    geoRegion: string;
    industryCodes: string;
    publisher: string;
  };
  category: PageCategory;
  attributes?: Object
}
