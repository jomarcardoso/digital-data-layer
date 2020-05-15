import { Category } from "./primitive";

interface EventCategory extends Category {
  subCategory1?: string;
}


export interface DigitalDataEvent {
  eventInfo: {
    eventName: string;
    eventAction: string;
    eventPoints: number;
    type: string;
    timeStamp: Date;
    effect: string;
  };
  category: EventCategory;
  attributes: Object;
}
