import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic"; // IMPORTANT: don't cache while debugging

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

  // accept both u= and url= just in case
  const u = searchParams.get("u") ?? searchParams.get("url");

  if (!u) return new NextResponse("Missing u (or url)", { status: 400 });
  if (!isValidHttpsUrl(u))
    return new NextResponse("Only valid https URLs are allowed", { status: 400 });

  try {
    const upstream = await fetch(u, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; RidinWithDDeals/1.0; +https://www.ridinwithd.com)",
        Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
        Referer: u,
        Origin: "https://www.ridinwithd.com",
      },
      cache: "no-store", // IMPORTANT: don't cache while debugging
      redirect: "follow",
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
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return new NextResponse("Proxy failed", { status: 502 });
  }
}
