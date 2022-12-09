import React from 'react'
import EditProfileUser from '../components/EditProfileUser'
import Sidebar from '../components/UserSidebar'

export default function UserEditProfile() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-row">
        <Sidebar />
        <EditProfileUser />
    </div>
  )
}
