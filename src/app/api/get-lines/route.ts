import { db } from "@/schema/database";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const lines = await db.selectFrom("lines").selectAll().execute();
    return NextResponse.json({ lines }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
