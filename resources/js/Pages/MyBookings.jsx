import Header from "../Components/Header.jsx"
import bg from "../../assets/images/pexels-pixabay-271639.jpg"

function MyBookings({ mybookings }) {
    console.log(mybookings)
    const pending = "bg-gray-400 rounded-lg text-white font-bold"
    const accepted = "bg-green-400 rounded-lg text-white font-bold"
    const canceled = "bg-red-400 rounded-lg text-white font-bold"
  return (
        <div className="w-full h-screen bg-cover bg-fixed pt-32" style={{backgroundImage: `url(${bg})`}}>
            <Header />
            <div className="mx-auto w-2/3 py-5 rounded-lg  bg-white/10 flex justify-center items-center">
                {
                    mybookings.length < 1 &&
                        <h1>This shit is empty</h1>
                }
                        <table className="w-2/3 border border-black">
                {
                    mybookings.length > 0 &&
                        <tbody>
                    {
                        mybookings.map((book, ind) => (
                            <tr key={ind}>
                              <td>
                                <h1 className="text-center">{book.check_in}</h1>
                              </td>
                                <td>
                                <h1 className="text-center">{book.check_out}</h1>
                            </td>
                                <td>
                                <h1 className={`text-center ${(book.status == "pending") && pending}
                                    ${(book.status == "accepted") && accepted}
                                    ${(book.status == "canceled") && canceled}
                                    `}>{book.status}</h1>
                            </td>
                            </tr>
                        ))

                    }

                    </tbody>

                }
                        </table>
            </div>

        </div>
  )
}

export default MyBookings
