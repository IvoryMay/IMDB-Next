"use client";

import React, { useState } from "react";
import NavbarItem from "./NavbarItem";
import { HiMenu, HiX } from "react-icons/hi";

const MENU_ITEMS = [
  { title: "Trending", param: "trending" },
  { title: "Top Rated", param: "top_rated" },
  { title: "Popular", param: "popular" },
  { title: "Upcoming", param: "upcoming" },
  { title: "Now Playing", param: "now_playing" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => setOpen(!open);

  return (
    <section className="p-3">
      {/* Mobile Menu Button */}
      <div className="flex sm:hidden">
        <button className="mt-2 ml-auto" onClick={handleMenu}>
          {open ? (
            <HiX className="text-2xl cursor-pointer hover:text-amber-400" />
          ) : (
            <HiMenu className="text-2xl cursor-pointer hover:text-amber-400" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="flex flex-col sm:hidden gap-6 p-4 mt-3 bg-amber-100 font-semibold dark:bg-gray-500">
          {MENU_ITEMS.map((item) => (
            <NavbarItem key={item.param} title={item.title} param={item.param} />
          ))}
        </div>
      )}

      {/* Desktop Navbar */}
      <div className="hidden sm:flex gap-8 p-3 justify-center mt-5 bg-amber-100 font-semibold dark:bg-gray-500">
        {MENU_ITEMS.map((item) => (
          <NavbarItem key={item.param} title={item.title} param={item.param} />
        ))}
      </div>
    </section>
  );
};

export default Navbar;
