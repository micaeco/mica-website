import { getPrivacyPolicy } from "@/lib/github";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { locale } = await request.json();
    const content = await getPrivacyPolicy(locale as string);
    return NextResponse.json({ content });
  } catch {
    return NextResponse.json({ error: "INTERNAL_ERROR" }, { status: 500 });
  }
}