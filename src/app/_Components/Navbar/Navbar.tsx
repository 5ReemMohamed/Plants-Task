"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";

interface NavLink {
  name: string;
  path: string;
}

const navLinks: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Shop", path: "/shop" },
  { name: "Contact Us", path: "/contactus" },
];

export default function Navbar() {

  const [menu, setMenu] = useState<boolean>(false);
  const path = usePathname();




  return (
    <>
      <header className="relative min-h-screen flex flex-col">
        <nav className="text-white flex p-4 justify-between lg:justify-around items-center z-50 border-b border-b-white/20">
          <div className="p-2 cursor-pointer">
            <Link href="/" className="text-white tracking-widest text-xl font-bold"><h1>Verdant Haven</h1></Link>
          </div>
          <div className="md:hidden cursor-pointer" onClick={() => setMenu(!menu)}>
            <FaBars size={24} />
          </div>
          <ul
            className={`md:flex gap-5 absolute md:static w-full md:w-auto left-0 top-16 p-4 lg:p-0 transition-all duration-500
              ${menu ? "block bg-black/90" : "hidden"} md:bg-transparent `}
          >
            {navLinks.map((link) => (
              <li key={link.path} className="p-2">
                <Link href={link.path} className={`${path === link.path ? "border-b-2 border-b-white" : ""}`}>
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="p-2">
              <Link href="/cart" className="relative flex items-center">
                <MdOutlineShoppingBag className="text-2xl" />
              </Link>
            </li>
          </ul>
        </nav>
        <div className="content absolute inset-0 flex flex-col gap-6 justify-center items-center text-center text-white">
          <p className="text-2xl">Welcome To The Verdant Haven</p>
          <h1 className="text-white text-3xl lg:text-6xl max-w-[65%] leading-10 xl:max-w-[50%] lg:leading-20">
            Let’s Bring the Spring to Your Home
          </h1>
          <Link
            href="/shop"
            className="border border-white bg-white text-[#352e23] outline-0 py-3 px-9 rounded-[2px] font-bold tracking-wider hover:-translate-y-1.5 transition-all duration-700"
          >
            Shop Now
          </Link>
        </div>
      </header>
    </>
  );
}
