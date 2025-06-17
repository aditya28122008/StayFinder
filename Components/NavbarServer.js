import React from "react";
import NavbarClient from "./NavbarClient";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

const NavbarServer = async () => {
  const session = await auth();
  let user;
  if (session) {
    user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });
  } else {
    user = null;
  }
  
  return (
    <>
      <NavbarClient session={session} userProp={user} />
    </>
  );
};

export default NavbarServer;
