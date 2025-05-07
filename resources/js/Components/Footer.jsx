import logo from "../../assets/images/roytal_hotel_logo.png"
import { Link } from "@inertiajs/react"
function Footer() {
  return (
    <div className="w-full h-[600px] bg-yellow-100 flex justify-center items-center">
        <Link href={route("home")}>
        <img src={logo} className="w-60 h-60" />
      </Link>
      </div>
  )
}

export default Footer
