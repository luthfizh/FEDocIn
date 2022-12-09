import React, { useState } from 'react'
import { FaEye, FaTrash } from "react-icons/fa";
import DeleteModal from "./DeleteModal";
import EditModal from "./Modal";

export default function ListAppointmentDoctor({ appointment, _token, openModal }) {
    let [isEditOpen, setIsEditOpen] = useState(false);
    function closeEditModal() {
        setIsEditOpen(!isEditOpen);
    }

    function openEditModal() {

        setIsEditOpen(!isEditOpen);
        console.log(isEditOpen)
    }

    let [isDeleteOpen, setIsDeleteOpen] = useState(false);
    function closeDeleteModal() {
        setIsDeleteOpen(!isDeleteOpen);
    }

    function openDeleteModal() {

        setIsDeleteOpen(!isDeleteOpen);
        console.log(isDeleteOpen)
    }
    return (
        <>
            <div key={appointment._id} className="grid grid-cols-6 bg-white">
                <p className="text-center py-[26px]">{appointment.subject}</p>
                <p className="text-center py-[26px]">
                    {appointment.creator_name.firstName}
                </p>
                <p className="text-center py-[26px]">{appointment.date}</p>
                <p className="text-center py-[26px]">{appointment.time}</p>
                <p className="text-center py-[26px]">{appointment.status}</p>
                <div className="flex justify-center items-center gap-x-3">
                    <button
                        onClick={openEditModal}
                        className="inline-flex bg-[#11F26B] items-center px-3 py-1 text-black rounded-md"
                    >
                        <FaEye className="mr-[7px]" /> Lihat
                    </button>
                    <button
                        onClick={openDeleteModal}
                        className="inline-flex bg-red-700 items-center px-3 py-1 text-white rounded-md hover:bg-red-500"
                    >
                        <FaTrash className="mr-[7px]" />
                        Hapus
                    </button>
                </div>
                {isEditOpen ? <> <EditModal show={true} closeModal={closeEditModal} item={appointment} id={appointment._id} token={_token} /></> : <></>}
                {isDeleteOpen ? <> <DeleteModal show={true} closeModal={closeDeleteModal} id={appointment._id} token={_token} /></> : <></>}
            </div>
        </>
    )
}
