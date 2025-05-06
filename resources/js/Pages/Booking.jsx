import Header from "../Components/Header.jsx"
import bg from "../../assets/images/pexels-pixabay-271639.jpg"
import { useForm } from "@inertiajs/react"
function Booking() {
    const { data, setData, post, } = useForm({
        name: "",
        check_in: "",
        check_out: "",
        phone: "",
    })

    const handleSubmit = e => {
        e.preventDefault()
        post(route("booking.store"))
    }
  return (
      <div className="bg-red-800 w-full h-screen bg-cover bg-fixed pt-32" style={{backgroundImage: `url(${bg})`}}>
        <Header />
      <div className="mx-auto w-2/3 py-5 rounded-lg  bg-white/10 flex justify-center items-center">
      <form onSubmit={e => handleSubmit(e)} className="flex flex-col items-center gap-3">
        <label>Name:</label>
        <input type="text" name="name" onChange={e => setData("name", e.target.value)} className="bg-transparent border border-white rounded-lg" placeholder="Name" />
        <label>Check in:</label>
        <input type="date" name="check_in" onChange={e => setData("check_in", e.target.value)} className="bg-transparent border-white rounded-lg" />
        <label>Check out:</label>
        <input type="date" name="check_out" onChange={e => setData("check_out", e.target.value)}className="bg-transparent border-white rounded-lg" />
        <label>Phone Number:</label>
        <input type="phone" name="phone" onChange={e => setData("phone", e.target.value)} className="bg-transparent border border-white rounded-lg" placeholder="xxx-xxx-xxx" />
        <button type="submit" className="py-1 px-3 bg-lime-500 rounded-lg text-white font-bold hover:bg-lime-600 duration-300">Book</button>
      </form>

      </div>

      </div>
  )
}

export default Booking
