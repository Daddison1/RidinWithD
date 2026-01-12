import { NextResponse } from "next/server";

export const runtime = "nodejs"; // important for fetch + streaming

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const u = searchParams.get("u");

  if (!u) {
    return new NextResponse("Missing u", { status: 400 });
  }

  // basic safety: only allow http(s)
  if (!/^https?:\/\//i.test(u)) {
    return new NextResponse("Invalid URL", { status: 400 });
  }

  try {
    const res = await fetch(u, {
      headers: {
        // Some sites block unknown user agents; this helps.
        "User-Agent":
          "Mozilla/5.0 (compatible; RidinWithDDeals/1.0; +https://www.ridinwithd.com)",
        // Some CDNs behave better with an Accept header
        Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
      },
      // cache at the edge where possible
      cache: "force-cache",
    });

    if (!res.ok) {
      return new NextResponse("Upstream image error", { status: 502 });
    }

    const contentType = res.headers.get("content-type") ?? "image/jpeg";
    const bytes = await res.arrayBuffer();

    return new NextResponse(bytes, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        // cache for a day (tweak as you want)
        "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
      },
    });
  } catch {
    return new NextResponse("Proxy failed", { status: 502 });
  }
}
