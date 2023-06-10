import { NextRequest, NextResponse } from "next/server";
import { get } from "@vercel/edge-config";

export const config = {
  matcher: ['/']
}

export async function middleware(req: NextRequest) {
  const isInMaintenanceMode = process.env.NEXT_PUBLIC_IS_IN_MAINTENANCE_MODE === 'true';

  if (isInMaintenanceMode) {
    req.nextUrl.pathname = `/maintenance`
    return NextResponse.rewrite(req.nextUrl)
  }
}

