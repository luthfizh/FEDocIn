import React, { useState } from "react";
import DocinLogo from "../../assets/images/logo-docin.svg";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Auth from "./Auth";
import { Link } from "react-scroll";

export default function Header() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[90px] bg-hijau-muda">
      <div className="px-[50px] md:px-[100px] lg:px-[100px] xl:px-[200px] mx-auto flex justify-between items-center h-full">
        <div className="flex items-center">
          <a href="/">
            <img
              src={DocinLogo}
              alt="docin-logo"
              className="w-[65%] md:w-[100%] lg:w-[100%]"
            />
          </a>
        </div>
        <div className="hidden md:flex">
          <ul className="flex items-center font-medium">
            <li>
              <a href="/" className="hover:text-hijau">
                Beranda
              </a>
            </li>
            <li>
              <Link to="how-it-works" smooth={true}>
                <a href="/" className="hover:text-hijau">
                  Cara Kerja
                </a>
              </Link>
            </li>
            <Auth />
          </ul>
        </div>

        {/* Responsive Section */}
        <div
          className={
            nav
              ? "w-full bg-putih text-hitam absolute top-[90px] left-0 flex justify-center text-center z-20"
              : "absolute left-[-100%]"
          }
        >
          <ul className="font-medium">
            <li className="border-b-2 border-zinc-300 w-full">
              <a href="#home" className="hover:text-hijau">
                Beranda
              </a>
            </li>
            <li className="border-b-2 border-zinc-300 w-full">
              <a href="how-it-works" className="hover:text-hijau">
                Cara Kerja
              </a>
            </li>
            <Auth />
          </ul>
        </div>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <IoMdClose size={30} className="text-hitam bg-white" />
          ) : (
            <HiOutlineMenu size={30} className="text-hitam bg-whiteq" />
          )}
        </div>
      </div>
    </div>
  );
}
