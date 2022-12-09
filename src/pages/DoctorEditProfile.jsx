import React from 'react'
import EditProfileDoctor from '../components/EditProfileDoctor'
import Sidebar from '../components/DoctorSidebar'

export default function DoctorEditProfile() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-row">
        <Sidebar />
        <EditProfileDoctor />
    </div>
  )
}
