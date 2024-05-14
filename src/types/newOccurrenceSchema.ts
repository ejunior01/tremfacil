import { z } from "zod";

<<<<<<<< HEAD:src/types/occurrence.ts
export const occurrence = z.object({
========
export const newOccurrenceSchema = z.object({
>>>>>>>> view-change:src/types/newOccurrenceSchema.ts
  line: z.string({
    invalid_type_error: "Invalid line",
    required_error: "O campo é linha obrigatório",
  }),
  station: z.string({
    invalid_type_error: "Invalid station",
    required_error: "O campo é estação obrigatório",
  }),
  occurrence: z.string({
    invalid_type_error: "Invalid occurrence",
    required_error: "O campo ocorrência é obrigatório",
  }),
});
