import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import bg from "../../assets/images/pexels-pixabay-271639.jpg"
import logo from "../../assets/images/roytal_hotel_logo.png"

export default function GuestLayout({ children }) {
    return (
        <div style={{backgroundImage: `url(${bg})`}} className={`flex min-h-screen bg-cover bg-fixed flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0`}>
            <div>
                <Link href={route("home")}>
                    <img src={logo} className="w-40 h-40" />
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden bg-transparent border border-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
