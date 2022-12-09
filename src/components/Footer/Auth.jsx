import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsLogin(true);
    }
  }, []);
  if (isLogin) {
    return;
  }
  return (
    <>
      <div>
        <h5 className="mb-6 font-semibold text-gray-900">
          Apakah Anda Seorang Dokter?
        </h5>
        <ul className="text-gray-600">
          <li className="mb-4 p-0 py-1 font-medium">
            <a href="/signup-doctor">
              <button>Daftar</button>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
