import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  const session = await auth();
  if (session) {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });
    if (user.isHost) {
      await prisma.user.update({
        where: { email: session.user.email },
        data: { isHost: false },
      });
    } else {
      await prisma.user.update({
        where: { email: session.user.email },
        data: { isHost: true },
      });
    }
    return NextResponse.json({ success: true }, { status: 200 });
  } else {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
