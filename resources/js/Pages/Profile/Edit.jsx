import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import Header from "../../Components/Header.jsx"
import bg from "../../../assets/images/pexels-pixabay-271639.jpg"

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
        >
            <Header />

            <div className="py-28 bg-cover bg-fixed" style={{backgroundImage: `url(${bg})`}}>
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div  className="backdrop-blur-md p-4 shadow sm:rounded-lg sm:p-8">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="backdrop-blur-md shadow sm:rounded-lg sm:p-8">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="backdrop-blur-md  p-4 shadow sm:rounded-lg sm:p-8">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
