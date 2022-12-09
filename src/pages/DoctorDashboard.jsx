import React from "react";
import DoctorAppointment from "../components/DoctorAppoinment";
import DoctorSidebar from "../components/DoctorSidebar";

export default function DoctorDashboard() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-row">
      <DoctorSidebar />
      <DoctorAppointment />
    </div>
  );
}
