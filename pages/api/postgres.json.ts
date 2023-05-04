import { sql } from "@vercel/postgres";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { rows } = await sql`SELECT * from USERS`;
  res.status(200).json(rows);
}
