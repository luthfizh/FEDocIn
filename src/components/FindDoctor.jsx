import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { getDoctor } from "../services/doctor";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

export default function FindDoctor() {
  const [doctorList, setDoctorList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await getDoctor();
      if (response.error) {
        toast.error(response.message);
      } else {
        setDoctorList(response.data);
      }
    }
    fetchData();
  }, []);
  const [query,setQuery] = useState("")
  const filterData = () =>{
    return doctorList.filter((item) => item.name.toLowerCase().includes(query))
  }
  // console.log(query)
  return (
    <>
      <div className="bg-hijau-muda md:px-[200px] pb-[50px]">
        <h1 className="flex py-5 leading-10 font-bold text-2xl text-center justify-center md:text-3xl">
          Cari Dokter Sesuai Kebutuhan Anda!
        </h1>
        <div className="flex justify-between mx-[20px] md:mx-0 my-[20px]">
          <input
            className="w-[80%] border-2 border-hijau rounded-lg px-[10px] md:w-[100%]"
            type="text"
            placeholder="Cari Dokter"
            onChange={(e) => setQuery(e.target.value)}
          ></input>
          <button className="rounded-lg px-[20px] flex items-center gap-x-2 md:hidden">
            <BiSearch />
          </button>
        </div>
        <div className="mx-[20px] md:mx-0">
          <div>
            {filterData().map((item) => {
              return (
                <div key={item._id} className="flex border my-[20px] bg-putih drop-shadow-md">
                  <div className=" w-[250px] h-[250px]">
                    <img
                      src="https://asset-a.grid.id/crop/0x0:0x0/x/photo/2022/05/03/foto-cover-sinopsis-drama-korea-20220503065357.jpg"
                      className="h-full object-cover border-2"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-between p-[18px] w-full">
                    <div>
                      <p className="font-bold text-[16px]">{item.name}</p>
                      <p>{item.speciality}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-[16px] font-medium">
                        Rp{item.appointmentFee}
                      </p>
                      <NavLink to={"/doctor/" + item._id}>
                        <button className="px-[16px] py-[3px] rounded-md text-[16px]">
                          Buat Janji
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
