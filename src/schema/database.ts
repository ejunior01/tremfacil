import { createKysely } from "@vercel/postgres-kysely";
import { Generated,ColumnType } from "kysely";


export interface Line {
  id: Generated<number>;
  name: string;
  number: Number;
}

export interface Station {
  id: Generated<number>;
  name: string;
  line: Line;
  status: "resolved" | "problem";
}



export interface Event {
  id: Generated<number>;
  name: string;
  description:string;
  color: string;
  icon: string;
}

export interface Report {
  id: Generated<number>;
  station: Station;
  events: Event
  active: boolean;
  created_at: ColumnType<Date, string | undefined, never>;
  updated_at: ColumnType<Date, string | undefined, never>;
}

interface Database {
  reports: Report;
  stations: Station;
  events: Event;
  lines: Line;
}

export const db = createKysely<Database>();
