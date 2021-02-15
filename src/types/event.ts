import { Category } from './primitive';

export interface EventCategory<PrimaryCategory>
  extends Category<PrimaryCategory> {
  subCategory1?: string;
}

export interface Event<PrimaryCategory> {
  eventInfo: {
    eventName: string;
    eventAction: string;
    eventPoints: number;
    type: string;
    timeStamp: Date;
    effect: string;
  };
  category: EventCategory<PrimaryCategory>;
  attributes: Record<string, unknown>;
}
