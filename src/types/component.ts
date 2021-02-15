import { Category } from './primitive';

interface ComponentCategory<PrimaryCategory> extends Category<PrimaryCategory> {
  componentType: string;
}

export interface Component<PrimaryCategory> {
  componentInfo: {
    componentID: string;
    componentName?: string;
    description?: string;
  };
  category: ComponentCategory<PrimaryCategory>;
  attributes: Record<string, unknown>;
}
