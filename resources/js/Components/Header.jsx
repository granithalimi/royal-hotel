import { Link, usePage, } from "@inertiajs/react";
import { useEffect, useState } from "react"
import logo from "../../assets/images/roytal_hotel_logo.png"
import { RiArrowDownWideFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

function Header() {
    const { auth } = usePage().props
    const [top, setTop] = useState("-top-20")
    const [dropDown, setDropDown] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setTop("top-2")
        }, 500);
    }, [])

    const dropDownClick = e => {
        setDropDown(p => !p)
        console.log(dropDown)
    }
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
            <div className="me-7 flex items-center justify-center">
                {
                    auth.user ?
                    <>
                        <span onClick={e => dropDownClick(e)} className={`relative text-gray-400 cursor-pointer px-3 py-2 bg-white/20 ${dropDown == false ? "rounded-lg" : "rounded-t-lg"} hover:text-white`}>
                            <div className="flex items-center gap-4">
                            <span>{auth.user.name}</span> <RiArrowDownWideFill/>
                    </div>

                            <div className={`px-1 py-2 bg-white/20 text-center ${dropDown == false ? "hidden" : ""} absolute top-full left-0 right-0 rounded-b-lg text-white`}>
                                <Link className="hover:bg-black/40 px-3 py-1" href={route("profile.edit")}>Profile</Link>
                            <br />
                                <Link className="hover:bg-black/40 px-3 py-1" href={route("logout")} method="post" as="button"href={route("logout")} method="post" as="button">Logout</Link>
                            </div>
                        </span>
                    </>

                    :
                    <>
                        <button onClick={e => dropDownClick(e)} className={`relative text-gray-400 cursor-pointer px-3 py-2 bg-white/20 ${dropDown == false ? "rounded-lg" : "rounded-t-lg"} hover:text-white`}>
                            <CgProfile className="w-20 text-gray-400 hover:text-white text-xl duration-300"/>
                            <div className={`px-1 py-2 bg-white/20 text-center ${dropDown == false ? "hidden" : ""} absolute top-full left-0 right-0 rounded-b-lg text-white`}>
                                <Link className="hover:bg-black/40 px-3 py-1" href={route("login")}>Login</Link>
                            <br />
                                <Link className="hover:bg-black/40 px-3 py-1" href={route("register")}>Register</Link>
                            </div>
                        </button>
                    </>
                }

            </div>
      </div>
  )
}

export default Header
