import kv from "@vercel/kv";
import { NextResponse } from "next/server";

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
export const dynamic = "force-dynamic";

// https://nextjs.org/docs/app/building-your-application/routing/router-handlers
export async function GET() {
  try {
    const value = await kv.get("profile");
    if (value) {
      return NextResponse.json(value);
    }
  } catch (error) {
    return NextResponse.json(error);
  }

  const profile = {
    name: "itsubaki",
    github: "https://github.com/itsubaki",
    timestamp: Date.now(),
  };

  try {
    await kv.set("profile", profile, { ex: 60 });
  } catch (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(profile);
}
