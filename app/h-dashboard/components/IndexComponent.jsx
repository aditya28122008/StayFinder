"use client";
import { useTheme } from "next-themes";
import { Home, CalendarCheck, IndianRupee } from "lucide-react";
import Link from "next/link";

export default function IndexComponent({ totalProperties }) {
  const { theme } = useTheme();
  const metrics = [
    {
      icon: <Home className="w-6 h-6 text-cyan-500" />,
      title: "Total Listings",
      value: totalProperties,
      href: "/h-dashboard/listings",
      color: "bg-cyan-900/10 dark:bg-cyan-600/10",
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-green-500" />,
      title: "Bookings",
      value: 23,
      href: "#",
      color: "bg-green-900/10 dark:bg-green-600/10",
    },
    {
      icon: <IndianRupee className="w-6 h-6 text-yellow-500" />,
      title: "Earnings",
      value: "₹12,400",
      href: "#",
      color: "bg-yellow-900/10 dark:bg-yellow-600/10",
    },
  ];

  return (
    <section className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {metrics.map((item, i) => (
        <Link prefetch key={i} href={item.href} className="no-underline">
          <div
            className={`rounded-2xl cursor-pointer hover:shadow-lg dark:hover:shadow-cyan-300 dark:hover:shadow-md p-4 shadow-md backdrop-blur-md ${item.color} border border-white/10 dark:border-white/20 transition-all`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground dark:text-gray-400">
                  {item.title}
                </p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {item.value}
                </p>
              </div>
              <div className="p-2 bg-white/20 dark:bg-white/10 rounded-full">
                {item.icon}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
