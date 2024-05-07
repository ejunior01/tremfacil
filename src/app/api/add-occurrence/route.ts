// import { NextRequest, NextResponse } from "next/server";
// import { db } from "@/schema/database";

// export async function POST(request: NextRequest) {
//   const { station, occurrence } = await request.json();

//   try {
//     const stationExist = await db
//       .selectFrom("stations")
//       .where("stations.id", "=", station)
//       .execute();

//     if (!stationExist) {
//       return NextResponse.json(
//         { message: "Estação não localizada" },
//         { status: 404 }
//       );
//     }

//     const occurrenceExist = await db
//       .selectFrom("events")
//       .where("events.id", "=", occurrence)
//       .execute();

//     if (!occurrenceExist) {
//       return NextResponse.json(
//         { message: "Tipo de ocorrência não localizada" },
//         { status: 404 }
//       );
//     }

//     const report = await db
//       .insertInto("reports")
//       .values({
//         active: true,
//         events: occurrence,
//         station: station,
//       })
//       .execute();

//     return NextResponse.json({ report }, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }
