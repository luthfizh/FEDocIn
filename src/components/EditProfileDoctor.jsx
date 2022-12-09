import { React, useState } from "react";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";

export default function EditProfileDoctor() {
  const token = atob(Cookies.get("token"));
  const decoded = jwt_decode(token);

  const getData = () => {
    axios
      .get(`http://localhost:5000/doctors/${decoded.id}`, {
        headers: { "x-auth-token": token },
      })
      .then((res) => {
        // setLoading(false);
        const { name, speciality, email, bio, address, appointmentFee } =
          res.data;
        setQuery({
          ...query,
          name,
          speciality,
          email,
          bio,
          address,
          appointmentFee,
        });
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const [query, setQuery] = useState({
    name: "",
    speciality: "",
    email: "",
    bio: "",
    address: "",
    appointmentFee: "",
  });

  const handleChange = (text) => (e) => {
    setQuery({ ...query, [text]: e.target.value });
  };

  const handleSubmit = (e) => {
    const id = decoded.id;
    console.log(id);
    console.log(query);
    e.preventDefault();
    if (
      query.name &&
      query.speciality &&
      query.email &&
      query.bio &&
      query.address &&
      query.appointmentFee
    ) {
      axios
        .put(
          `http://localhost:5000/doctors/${decoded.id}`,
          {
            name: query.name,
            speciality: query.speciality,
            email: query.email,
            bio: query.bio,
            address: query.address,
            appointmentFee: query.appointmentFee,
          },
          {
            headers: {
              "x-auth-token": token,
            },
          }
        )
        .then((response) => setQuery(response.data));
      toast.success("Profil anda berhasil diubah!");
    } else {
      console.log("Isikan seluruh informasi yang dibutuhkan");
    }
    setTimeout(() => window.location.reload(), 2000);
  };

  return (
    <div className="bg-hijau-muda w-full items-center justify-center flex">
      <div className="bg-hitam p-10 rounded-[20px] w-[700px]">
        <h1
          className="text-center text-3xl text-putih"
          style={{ "text-shadow": "0px 0px 8.75px #FFDDD2" }}
        >
          Edit Profile
        </h1>
        <form onSubmit={handleSubmit}>
          <p className="font-poppins font-bold text-base text-putih mt-3">
            Name
          </p>
          <input
            placeholder="Enter your name"
            className="w-full h-[40px] text-base px-5 my-3 bg-[#878FB533] text-putih"
            value={query.name}
            onChange={handleChange("name")}
          ></input>
          <p className="font-poppins font-bold text-base text-putih mt-3">
            Speciality
          </p>
          <input
            placeholder="Enter your speciality"
            className="w-full h-[40px] text-base px-5 my-3 bg-[#878FB533] text-putih"
            value={query.speciality}
            onChange={handleChange("speciality")}
          ></input>
          <p className="font-poppins font-bold text-base text-putih mt-3">
            Email
          </p>
          <input
            placeholder="Enter your email address"
            className="w-full h-[40px] text-base px-5 my-3 bg-[#878FB533] text-putih"
            value={query.email}
            onChange={handleChange("email")}
          ></input>
          <p className="font-poppins font-bold text-base text-putih">Bio</p>
          <input
            placeholder="Enter your bio"
            className="w-full h-[40px] text-base px-5 my-3 bg-[#878FB533] text-putih"
            value={query.bio}
            onChange={handleChange("bio")}
          ></input>
          <p className="font-poppins font-bold text-base text-putih">Address</p>
          <input
            placeholder="Enter your address"
            className="w-full h-[40px] text-base px-5 my-3 bg-[#878FB533] text-putih"
            value={query.address}
            onChange={handleChange("address")}
          ></input>
          <p className="font-poppins font-bold text-base text-putih mt-3">
            Appointment Fee
          </p>
          <input
            placeholder="Enter your appointment fee"
            className="w-full h-[40px] text-base px-5 my-3 bg-[#878FB533] text-putih"
            value={query.appointmentFee}
            onChange={handleChange("appointmentFee")}
          ></input>
        </form>
        <button
          className="w-full rounded-none mt-[30px]"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
}
