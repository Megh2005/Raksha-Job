"use client";
import Link from "next/link";
import { navLinks } from "@/constants";
import { FcMenu, FcBusinesswoman } from "react-icons/fc";
import { MdClose } from "react-icons/md";
import Button from "../ui/Button";
import { useState } from "react";
const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleOpenMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };
  return (
    <nav className="py-5 bg-transparent relative top-0 z-10 w-full">
      <div className="max-w-[1450px] w-[90%] mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <div className="flex items-center gap-3 sm:mx-[-10rem]">
            <FcBusinesswoman className="text-purple-700 text-3xl" />
            <h1 className="text-pink-700 font-bold capitalize sm:text-3xl">
              Raksha Jobs
            </h1>
          </div>
        </Link>

        <ul className="flex gap-16 mr-[10rem] items-center max-md:hidden">
          {navLinks.map((link, index) => (
            <Link href={link.route} key={index}>
              <li>{link.name}</li>
            </Link>
          ))}
        </ul>

        <div className="max-md:flex justify-center items-center gap-10 sm:mx-[-10rem]">
          <Link href={"/create"}>
            <Button>Post Job</Button>
          </Link>

          <div
            className="md:hidden text-3xl cursor-pointer text-black"
            onClick={handleOpenMobileMenu}
          >
            {openMobileMenu ? <MdClose /> : <FcMenu />}
          </div>

          {openMobileMenu && (
            <ul className="md:hidden bg-purple-600 absolute top-14 right-5 px-4 py-6 text-center text-white rounded-md flex flex-col gap-3 shadow-md">
              {navLinks.map((link, index) => (
                <Link
                  href={link.route}
                  key={index}
                  onClick={() => setOpenMobileMenu(false)}
                >
                  <li>{link.name}</li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
