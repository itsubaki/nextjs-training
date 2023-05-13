import kv from "@vercel/kv";
import { NextResponse } from "next/server";

// https://nextjs.org/docs/app/building-your-application/routing/router-handlers
export async function GET() {
  const value = await kv.get("profile");
  if (value) {
    return NextResponse.json(value);
  }

  const profile = {
    name: "itsubaki",
    github: "https://github.com/itsubaki",
    timestamp: new Date().toISOString(),
  };

  await kv.set("profile", profile, { ex: 60 });
  return NextResponse.json(profile);
}
