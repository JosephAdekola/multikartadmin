// ErrorPage.jsx
import React from 'react';
import { NavLink, useNavigate, useRouteError } from 'react-router-dom';
import ButtonComp from './ButtonComp';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    const navigate = useNavigate()

    const returnToDashboard = () => {
        navigate('/')
    }

    return (
        <div className="p-8 text-center">
            <h1 className="text-3xl font-bold text-red-600">Oops!</h1>
            <p className="my-4 text-gray-600">
                This page is currently under construction, click the button bellow to return to dashboard
            </p>
            <p className="text-sm italic">{error.data || error.message}</p>
            <ButtonComp text={"goto dashboard"} bground={"bg-[#ec8951]"}
                textFill={"text-white"} performFunction={returnToDashboard} />
        </div>
    );
}
