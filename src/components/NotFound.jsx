import React from "react";
import NotFoundImg from "../assets/images/404.png";

export default function NotFound() {
  return (
    <>
      <div className="bg-hijau-muda pt-[100px] pb-[200px] px-10 md:h-full lg:py-[100px] md:px-[100px] flex items-center flex-col">
        <p className="text-xl font-bold text-hitam mb-10 md:text-3xl text-center">
          Halaman Tidak Ditemukan!
        </p>
        <div>
          <img src={NotFoundImg} alt=""></img>
        </div>
        <a className="pt-5 hover:text-hijau" href="/">
          Kembali ke Beranda
        </a>
      </div>
    </>
  );
}
