"use client";

import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const pathToPageName = (path: string) => {
  if (path === "/") {
    return "Feed";
  }
  if (path.includes("profile")) {
    return "Profile";
  }
  return "Error";
};

const TopBar = () => {
  const pathname = usePathname();

  const hideHomeChevron = pathname === "/";
  return (
    <div className="h-16 w-full">
      <div className="bg-background w-full shadow p-4 flex justify-center items-center fixed">
        <Link
          className={`text-black w-8 hover:bg-background-dark p-1 rounded-full absolute left-2 ${
            hideHomeChevron && "hidden"
          }`}
          href={"/"}
        >
          <ChevronLeftIcon />
        </Link>{" "}
        <h1 className="text-lg">{pathToPageName(pathname)}</h1>
      </div>
    </div>
  );
};

export default TopBar;
