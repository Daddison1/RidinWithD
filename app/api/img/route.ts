import { NextResponse } from "next/server";

export const runtime = "nodejs";

function isValidHttpsUrl(u: string) {
  try {
    const url = new URL(u);
    return url.protocol === "https:";
  } catch {
    return false;
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const u = searchParams.get("u");

  if (!u) return new NextResponse("Missing u", { status: 400 });
  if (!isValidHttpsUrl(u))
    return new NextResponse("Only valid https URLs are allowed", { status: 400 });

  try {
    const upstream = await fetch(u, {
      headers: {
        // Helps with hosts that block unknown clients
        "User-Agent":
          "Mozilla/5.0 (compatible; RidinWithDDeals/1.0; +https://www.ridinwithd.com)",
        Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
        Referer: u, // BIG help for some CDNs
      },

      // While debugging, avoid caching a failure response
      cache: "no-store",
    });

    if (!upstream.ok) {
      return new NextResponse(`Upstream image error: ${upstream.status}`, {
        status: 502,
      });
    }

    const contentType = upstream.headers.get("content-type") ?? "image/jpeg";
    const bytes = await upstream.arrayBuffer();

    return new NextResponse(bytes, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        // Once confirmed working, you can switch cache to force-cache again
        "Cache-Control": "public, max-age=86400, s-maxage=604800, immutable",
      },
    });
  } catch (e) {
    return new NextResponse("Proxy failed", { status: 502 });
  }
}
