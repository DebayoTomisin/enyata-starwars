import { NextResponse, NextRequest } from "next/server";

export const config = {
  matcher: ["/", "/login", "/starships/:path*", "/people/:path*", "/species/:path*"],
};

export function middleware(req: NextRequest, res: NextResponse) {
  const token = req.cookies.get("token")?.value;

  if (req.nextUrl.pathname.startsWith("/login")) {
    if (token) {
      req.nextUrl.pathname = "/";
      return NextResponse.redirect(req.nextUrl);
    }
  }

  if (
    !req.nextUrl.pathname.startsWith("/login")
  ) {
    if (!token) {
      req.nextUrl.pathname = "/login";
    } else {
      req.nextUrl.pathname = "/";
    }

    return NextResponse.redirect(req.nextUrl);
  }


}
