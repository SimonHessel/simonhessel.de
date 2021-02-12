import { BulltetPoints } from "./BulletPoints";
import { Action } from "./Action";

export interface Article {
  site: "left" | "right";
  image: { name: string; width: number; height: number };
  title: string;
  description?: string;
  actions: Action[];
  rows: {
    items: Array<BulltetPoints>;
  }[];
}
