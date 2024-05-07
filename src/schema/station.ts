import { Line } from "@/schema/line";
import { Generated } from "kysely";

export interface Station {
  id: Generated<number>;
  name: string;
  line: Line;
  status: "resolved" | "problem";
}
