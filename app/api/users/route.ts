import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

// https://nextjs.org/docs/app/building-your-application/routing/router-handlers
export async function GET() {
  const { rows } = await sql`SELECT * from USERS`;
  return NextResponse.json(rows);
}
