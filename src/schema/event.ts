import { Generated } from "kysely";

export interface Event {
    id: Generated<number>;
    name: string;
    description:string;
    color: string;
    icon: string;
}