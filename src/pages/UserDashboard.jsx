import React from "react";
import UserAppointment from "../components/UserAppointment";
import UserSidebar from "../components/UserSidebar";

export default function UserDashboard() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-row">
      <UserSidebar />
      <UserAppointment />
    </div>
  );
}
