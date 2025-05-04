import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import Header from '../Components/Header.jsx'

export default function Home() {
    const { auth } = usePage().props
    return (
        <div className="bg-gray-800 w-full h-screen">
            <Header />
            Hello from Home
        </div>
    );
}
