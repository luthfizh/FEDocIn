import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { Dropdown } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Auth() {
  const [isLoginUser, setIsLoginUser] = useState(false);
  const [isLoginDoctor, setIsLoginDoctor] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload = jwtDecode(jwtToken);
      if (payload.role === "User") {
        setIsLoginUser(true);
      } else if (payload.role === "Doctor") {
        setIsLoginDoctor(true);
      } else {
      }
    }
  }, []);

  const onLogout = () => {
    Cookies.remove("token");
    setIsLoginDoctor(false);
    setIsLoginUser(false);
    toast.success("Logout berhasil!");
    navigate("/");
    setTimeout(() => window.location.reload(), 2000);
  };

  if (isLoginUser) {
    return (
      <>
        <li className="border-b-2">
          <a href="/find-doctor" className="hover:text-hijau">
            Cari Dokter
          </a>
        </li>
        <div className="bg-hijau rounded-lg mx-5">
          <Dropdown label="Menu" color="">
            <Dropdown.Item className="bg-putih hover:bg-hijau">
              <a href="/user-dashboard">Dashboard</a>
            </Dropdown.Item>
            <Dropdown.Item className="bg-putih hover:bg-hijau">
              Edit Profile
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              onClick={onLogout}
              className="bg-putih hover:bg-hijau"
            >
              Sign out
            </Dropdown.Item>
          </Dropdown>
        </div>
      </>
    );
  } else if (isLoginDoctor) {
    return (
      <div className="bg-hijau rounded-lg mx-5">
        <Dropdown label="Menu" color="" className="">
          {/* <Dropdown.Header>
            <span className="block text-sm">{payload.name}</span>
            <span className="block text-sm font-medium truncate">
              {payload.email}
            </span>
          </Dropdown.Header> */}
          <Dropdown.Item className="bg-putih hover:bg-hijau">
            <a href="/doctor-dashboard">Dashboard</a>
          </Dropdown.Item>
          <Dropdown.Item className="bg-putih hover:bg-hijau">
            Edit Profile
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={onLogout} className="bg-putih hover:bg-hijau">
            Sign out
          </Dropdown.Item>
        </Dropdown>
      </div>
    );
  }

  return (
    <>
      <li className="border-b-2">
        <a href="find-doctor" className="hover:text-hijau">
          Cari Dokter
        </a>
      </li>
      <a href="/login-user">
        <button className="mx-5">Masuk</button>
      </a>
    </>
  );
}
