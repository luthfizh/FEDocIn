import React, { useState } from "react";
import { setSignUpDoctor } from "../services/auth";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [address, setAddress] = useState("");
  const [appointmentFee, setAppointmentFee] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmit = async () => {
    const data = {
      name,
      email,
      speciality,
      password,
      address,
      appointmentFee,
    };
    if (
      !name ||
      !email ||
      !speciality ||
      !password ||
      !address ||
      !appointmentFee
    ) {
      toast.error("Semua form wajib diisi!");
    } else {
      const response = await setSignUpDoctor(data);
      if (response.error) {
        toast.error(response.message);
      } else {
        toast.success("Signup sukses!");
        navigate("/login-doctor");
      }
    }
  };

  return (
    <>
      <div
        className="h-[100vh] flex items-center justify-center "
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
            Sign Up Doctor
          </h5>
          <div className="flex flex-col">
            <p className="font-bold text-[12px] text-putih mb-[10px]">
              Full Name (with degree)
            </p>
            <input
              placeholder="Enter your first name"
              className="mb-[10px] bg-[#878FB533] xl:p-[10px] p-[5px] text-putih"
              value={name}
              onChange={(event) => setName(event.target.value)}
            ></input>
          </div>
          <p className="font-bold text-[12px] text-putih mb-[10px]">E-mail</p>
          <input
            type="email"
            placeholder="Enter your email address"
            className="mb-[10px] bg-[#878FB533] xl:p-[10px] p-[5px] text-putih"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
          <p className="font-bold text-[12px] text-putih mb-[10px]">
            Speciality
          </p>
          <input
            type="speciality"
            placeholder="Enter your speciality"
            className="mb-[10px] bg-[#878FB533] xl:p-[10px] p-[5px] text-putih"
            value={speciality}
            onChange={(event) => setSpeciality(event.target.value)}
          ></input>
          <p className="font-bold text-[12px] text-putih mb-[10px]">Address</p>
          <input
            type="address"
            placeholder="Enter your address"
            className="mb-[10px] bg-[#878FB533] p-[10px] text-putih"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          ></input>
          <p className="font-bold text-[12px] text-putih mb-[10px]">
            Appointment Fee (in rupiah)
          </p>
          <input
            type="appointmentFee"
            placeholder="Set your appointment fee"
            className="mb-[10px] bg-[#878FB533] p-[10px] text-putih"
            value={appointmentFee}
            onChange={(event) => setAppointmentFee(event.target.value)}
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
            Sign Up
          </button>
          <p className="text-center text-[#83C5BE] text-[12px] xl:text-[15px]">
            Already have an account?{" "}
            <span className="text-putih">
              <a href="/login-doctor">Login</a>
            </span>
          </p>
        </form>
      </div>
    </>
  );
}
