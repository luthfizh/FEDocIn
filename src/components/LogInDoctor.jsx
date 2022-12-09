import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { setLoginDoctor } from "../services/auth";
import Cookies from "js-cookie";

export default function LogInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmit = async () => {
    const data = {
      email,
      password,
    };
    if (!email || !password) {
      toast.error("Email dan password wajib diisi!");
    } else {
      const response = await setLoginDoctor(data);
      if (response.error) {
        toast.error(response.message);
      } else {
        toast.success("Login sukses!");
        const { token } = response.data;
        const tokenBase64 = btoa(token);
        Cookies.set("token", tokenBase64, { expires: 1 });
        navigate("/");
      }
    }
  };

  return (
    <>
      <div
        className="h-[100vh] flex items-center justify-center"
        style={{
          background: "linear-gradient(90deg, #0199A7 0%, #B4DCDA 100%)",
        }}
      >
        <form
          className="flex-col flex px-[30px] w-[350px] md:w-[600px] xl:w-[800px] py-[30px] xl:px-[90px] xl:py-[45px] rounded-[18px]"
          style={{
            background:
              " linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), rgba(22, 47, 61, 0.6)",
          }}
        >
          <h5 className="text-center font-bold text-[20px] mb-[20px] xl:text-[35px] text-white xl:mb-[50px]">
            Log In Doctor
          </h5>
          <div className="xl:gap-x-5 flex-col xl:flex-row flex"></div>
          <p className="font-bold text-[12px] text-putih mb-[10px]">E-mail</p>
          <input
            placeholder="Enter your email address"
            className="mb-[10px] bg-[#878FB533] xl:p-[10px] p-[5px] text-putih"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
          <p className="font-bold text-[12px] text-putih mb-[10px]">Password</p>
          <input
            type="password"
            placeholder="Enter your password"
            className="mb-[10px] bg-[#878FB533] p-[10px] text-putih"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
          <button
            onClick={onSubmit}
            type="button"
            className="rounded-none my-[20px] xl:my-[40px] text-[#EDF6F9] bg-[#0199A7] px-[44px] py-[9px]
            hover:shadow-lg"
          >
            Log In
          </button>
          <p className="text-center text-[#83C5BE] text-[12px] xl:text-[15px]">
            Don't have an account?{" "}
            <span className="text-putih">
              <a href="/signup-doctor">Sign Up</a>
            </span>
          </p>
        </form>
      </div>
    </>
  );
}
