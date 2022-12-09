import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DoctorDetails(props) {
  const params = useParams();
  const [doctors, setDoctors] = useState({});

  const [formData, setFormData] = useState({
    subject: "",
    explanation: "",
    date: "",
    time: "",
    receiver_id: `${params.id}`,
  });
  const { subject, explanation, date, time, receiver_id, textChange } =
    formData;

  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = (e) => {
    const token = atob(Cookies.get("token"));
    e.preventDefault();
    if (subject && explanation && date && time) {
      const reqHeaders = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "x-access-token",
          "x-access-token": token,
        },
      };
      console.log(token);
      axios.defaults.headers.common["x-auth-token"] = token;
      setFormData({ ...formData, textChange: "Submitting" });
      axios
        .post(
          `http://localhost:5000/appointments/create-request`,
          {
            subject,
            explanation,
            date,
            time,
            receiver_id,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Headers": "x-access-token",
              "x-access-token": token,
            },
          }
        )
        .then((res) => {
          setFormData({
            ...formData,
            subject: "",
            explanation: "",
            date: "",
            time: "",
          });

          console.log("success");
        })
        .catch((err) => {
          setFormData({
            ...formData,
            subject: "",
            explanation: "",
            date: "",
            time: "",
          });
          console.log(err.response);
        });
      toast.success("Janji temu berhasil dibuat!");
    } else {
      console.log("Isikan seluruh informasi yang dibutuhkan");
    }
  };
  useEffect(() => {
    async function fetchData() {
      const response = await axios(
        `http://localhost:5000/doctors/${params.id}`
      );
      setDoctors(response.data);
    }
    fetchData();
  }, [params.id]);

  return (
    <>
      <div className="bg-hijau-muda h-full py-[100px] px-5 lg:px-[100px] xl:px-[150px]">
        <ToastContainer />
        <div className="text-hitam text-center mb-10 md:mb-[100px]">
          <h2 className="xl:text-4xl">
            {doctors.name ? doctors.name : "Loading . . . . "}
          </h2>
          <h4 className="font-medium xl:text-2xl">
            {doctors.speciality ? doctors.speciality : "Loading . . . . "}
          </h4>
        </div>
        <div className="flex flex-col lg:flex-row md:justify-between">
          <form className="bg-putih mb-10 lg:w-[450px] xl:w-[700px] h-[480px] border-2 border-hijau">
            <div className="p-5 border-b-2 border-hitam h-[120px]">
              <h5 className="mb-1 text-hijau">Bio Dokter</h5>
              <p className="text-justify">
                {doctors.bio ? doctors.bio : "Loading . . . . "}
              </p>
            </div>
            <div className="p-5 border-b-2 border-hitam h-[120px]">
              <h5 className="mb-1 text-hijau">Alamat</h5>
              <p>{doctors.address ? doctors.address : "Loading . . . . "}</p>
            </div>
            <div className="p-5 border-b-2 border-hitam h-[120px]">
              <h5 className="mb-1 text-hijau">Email</h5>
              <p>{doctors.email ? doctors.email : "Loading . . . . "}</p>
            </div>
            <div className="p-5 h-[120px]">
              <h5 className="mb-1 text-hijau">Harga</h5>
              <p>
                Rp
                {doctors.appointmentFee
                  ? doctors.appointmentFee
                  : "Loading . . . . "}
              </p>
            </div>
          </form>
          <form
            onSubmit={handleSubmit}
            className="bg-hitam p-5 lg:w-[450px] xl:w-[700px] h-[480px]"
          >
            <h5 className="text-putih text-center mb-5">Buat Janji Temu</h5>
            <div className="mb-5">
              <label
                htmlFor="subjek"
                className="block mb-2 text-md font-semibold text-white"
              >
                Subjek
              </label>
              <input
                type="text"
                value={subject}
                onChange={handleChange("subject")}
                id="subjek"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Masukkan subjek atau tipe janji temu"
                required
              ></input>
            </div>
            <div className="mb-6">
              <label
                htmlFor="deskripsi"
                className="block mb-2 text-md font-semibold text-white"
              >
                Deskripsi
              </label>
              <input
                type="text"
                value={explanation}
                onChange={handleChange("explanation")}
                id="explanation"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Jelaskan detail keluhan kesehatan anda"
                required
              ></input>
            </div>
            <div className="flex flex-row justify-between">
              <div className="mb-6">
                <label
                  htmlFor="date"
                  className="block mb-2 text-md font-semibold text-white"
                >
                  Pilih Tanggal
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={handleChange("date")}
                  id="date"
                  className="md:w-[350px] xl:w-[300px] shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                ></input>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="time"
                  className="block mb-2 text-md font-semibold text-white"
                >
                  Pilih Waktu
                </label>
                <input
                  type="time"
                  value={time}
                  onChange={handleChange("time")}
                  id="time"
                  className="md:w-[350px] xl:w-[300px] shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                ></input>
              </div>
            </div>
            <div className="flex justify-between mb-6">
              <label className="text-md font-semibold text-white">Harga</label>
              <label className="text-md font-semibold text-[#24E8DE]">
                Rp
                {doctors.appointmentFee
                  ? doctors.appointmentFee
                  : "Loading . . . . "}
              </label>
            </div>
            <button
              type="submit"
              className="rounded-none w-full text-sm font-semibold text-[#EDF6F9] bg-[#0199A7] hover:shadow-lg"
            >
              Buat Janji Temu
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
