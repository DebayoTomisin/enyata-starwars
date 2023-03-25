import { NextResponse, NextRequest } from "next/server";

export const config = {
  matcher: ["/", "/login", "/starships/:path*", "/people/:path*", "/species/:path*"],
};

export function middleware(req: NextRequest, res: NextResponse) {
  const token = req.cookies.get("email")?.value;

  if (req.nextUrl.pathname.startsWith("/login")) {
    if (token) {
      req.nextUrl.pathname = "/";
      return NextResponse.redirect(req.nextUrl);
    }
  }

  if (req.nextUrl.pathname === "/overview") {
    req.nextUrl.pathname = "/";
    return NextResponse.redirect(req.nextUrl);
  }

  if (
    !req.nextUrl.pathname.startsWith("/login")
  ) {
    if (!token) {
      req.nextUrl.pathname = "/login";
    } else {
      return NextResponse.next()
    }

    return NextResponse.redirect(req.nextUrl);
  }


}
