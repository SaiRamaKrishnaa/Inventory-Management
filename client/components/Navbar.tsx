"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";
import { Menu, Moon, Settings, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  console.log(isSidebarCollapsed)
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
    console.log('sidebar toggled')
  };

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
    console.log('darkmode toggled')
  };

  return (
    <nav className="flex justify-between items-center w-full mb-3 transition-all duration-300">
      {/* LEFT SIDE */}
      <div className="flex justify-between items-center gap-5">
        <button
          className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex justify-between items-center gap-5">
          <div>
            <button onClick={toggleDarkMode}>
              {isDarkMode ? (
                <Sun className="cursor-pointer text-gray-500" size={24} />
              ) : (
                <Moon className="cursor-pointer text-gray-500" size={24} />
              )}
            </button>
          </div>
          <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />
          <div className="flex items-center gap-3 cursor-pointer">
            <Image src={"https://project-inventory-management-bucket.s3.ap-south-1.amazonaws.com/profile.jpeg"} alt="profile" 
            height={40}
            width={40}
            className="rounded-full h-full object-cover "
            />
            <span className="font-semibold">Sai Pittu</span>
          </div>
        </div>
        <Link href="/settings">
          <Settings className="cursor-pointer text-gray-500" size={24} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;