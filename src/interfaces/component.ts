import { Category } from './primitive';

interface ComponentCateogory extends Category {
  subCategory1: string;
  componentType: string;
}

export interface Component {
  componentInfo: {
    componentID: string;
    componentName?: string;
    description?: string;
  };
  category: ComponentCateogory;
  attributes: Object;
}
