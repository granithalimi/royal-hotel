import { Link, usePage, } from "@inertiajs/react";
import { useEffect, useState } from "react"
import logo from "../../assets/images/roytal_hotel_logo.png"

function Header() {
    const { auth } = usePage().props
    const [top, setTop] = useState("-top-20")
    useEffect(() => {
        setTimeout(() => {
            setTop("top-2")
        }, 500);
    }, [])

  return (
      <div className={`w-4/5 h-20 backdrop-blur-sm bg-white/10 rounded-full absolute ${top} left-0 right-0 mx-auto flex justify-between items-center duration-500`}>
      <div className='flex items-center gap-4'>
        <Link href={route("home")} className="w-16 h-16 ms-4 bg-white rounded-full">
            <img src={logo} alt="royal hotel logo" />
        </Link>
        {
            (auth.user && auth.user.role == "admin") &&
            <Link href={route("dashboard")} className="text-gray-400 hover:text-white duration-300">Dashboard</Link>
        }
        <Link href={route("booking.index")} className="text-gray-400 hover:text-white duration-300">Book a Room</Link>
        {
            (auth.user) &&
            <Link href={route("mybooking")} className="text-gray-400 hover:text-white duration-300">My Bookings</Link>
        }

      </div>
            <div className="me-5 flex items-center justify-center">
                {
                    auth.user ?
                        <div>
                            <Link href={route("profile.edit")}>Profile</Link>
                        <br/>
                            <Link href={route("logout")} method="post" as="button">Logout</Link>
                        </div>
                    :
                        <div>
                            <Link href={route("login")}>Login</Link>
                        <br />
                            <Link href={route("register")}>Register</Link>
                        </div>
                }
            </div>
      </div>
  )
}

export default Header
