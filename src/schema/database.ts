import { Station } from "./station";
import { Report } from "./report";
import { Event } from "./event";

import { createKysely } from "@vercel/postgres-kysely";
import { Line } from "@/schema/line";

interface Database {
  reports: Report;
  stations: Station;
  events: Event;
  lines: Line;
}

export const db = createKysely<Database>();
