import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request, { params }) {
  const { id } = params;

  const property = await prisma.property.findUnique({ where: { id } });
  if (!property) {
    return NextResponse.json(
      { message: "Property Not Found" },
      { status: 404 }
    );
  }

  const session = await auth();
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const reqParams = await request.json();
  const startDate = new Date(reqParams[0].startDate);
  const endDate = new Date(reqParams[0].endDate);

  // Check for overlapping bookings
  const overlappingBookings = await prisma.bookings.findMany({
    where: {
      propertyId: id,
      checkedOut: false,
      OR: [
        {
          startDate: { lte: endDate },
          endDate: { gte: startDate },
        },
      ],
    },
  });

  if (overlappingBookings.length > 0) {
    return NextResponse.json(
      { message: "Booking conflict with existing reservation." },
      { status: 409 }
    );
  }

  // No conflicts, proceed to create the booking
  await prisma.bookings.create({
    data: {
      startDate,
      endDate,
      userId: session.user.id,
      propertyId: property.id,
    },
  });

  return NextResponse.json({ success: true });
}
