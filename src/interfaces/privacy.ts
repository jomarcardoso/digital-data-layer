export interface Privacy {
  accessCategories: Array<{
    categoryName: string,
    domains: Array<string>,
  }>;
}
