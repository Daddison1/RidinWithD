import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const u = searchParams.get("u");

  if (!u) return new NextResponse("Missing u", { status: 400 });
  if (!/^https?:\/\//i.test(u)) return new NextResponse("Invalid URL", { status: 400 });

  try {
    const upstream = await fetch(u, {
      headers: {
        // Helps when some hosts block unknown clients
        "User-Agent":
          "Mozilla/5.0 (compatible; RidinWithDDeals/1.0; +https://www.ridinwithd.com)",
        Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
      },
      cache: "force-cache",
    });

    if (!upstream.ok) {
      return new NextResponse("Upstream image error", { status: 502 });
    }

    const contentType = upstream.headers.get("content-type") ?? "image/jpeg";
    const bytes = await upstream.arrayBuffer();

    return new NextResponse(bytes, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control":
          "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
      },
    });
  } catch {
    return new NextResponse("Proxy failed", { status: 502 });
  }
}

