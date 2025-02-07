import { useUser } from '@clerk/clerk-react';
import React from 'react';
import { Navigate } from 'react-router';

const AccountPage = () => {
    const { user, isLoaded, isSignedIn } = useUser();

    if (!isLoaded) {
        return (
            <main>
                <h1>My Account</h1>
                <p>Loading...</p>
            </main>
        );
    }

    if (!isSignedIn) {
        return <Navigate to="/signin" />;
    }

    return (
        <main className='flex flex-col justify-center items-center '>
            <h1 className='text-4xl font-bold text-center m-5'>My Account</h1>
            <p>Full Name: {user.fullName}</p>
            <p>Email: {user.primaryEmailAddress?.emailAddress}</p>
        </main>
    );
};

export default AccountPage;