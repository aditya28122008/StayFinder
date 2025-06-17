import { auth } from "@/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import SideBarClient from "./components/SideBarClient";

export const metadata = {
  title: "Host Dashboard - Stay Finder",
};

async function Layout({ children }) {
  const session = await auth();

  if (session) {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });
    if (!user.isHost) {
      redirect("/");
    }
    return (
      <>
        <SideBarClient />
        <div className="flex-1 flex flex-col overflow-auto absolute right-0 sm:top-18 top-36 md:left-80 left-0">
          <main className="flex-1 p-6 overflow-y-auto">{children}</main>
        </div>
      </>
    );
  } else {
    redirect("/auth");
  }
}

export default Layout;
