import { Generated, ColumnType } from 'kysely';
import { Station } from './station';
import { Event } from './event';

export interface Report {
    id: Generated<number>;
    station: Station;
    events: Event
    active: boolean;
    created_at: ColumnType<Date, string | undefined, never>;
    updated_at: ColumnType<Date, string | undefined, never>;
}