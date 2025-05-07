import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, } from '@inertiajs/react';
import { useEffect, useState } from "react"
import Header from "../Components/Header.jsx"
import bg from "../../assets/images/pexels-pixabay-271639.jpg"
import Footer from "../Components/Footer.jsx"

export default function Dashboard({ bookings }) {
    const { data, setData, put, delete:destroy } = useForm({
        status: "pending"
    })
    const pending = "bg-gray-400 rounded-lg text-white font-bold"
    const accepted = "bg-green-400 rounded-lg text-white font-bold"
    const canceled = "bg-orange-400 rounded-lg text-white font-bold"

    const [pendingId, setPendingId] = useState(null);

    useEffect(() => {
        if (pendingId !== null) {
            put(route("booking.update", pendingId), {
                onFinish: () => setPendingId(null),
            });
        }
    }, [data.status]);

    const handleUpdate = (id, action) => {
        if(confirm(`Are you sure you want to update this booking to ${action}?`)){
            setData("status", action)
            setPendingId(id);
        }
    }

    const handleDelete = e => {
        if(confirm("Are you sure you want to delete this booking?")){
            destroy(route("booking.destroy", e))
        }
    }

    return (
      <div className=" w-full h-screen bg-cover bg-fixed" style={{backgroundImage: `url(${bg})`}}>
            <Header  />
            <h1 className="text-center text-4xl font-extrabold text-white pt-32">Bookings</h1>
            <div className="mx-auto w-2/3 py-5 mt-5 mb-32 rounded-lg  bg-white/10 flex justify-center items-center">
                <table className="min-w-max w-11/12 table-auto border-spacing-y-4">
                    <thead>
                        <tr className="text-gray-600 uppercase text-md leading-normal font-extrabold text-white">
                          <td className="py-3 px-6 text-left ">
                            Name
                          </td>
                          <td className="py-3 px-6 text-center ">
                            Phone Number
                          </td>
                          <td className="py-3 px-6 text-center">
                            Check In
                          </td>
                          <td className="py-3 px-6 text-center">
                            Check Out
                          </td>
                          <td className="py-3 px-6 text-center">
                            Status
                          </td>
                          <td className="py-3 px-6 text-end">
                            Buttons
                          </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.length > 0 &&
                            bookings.map((book, ind) => (
                                <tr key={ind} className="text-gray-600 text-sm leading-normal text-white">
                                    <td className="py-3 px-6 text-left">{book.name}</td>
                                    <td className="py-3 px-6 text-center">{book.phone_number}</td>
                                    <td className="py-3 px-6 text-center">{book.check_in}</td>
                                    <td className="py-3 px-6 text-center">{book.check_out}</td>
                                    <td className="py-3 px-6 text-center">
                                        <div className={`py-1 px-2 ${(book.status == "pending") && pending}
                                        ${(book.status == "accepted") && accepted}
                                        ${(book.status == "canceled") && canceled}`}>{book.status}</div>
                                    </td>
                                    <td className="py-3 px-6 text-center flex flex-col justify-center items-end">
                                        <div className="flex mb-2 gap-1">
                                            <button onClick={e => handleUpdate(book.id, "pending")} className="px-3 py-1 bg-gray-400 rounded-lg">pending</button>
                                            <button onClick={e => handleUpdate(book.id, "canceled")} className="px-3 py-1 bg-orange-400 rounded-lg">cancel</button>
                                        </div>
                                        <div className="flex gap-1">
                                            <button onClick={e => handleUpdate(book.id, "accepted")} className="px-3 py-1 bg-green-400 rounded-lg">accept</button>
                                            <button onClick={e => handleDelete(book.id)} className="px-3 py-1 bg-red-400 rounded-lg">delete</button>
                                        </div>
                                    </td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
            </div>
        <Footer />
        </div>
    );
}
