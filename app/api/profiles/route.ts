import kv from "@vercel/kv";
import { NextResponse } from "next/server";

// https://nextjs.org/docs/app/building-your-application/routing/router-handlers
export async function GET() {
  const value = await kv.json.get("profile", "$");
  if (value) {
    return NextResponse.json(value);
  }

  const profile = {
    name: "itsubaki",
    github: "https://github.com/itsubaki",
    timestamp: Date.now(),
  };

  await kv.json.set("profile", "$", profile);
  return NextResponse.json(profile);
}
