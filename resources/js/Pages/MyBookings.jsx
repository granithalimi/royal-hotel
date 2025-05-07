import Header from "../Components/Header.jsx"
import bg from "../../assets/images/pexels-pixabay-271639.jpg"
import { useForm } from "@inertiajs/react"
import Footer from "../Components/Footer.jsx"

function MyBookings({ mybookings }) {
    const pending = "bg-gray-400 rounded-lg text-white font-bold"
    const accepted = "bg-green-400 rounded-lg text-white font-bold"
    const canceled = "bg-red-400 rounded-lg text-white font-bold"

    const { delete:destroy } = useForm()

    const cancel = e => {
        if(confirm("Are you sure you want to cancel?")){
            // e.preventDefault()
            destroy(route("booking.destroy", e))
        }
    }
  return (
        <div className="w-full h-screen bg-cover bg-fixed pt-32" style={{backgroundImage: `url(${bg})`}}>
            <Header />
            <div className="mx-auto w-2/3 py-5 rounded-lg mb-32 bg-white/10 flex justify-center items-center">
                {
                    mybookings.length < 1 ?
                        <h1 className="text-white text-xl font-bold">Booking list is empty</h1>
                    :
                    <table className="min-w-max w-11/12 table-auto border-spacing-y-4" >
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
                        mybookings.map((book, ind) => (
                            <tr key={ind} className="text-gray-600 text-sm leading-normal text-white">
                              <td className="py-3 px-6 text-left ">
                                {book.name}
                              </td>
                              <td className="py-3 px-6 text-center ">
                                {book.phone_number}
                              </td>
                              <td className="py-3 px-6 text-center ">
                                {book.check_in}
                              </td>
                              <td className="py-3 px-6 text-center">
                                {book.check_out}
                              </td>
                                <td className={`py-1 px-6 text-center`}>
                                    <div className={`py-1 px-2 ${(book.status == "pending") && pending}
                                    ${(book.status == "accepted") && accepted}
                                    ${(book.status == "canceled") && canceled}`}>{book.status}</div>
                                </td>
                                <td className="py-3 px-3 flex justify-end items-center">
                                    <button onClick={e => cancel(book.id)} className="px-3 py-1 bg-red-500 rounded-lg hover:bg-red-400">cancel</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                        </table>

                }
            </div>
            <Footer />
        </div>
  )
}

export default MyBookings
