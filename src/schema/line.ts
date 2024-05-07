import { Generated } from "kysely";

export interface Line {
  id: Generated<number>;
  name: string;
  number: Number;
}
