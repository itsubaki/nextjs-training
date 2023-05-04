import kv from "@vercel/kv";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await kv.json.set("profile", "$", {
    name: "tsubaki",
    github: "https://github.com/itsubaki",
    timestamp: Date.now(),
  });

  const value = await kv.json.get("profile", "$");
  res.status(200).json(value);
}
