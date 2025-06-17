"use client";
import { useState } from "react";
import { Home, List, Calendar, Settings, Plus } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navItems = [
    { label: "Dashboard", icon: Home, href: "/h-dashboard" },
    { label: "Listings", icon: List, href: "/h-dashboard/listings" },
    { label: "Sell Property", icon: Plus, href: "/h-dashboard/sell-property" },
    { label: "Bookings", icon: Calendar, href: "/h-dashboard/bookings" },
    { label: "Settings", icon: Settings, href: "/h-dashboard/settings" },
  ];
  return (
    <>
      <div className="flex h-screen overflow-hidden bg-white dark:bg-[#0f0f0f] text-black dark:text-white">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-screen w-80 bg-white dark:bg-[#1a1a1a] border-r border-gray-200 dark:border-gray-800 transform transition-transform duration-300 z-50 flex items-center flex-col
        ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
        >
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 w-full text-center">
            <Link href="/">
              <h2 className="text-2xl font-bold text-blue-500">STAY FINDER</h2>
            </Link>
          </div>
          <nav className="flex flex-col gap-2 p-4 w-full">
            {navItems.map(({ label, icon: Icon, href }) => (
              <Link
                key={label}
                href={href}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition"
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Main Area */}
      </div>
    </>
  );
};

export default Sidebar;
