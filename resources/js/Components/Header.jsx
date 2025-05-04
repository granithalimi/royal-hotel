import { Link, usePage, } from "@inertiajs/react";
import { useEffect } from "react"
import logo from "../../assets/images/roytal_hotel_logo.png"
function Header() {
    const { auth } = usePage().props
  return (
      <div className={`w-4/5 h-20 bg-black/30 bg-blur-full rounded-full absolute top-2 left-0 right-0 mx-auto flex justify-between items-center duration-300`}>
            <a href={route("home")} className="w-16 h-16 ms-4 bg-white rounded-full">
                <img src={logo} alt="royal hotel logo" />
            </a>
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
