"use client";

import React from "react";
import Link from "next/link";
import UserIcon from "../icons/UserIcon";
import { TbChecklist } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";
import { useSession, signOut } from "next-auth/react";

const UserLinks = () => {
  const { status } = useSession();
  return (
    <div>
      {status == "authenticated" ? (
        <div className="flex items-center gap-5">
          <Link
            href={"/orders"}
            className="items-center gap-2 text-2xl hover:scale-110 duration-500 hidden md:flex"
          >
            <TbChecklist />
            <span className="text-base font-bold">Orders</span>
          </Link>
          <button
            className="items-center gap-2 text-2xl hover:scale-110 duration-500 hidden md:flex"
            onClick={() => signOut()}
          >
            <LuLogOut />
            <span className="text-base font-bold uppercase">Log out</span>
          </button>
        </div>
      ) : (
        <Link
          href={"/login"}
          className="items-center gap-2 text-2xl hover:scale-110 duration-500 hidden md:flex"
        >
          <UserIcon />
          <span className="text-base font-bold">Account</span>
        </Link>
      )}
    </div>
  );
};

export default UserLinks;
