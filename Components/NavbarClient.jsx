"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { toast } from "react-toastify";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function NavbarClient({ session, userProp }) {
  const [user, setuser] = useState(userProp);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const toggleDropdown = () => {
    document.getElementById("profileMenu").classList.toggle("-translate-y-96");
  };
  const navItems = ["Stays", "Experiences", "Contact"];
  const becomeHost = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to become a host? This will redirect you to the host registration page."
    );
    if (confirmed) {
      const response = await fetch("/api/user/switch", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.success) {
        setuser({ ...user, isHost: true });
        toast.success(
          "Successfully became a host! Redirecting to the host Admin Pannel"
        );
        router.push("/h-dashboard"); // Redirect to host dashboard
      } else {
        console.error("Failed to become a host", data);
      }
    }
  };
  const becomeConsumer = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to switch to a consumer?"
    );
    if (confirmed) {
      const response = await fetch("/api/user/switch", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.success) {
        setuser({ ...user, isHost: false });
        toast.success("Successfully switched to a consumer!");
        router.push("/"); // Redirect to home page
      } else {
        console.error("Failed to switch to a consumer", data);
      }
    }
  };
  return (
    <>
      <header className="sticky top-0 z-50 bg-white/10 backdrop-blur-xl shadow-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between flex-col md:flex-row text-neutral-200">
          {/* Left: Navigation Links */}
          <div className="flex items-center gap-6 text-sm font-medium lg:order-1 order-2 lg:my-0 my-4">
            {navItems.map((item) => (
              <Link
                key={item}
                prefetch
                href={`/${
                  item.toLowerCase() === "stays" ? "" : item.toLowerCase()
                }`}
                className={`transition duration-200 text-gray-700 dark:text-gray-300 ${
                  pathname.includes("h-dashboard") && "md:opacity-0"
                }
                dark:hover:text-cyan-400 hover:text-cyan-600 hover:scale-x-105 dark:hover:scale-x-105`}
              >
                {item}
              </Link>
            ))}
          </div>

          <Link
            href="/"
            prefetch
            className={`text-2xl ${
              pathname.includes("h-dashboard") && "md:opacity-0"
            } font-bold tracking-wide bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-blue-500 hover:scale-105 transition-transform lg:order-2 order-1`}
          >
            STAY FINDER
          </Link>

          <div className="flex items-center gap-4 order-3">
            {session ? (
              <>
                <button
                  onClick={() => toggleDropdown()}
                  className="flex items-center gap-2 hover:bg-blue-400 from-blue-500 via-purple-400 to-cyan-400 hover:text-white text-gray-700 px-2 py-1 rounded-full cursor-pointer dark:bg-white/10  border border-white/20 dark:hover:bg-white/20 transition backdrop-blur-sm"
                >
                  <Image
                    height={200}
                    width={200}
                    alt=""
                    src={session.user.image}
                    className="h-10 w-10 rounded-full"
                  />
                  <span className="text-sm font-medium dark:text-neutral-100">
                    {session.user.name.split(" ")[0]}
                  </span>
                </button>
                <div
                  id="profileMenu"
                  className="absolute transition-transform duration-300 w-48 px-2 py-14 bg-white shadow-xl dark:shadow-none dark:bg-gray-600 dark:text-white text-gray-800 text-lg flex-col flex justify-center items-center top-24 -translate-y-96 rounded-2xl border border-purple-600 dark:border-white h-full"
                >
                  {user.isHost ? (
                    <>
                      <button onClick={() => toggleDropdown()}>
                        <Link
                          href={"/h-dashboard"}
                          prefetch
                          className="hover:underline hover:underline-offset-4"
                        >
                          Host Dashboard
                        </Link>
                        <hr className="border-purple-600 dark:border-white my-1 w-full" />
                      </button>
                      <button onClick={() => toggleDropdown()}>
                        <button
                          onClick={becomeConsumer}
                          className="cursor-pointer hover:underline hover:underline-offset-4"
                        >
                          Switch to Consumer
                        </button>
                        <hr className="border-purple-600 dark:border-white my-1 w-full" />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          becomeHost();
                          toggleDropdown();
                        }}
                        className="cursor-pointer hover:underline hover:underline-offset-4"
                      >
                        Become a Host
                      </button>
                      <hr className="border-purple-600 dark:border-white my-1 w-full" />
                    </>
                  )}
                  <button
                    onClick={() => signOut()}
                    className="cursor-pointer hover:underline hover:underline-offset-4"
                  >
                    Sign Out
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/auth"
                  prefetch
                  // onClick={toggleDropdown}
                  className="text-sm px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white shadow-md transition"
                >
                  LogIn / SignUp
                </Link>
              </>
            )}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="block dark:text-blue-600 text-blue-400 mt-1 ml-2 cursor-pointer"
                height="28"
                width="28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
