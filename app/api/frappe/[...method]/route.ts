// GET function
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ method: string[] }> }
) {
  const { method } = await params;
  const methodPath = method.join(".");

  const queryString = new URL(req.url).searchParams.toString()

  const erpUrl = `https://erp.greenfieldsportszone.com/api/method/${methodPath} ${queryString ? `?${queryString}` : ""}`;

  const r = await fetch(erpUrl, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  const data = await r.json();
  return NextResponse.json(data, { status: r.status });
}








export async function POST(
  req: NextRequest,
  { params }: { params: { method: string[] } }
) {
  const { method } = params;
  const methodPath = method.join(".");

  const body = await req.json();

  const r = await fetch(
    `https://erp.greenfieldsportszone.com/api/method/${methodPath}`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  const data = await r.json();

  const response = NextResponse.json(data, { status: r.status });

  // ERP থেকে cookie আসলে forward করো
  const setCookie = r.headers.get("set-cookie");
  if (setCookie){
    response.headers.set("set-cookie", setCookie)
  }

  // sid আলাদাভাবে cookie তে save করো
  const sid = data?.message?.data?.sid;
  if (sid) {
    response.cookies.set("sid",sid, {
      httpOnly: true,    // JavaScript থেকে access করা যাবে না
      secure: false,     // production এ true করো
      path: "/",
      maxAge: 60 * 60 * 24 * 7  // ৭ দিন
    });
  }

  return response;
}

