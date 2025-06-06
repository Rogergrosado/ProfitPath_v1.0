import { NextRequest, NextResponse } from "next/server";
// Minimal Firebase admin setup for verifying tokens
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const app = initializeApp({ credential: applicationDefault() });

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    await getAuth(app).verifyIdToken(token);
    return NextResponse.next();
  } catch (err) {
    console.error("Auth verification failed", err);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/products/:path*"],
};
