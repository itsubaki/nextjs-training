import kv from "@vercel/kv";
import { NextResponse } from "next/server";

export async function GET() {
  await kv.json.set("profile", "$", {
    name: "itsubaki",
    github: "https://github.com/itsubaki",
    timestamp: Date.now(),
  });

  const value = await kv.json.get("profile", "$");
  return NextResponse.json(value);
}
