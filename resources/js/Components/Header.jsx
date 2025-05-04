import { Link, usePage } from "@inertiajs/react";
function Header() {
    const { auth } = usePage().props
  return (
    <div>
            {
                auth.user ?
                    <div className="w-2/3 mx-auto">
                        <h1>You Are Logged in!</h1>
                        <Link href={route("profile.edit")}>Profile</Link>
                    <br/>
                        <Link href={route("logout")} method="post" as="button">Logout</Link>
                    </div>
                :
                    <div className="w-2/3 mx-auto">
                        <h1>You Are Logged out!</h1>
                        <Link href={route("login")}>Login</Link>
                    <br />
                        <Link href={route("register")}>Register</Link>
                    </div>
            }
      </div>
  )
}

export default Header
