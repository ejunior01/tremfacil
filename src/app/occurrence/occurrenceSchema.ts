import { z } from "zod";

export const occurrenceSchema = z.object({
  line: z.string({
    invalid_type_error: "Invalid line",
  }),
  station: z.string({ invalid_type_error: "Invalid station" }),
  occurrence: z.string({
    invalid_type_error: "Invalid station",
  }),
});
