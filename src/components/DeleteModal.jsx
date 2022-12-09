import { Dialog, Transition } from "@headlessui/react";
import { toast } from "react-toastify";
import { Fragment } from "react";
import axios from "axios";

export default function DeleteModal(props) {
  const deleteData = async () => {
    await axios.delete(`http://localhost:5000/appointments/${props.id}`, {
      headers: { "x-auth-token": props.token },
    });
    props.closeModal();
    toast.success("Appointment berhasil dihapus!");
    setTimeout(() => window.location.reload(), 2000);
  };

  return (
    <>
      <Transition appear show={props.show} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={props.closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" transform overflow-hidden rounded-2xl bg-white p-7 w-[600px] text-left align-middle shadow-xl transition-all">
                  <div className="flex mt-2 justify-center">
                    <p>Apakah anda yakin menghapus data ini?</p>
                  </div>

                  <div className="flex flex-row justify-between mt-10 font-semibold">
                    <button
                      type="button"
                      className=" bg-red-700 hover:bg-red-500 w-[250px] rounded-md"
                      onClick={deleteData}
                    >
                      Hapus
                    </button>
                    <button
                      type="button"
                      className=" bg-gray-500 hover:bg-gray-400 w-[250px] rounded-md"
                      onClick={props.closeModal}
                    >
                      Tidak
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
