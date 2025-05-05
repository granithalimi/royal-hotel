import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Header from "../Components/Header.jsx"
import bg from "../../assets/images/pexels-pixabay-271639.jpg"

export default function Dashboard() {
    return (
      <div className="bg-red-800 w-full h-screen bg-cover bg-fixed" style={{backgroundImage: `url(${bg})`}}>
            <Header  />

        </div>
    );
}
