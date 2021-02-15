import { Category } from './primitive';

export interface PageCategory<PrimaryCategory>
  extends Category<PrimaryCategory> {
  pageType?: string;
}

export interface Page<PrimaryCategory> {
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
  category: PageCategory<PrimaryCategory>;
  attributes?: Record<string, unknown>;
}
