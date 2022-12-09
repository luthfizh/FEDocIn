import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Icon1 from "../assets/images/icon1.svg";
import Icon2 from "../assets/images/icon2.svg";
import Icon3 from "../assets/images/icon3.svg";
import Icon4 from "../assets/images/icon4.svg";

export default function HowToUse() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section
        className="h-full lg:h-[100vh] py-[100px] lg:py-0 bg-putih items-center flex-col flex justify-center mx"
        name="how-it-works"
      >
        <p
          data-aos="fade-up"
          className="text-2xl md:text-3xl xl:text-4xl mb-12 font-poppins text-hitam text-center font-bold px-5"
        >
          4 Langkah Mudah Menggunakan Doc.In
        </p>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 xl:flex text-center gap-y-12 justify-center md:gap-x-20 md:mt-10"
        >
          <div className="flex flex-col items-center">
            <img
              src={Icon1}
              className="w-[25%] md:w-[35%] xl:w-[125px]"
              alt=""
            ></img>
            <p className="text-lg text-hijau font-poppins font-bold mt-5">
              1. Masuk ke Akun Anda
            </p>
            <p className="text-base text-hitam font-poppins font-[500] mt-3 md:mt-0 w-[280px]">
              Masuk atau buat akun dengan email agar dapat mengakses fitur
              Doc.In secara lengkap.
            </p>
          </div>
          <div className="flex flex-col items-center mt-0">
            <img
              src={Icon2}
              className="w-[25%] md:w-[35%] xl:w-[125px]"
              alt=""
            ></img>
            <p className="text-lg text-hijau font-poppins font-bold mt-5">
              2. Cari Dokter yang Sesuai
            </p>
            <p className="text-base text-hitam font-poppins font-[500] mt-3 md:mt-0 w-[280px]">
              Cari dokter dengan spesialisasi sesuai dengan kebutuhan Anda
              melalui fitur Cari Dokter.
            </p>
          </div>
          <div className="flex flex-col items-center mt-0">
            <img
              src={Icon3}
              className="w-[25%] md:w-[35%] xl:w-[125px]"
              alt=""
            ></img>
            <p className="text-lg text-hijau font-poppins font-bold mt-5">
              3. Rencanakan Janji Temu
            </p>
            <p className="text-base text-hitam font-poppins font-[500] mt-3 md:mt-0 w-[280px]">
              Rencanakan janji temu dengan dokter pilihan Anda melalui fitur
              Create Appointment.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={Icon4}
              className="w-[25%] md:w-[35%] xl:w-[125px]"
              alt=""
            ></img>
            <p className="text-lg text-hijau font-poppins font-bold mt-5">
              4. Isi Form Janji Temu
            </p>
            <p className="text-base text-hitam font-poppins font-[500] mt-3 md:mt-0 w-[280px]">
              Lengkapi formulir dan pantau respon terkait janji temu Anda pada
              menu My Appointment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
