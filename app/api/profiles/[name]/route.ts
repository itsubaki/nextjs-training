import kv from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

// https://nextjs.org/docs/app/building-your-application/routing/router-handlers
export async function GET(
  _: NextRequest,
  context: { params: { name: string } }
) {
  const name = context.params.name;
  const value = await kv.get(name);
  if (value) {
    return NextResponse.json(value);
  }

  const profile = await fetch(`https://api.github.com/users/${name}`).then(
    (res) => {
      return res.json();
    }
  );

  const pretty = JSON.stringify(profile, null, 2);
  await kv.set(name, pretty, { ex: 60 });
  return NextResponse.json(pretty);
}
