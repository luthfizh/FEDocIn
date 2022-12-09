import React from "react";
import DocinLogo from "../assets/images/logo-docin.svg";
import { BiEdit, BiLogOut } from "react-icons/bi";
import {
  HiOutlineHome,
  HiOutlineClipboardCheck,
  HiSearch,
} from "react-icons/hi";

export default function Sidebar() {
  const menu = [
    { name: "Beranda", href: "/", icon: <HiOutlineHome /> },
    {
      name: "Appointments",
      href: "/user-dashboard",
      icon: <HiOutlineClipboardCheck />,
    },
    { name: "Cari Dokter", href: "/find-doctor", icon: <HiSearch /> },
  ];
  const settings = [
    {
      name: "Edit Profile",
      href: "/user-edit-profile",
      icon: <BiEdit />,
    },
    { name: "Logout", href: "/", icon: <BiLogOut /> },
  ];
  return (
    <div className="h-screen border-r border-gray-200 w-64 px-9 py-9 space-y-16">
      <div className="flex flex-col items-center space-y-3">
        <img src={DocinLogo} alt="" />
        <div>Dashboard</div>
      </div>

      <div className="space-y-16">
        <div>
          <div className="mb-7 text-lg">Menu</div>
          <ul className="space-y-3">
            {menu.map((val, index) => {
              return (
                <li
                  className="px-2 py-2 flex flex-row items-center"
                  key={index}
                >
                  <a
                    href={val.href}
                    className="hover:text-hijau flex flex-row items-center"
                  >
                    <div className="mr-5">{val.icon}</div>
                    <div>{val.name}</div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <div className="mb-7 text-lg">Settings</div>
          <ul className="space-y-3">
            {settings.map((val, index) => {
              return (
                <li className="px-2 py-2" key={index}>
                  <a
                    href={val.href}
                    className="hover:text-hijau flex flex-row items-center"
                  >
                    <div className="mr-5">{val.icon}</div>
                    <div>{val.name}</div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
