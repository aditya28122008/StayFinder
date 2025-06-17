import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function GET(request) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const listings = await prisma.property.findMany({
    where: {
      hostId: session.user.id,
    },
  });
  return NextResponse.json(listings, { status: 200 });
}
