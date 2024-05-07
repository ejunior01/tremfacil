"use server";
import { z } from "zod";
import { occurrenceSchema } from "./schema";

export async function createOccurrence(data: z.infer<typeof occurrenceSchema>) {
  try {
    const parse = occurrenceSchema.safeParse({
      line: data.line,
      occurrence: data.occurrence,
      station: data.station,
    });

    if (!parse.success) {
      return {
        errors: parse.error.flatten().fieldErrors,
      };
    }

    const occurrence = parse.data;

    console.log({
      message: occurrence,
    });

    return {
      message: occurrence,
    };
  } catch (error) {
    return {
      message: "Failed create occurrence",
    };
  }
}
