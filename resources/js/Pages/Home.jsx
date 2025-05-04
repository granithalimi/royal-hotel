import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Home() {
    const { auth } = usePage().props
    return (
        <>
            Hello from Home
            {
                auth.user ?
                    <>
            <Link href={route('logout')} method="post" as="button">Log Out</Link>
            <Link href={route('profile')} method="post" as="button">Profile</Link>
                    </> :
                    <>
                <Link href={route("login")}>Login</Link>
                <Link href={route("register")}>Register</Link>
                    </>
            }
        </>
    );
}
