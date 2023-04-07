import React from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';

const GuestLayout = () => {

    const { currentUser, userToken } = useStateContext();

    if (userToken) {
        return <Navigate to='/admin/dashboard' />
    }

    return (
        <div className='py-5 px-5'>
            <Outlet />
        </div>
    )
}

export default GuestLayout
