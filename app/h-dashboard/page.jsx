import { auth } from "@/auth";
import Image from "next/image";
import React from "react";
import IndexComponent from "./components/IndexComponent";
import prisma from "@/lib/prisma";

const HostDashboard = async () => {
  const session = await auth();
  const properties = await prisma.property.findMany({
    where: {
      hostId: session.user.id,
    },
  });
  let totalBookings = [];
  for (const property of properties) {
    const booking = await prisma.bookings.findMany({
      where: { propertyId: property.id, checkedOut: false },
    });
    totalBookings = totalBookings.concat(booking);
  }
  const totalProperties = properties.length;
  return (
    <div>
      <header className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-[#0f0f0f]/80 backdrop-blur-md sticky top-0 z-30">
        {/* Hamburger */}
        <button
          // onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {/* {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />} */}
        </button>

        <h1 className="text-lg md:text-xl font-semibold text-blue-500">
          Host Dashboard
        </h1>

        {/* Right-side Avatar */}
        <div className="flex items-center gap-3">
          <Image
            src={session.user.image}
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
          <span className="hidden md:inline font-medium">
            {session.user.name.split(" ")[0]}
          </span>
        </div>
      </header>
      <IndexComponent
        totalProperties={totalProperties}
        totalBookings={totalBookings}
      />
    </div>
  );
};

export default HostDashboard;
