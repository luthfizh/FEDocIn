import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import HeroImg from "../assets/images/hero-img.png";

export default function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="z-10 h-full md:h-[100vh] bg-hijau-muda px-[50px] py-[50px] md:px-[100px] xl:px-[200px] xl:pb-[100px] flex flex-col-reverse md:grid md:grid-cols-2 md:gap-[100px] lg:gap-[200px] items-center">
        <div className="text-center text-hitam md:text-justify justify-center">
          <p className="text-3xl leading-normal font-bold lg:text-4xl lg:leading-normal">
            Temukan Dokter Pilihan <br /> Sesuai Kebutuhan Anda!
          </p>
          <p className="my-5 lg:leading-normal">
            Doc.In membantu Anda untuk membuat janji temu dengan dokter yang
            sesuai dengan kebutuhan Anda dan dengan proses yang mudah dan
            terintegrasi antar kedua belah pihak.
          </p>
          <Link to="how-it-works" smooth={true}>
            <button className="py-3 mt-3 px-[50px] lg:px-[75px]">
              Lihat Cara Kerja
            </button>
          </Link>
        </div>
        <img
          data-aos="fade-left"
          src={HeroImg}
          className="p-5 pt-0 md:p-0 xl:pt-30 xl:pb-10 xl:pr-0"
          alt=""
        ></img>
      </div>
    </>
  );
}
