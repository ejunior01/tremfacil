import { z } from "zod";

export const occurrenceSchema = z.object({
  line: z.string({
    invalid_type_error: "Invalid line",
    required_error: "O campo ocorrência é linha",
  }),
  station: z.string({
    invalid_type_error: "Invalid station",
    required_error: "O campo ocorrência é estação",
  }),
  occurrence: z.string({
    invalid_type_error: "Invalid station",
    required_error: "O campo ocorrência é obrigatório",
  }),
});
