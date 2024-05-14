"use server";

import { newOccurrenceSchema } from "@/types/newOccurrenceSchema";
import { z } from "zod";

export async function createOccurrence(
  data: z.infer<typeof newOccurrenceSchema>
) {
  try {
    const parse = newOccurrenceSchema.safeParse({
      line: data.line,
      occurrence: data.occurrence,
      station: data.station,
    });

    if (!parse.success) {
      return {
        errors: parse.error.flatten().fieldErrors,
      };
    }

    const occurrenceData = parse.data;

    return {
      message: occurrenceData,
    };
  } catch (error) {
    return {
      message: "Failed create occurrence",
    };
  }
}
