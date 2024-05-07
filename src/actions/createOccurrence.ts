"use server";
import { occurrence } from "@/types/occurrence";
import { z } from "zod";


export async function createOccurrence(data: z.infer<typeof occurrence>) {
  try {
    const parse = occurrence.safeParse({
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
