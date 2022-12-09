import { React, useState } from "react";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";

export default function EditProfileUser() {
  const token = atob(Cookies.get("token"));
  const decoded = jwt_decode(token);

  const getData = () => {
    axios
      .get(`http://localhost:5000/users/current-user`, {
        headers: { "x-auth-token": token },
      })
      .then((res) => {
        // setLoading(false);
        const { firstName, lastName, email, username, address } = res.data;
        setQuery({ ...query, firstName, lastName, email, username, address });
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const [query, setQuery] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    address: "",
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
      query.firstName &&
      query.lastName &&
      query.email &&
      query.username &&
      query.address
    ) {
      axios
        .put(
          `http://localhost:5000/users/${decoded.id}`,
          {
            firstName: query.firstName,
            lastName: query.lastName,
            email: query.email,
            username: query.username,
            address: query.address,
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
      <div className="bg-hitam p-10 rounded-[20px]">
        <h1
          className="text-center text-3xl text-putih"
          style={{ "text-shadow": "0px 0px 8.75px #FFDDD2" }}
        >
          Edit Profile
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-x-5 mt-5">
            <p className="font-poppins font-bold text-base text-putih">
              First Name
            </p>
            <p className="font-poppins font-bold text-base text-putih">
              Last Name
            </p>
            <input
              placeholder="Enter your first name"
              className="w-[350px] h-[40px] text-base px-5 mt-3 bg-[#878FB533] text-putih"
              value={query.firstName}
              onChange={handleChange("firstName")}
            ></input>
            <input
              placeholder="Enter your last name"
              className="w-[350px] h-[40px] text-base px-5 mt-3 bg-[#878FB533] text-putih"
              value={query.lastName}
              onChange={handleChange("lastName")}
            ></input>
          </div>
          <p className="font-poppins font-bold text-base text-putih mt-3">
            Email
          </p>
          <input
            placeholder="Enter your email address"
            className="w-full h-[40px] text-base px-5 my-3 bg-[#878FB533] text-putih"
            value={query.email}
            onChange={handleChange("email")}
          ></input>
          <p className="font-poppins font-bold text-base text-putih">
            Username
          </p>
          <input
            placeholder="Enter your username"
            className="w-full h-[40px] text-base px-5 my-3 bg-[#878FB533] text-putih"
            value={query.username}
            onChange={handleChange("username")}
          ></input>
          <p className="font-poppins font-bold text-base text-putih">Address</p>
          <input
            placeholder="Enter your address"
            className="w-full h-[40px] text-base px-5 my-3 bg-[#878FB533] text-putih"
            value={query.address}
            onChange={handleChange("address")}
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
