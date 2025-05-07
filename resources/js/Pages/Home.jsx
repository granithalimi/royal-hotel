import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from "react"
import Header from '../Components/Header.jsx'
import AboutUs from "../Components/AboutUs.jsx"
import OurQuality from "../Components/OurQuality.jsx"
import '../../assets/style.css'
import front from "../../assets/images/home_bg.jpg"
import bg from "../../assets/images/pexels-pixabay-271639.jpg"
import Footer from "../Components/Footer.jsx"

export default function Home() {
    const [left, setLeft] = useState("-left-[30%] blurr")
    useEffect(() => {
        setTimeout(() => {
            setLeft("left-28")
        }, 750);
    }, [])

    const { auth } = usePage().props
    return (
        <div className="w-full bg-cover bg-center bg-fixed" style={{backgroundImage: `url(${bg})`}}>
            <Header />
            <div style={{backgroundImage: `url(${front})`}} className="w-full h-screen bg-center bg-cover"></div>
            <div className={`absolute ${left} bottom-80 duration-1000`}>
                <h1 className="text-white font-extrabold text-5xl">Welcome to</h1>
                <h1 className="text-yellow-200 font-extrabold text-7xl mb-4 mt-2 great-vibes-regular">Royal Hotel</h1>
                <Link href={route("booking.index")} className="px-5 py-2 rounded-lg bg-yellow-200 font-bold text-2xl hover:bg-black hover:text-white duration-500">Book a Room Now!</Link>
            </div>
            <div className="w-full h-screen bg-yellow-100">
                <AboutUs />
        </div>
            <div className="w-full h-[500px] flex items-center justify-center">
                <div className="w-2/3">
            <h1 className="text-center text-5xl text-white font-bold cormorant-upright-light">Where Luxury Meets Comfort – Your Perfect Escape Awaits.</h1>
        </div>
        </div>
            <div className="w-full h-screen bg-yellow-100">
                <OurQuality />
        </div>
        <Footer />
        </div>
    );
}
