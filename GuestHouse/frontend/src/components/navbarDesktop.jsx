import { Component, useContext, useEffect } from 'react';
import logo from '../pictures/GuestHouselogowhite.png'
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import React, { useState } from 'react';
import { FaUser } from "react-icons/fa"
import clsx from 'clsx';
import UserContext from '../context/userContext';
import { Link } from 'react-router-dom';

const NavbarDesktop = () => {

    const { token, setToken } = useContext(UserContext);

    const logOut = () => {
        localStorage.removeItem('token');
        setToken(null)
        setIsAdmin(false)
    }
    const [isAdmin, setIsAdmin] = useState(false)
    
        useEffect(() => {
            if(!token){return}
            fetch('http://localhost:8000/user/me', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer: ' + localStorage.getItem('token'),
                }
            })
                .then(res => res.json())
                .then(data => {
                    setIsAdmin(data.isadmin)
                })
        }, [token])
    return (
        <div className="sm:flex flex-col z-40 text-white hidden font-semibold bg-base-100 sm:r-10 fixed shadow-[rgba(0,0,0,0.25)_0px_54px_55px,rgba(0,0,0,0.12)_0px_-12px_30px,rgba(0,0,0,0.12)_0px_4px_6px,rgba(0,0,0,0.17)_0px_12px_13px,rgba(0,0,0,0.09)_0px_-3px_5px] top-0 w-screen">
            <div className='flex items-center justify-between sm:justify-between bg-sky-800'>
                <div className='flex'>
                    <img src={logo} alt="GuestHouselogo" className='w-16 sm:w-32' />
                </div>
                <div className='w-full h-full flex flex-row right-0 backdrop-blur p-5 gap-5 items-start' id='menu-itemsa'>
                    <Link to={"/home"} className='menuitem relative flex transition-all duration-500 before:content[""] before:absolute before:bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transirion-all before:duration-500 before:bg-white hover:before:w-full hover:before:opacity-100 hover:scale-125 hover:text-white text-stone-300 cursor-pointer ring-2 rounded-md p-2 w-full h-16 justify-center items-center text-center text-lg shadow-2xl bg-opacity-60 sm:p-0 sm:gap-5 bg-sky-800 sm:h-10 sm:ring-0 sm:text-center sm:shadow-none sm:text-sm sm:w-auto'>Kezdőlap</Link>
                    <Link to={"/hetimenu"} className='menuitem relative flex transition-all duration-500 before:content[""] before:absolute before:bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transirion-all before:duration-500 before:bg-white hover:before:w-full hover:before:opacity-100 hover:scale-125 hover:text-white text-stone-300 cursor-pointer ring-2 rounded-md p-2 w-full h-16 justify-center items-center text-center text-lg shadow-2xl bg-opacity-60 sm:p-0 sm:gap-5 bg-sky-800 sm:h-10 sm:ring-0 sm:text-center sm:shadow-none sm:text-sm sm:w-auto'>Heti Menu</Link>
                    <Link to={'/foglalas'} className='menuitem relative flex transition-all duration-500 before:content[""] before:absolute before:bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transirion-all before:duration-500 before:bg-white hover:before:w-full hover:before:opacity-100 hover:scale-125 hover:text-white text-stone-300 cursor-pointer ring-2 rounded-md p-2 w-full h-16 justify-center items-center text-center text-lg shadow-2xl bg-opacity-60 sm:p-0 sm:gap-5 bg-sky-800 sm:h-10 sm:ring-0 sm:text-center sm:shadow-none sm:text-sm sm:w-auto'>Foglalás</Link>
                    {
                        isAdmin ?
                            <Link to={'/alluser'} className='menuitem justify-end relative flex transition-all duration-500 before:content[""] before:absolute before:bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transirion-all before:duration-500 before:bg-white hover:before:w-full hover:before:opacity-100 hover:scale-125 hover:text-white text-stone-300 cursor-pointer ring-2 rounded-md p-2 w-full h-16 items-center text-center text-lg shadow-2xl bg-opacity-60 sm:p-0 sm:gap-5 bg-sky-800 sm:h-10 sm:ring-0 sm:text-center sm:shadow-none sm:text-sm sm:w-auto'>Összes felhasználó</Link>
                            :
                            <></>
                    }
                    {
                        token ?
                            <div className='flex gap-3'>
                                <Link onClick={logOut} className='menuitem relative flex transition-all duration-500 before:content[""] before:absolute before:bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transirion-all before:duration-500 before:bg-white hover:before:w-full hover:before:opacity-100 hover:scale-125 hover:text-white text-stone-300 cursor-pointer ring-2 rounded-md p-2 w-full h-16 justify-center items-center text-center text-lg shadow-2xl bg-opacity-60 sm:p-0 sm:gap-5 bg-sky-800 sm:h-10 sm:ring-0 sm:text-center sm:shadow-none sm:text-sm sm:w-auto'>Kijelentkezés</Link>
                                <Link to={'/profile'} className='menuitem justify-end relative flex transition-all duration-500 before:content[""] before:absolute before:bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transirion-all before:duration-500 before:bg-white hover:before:w-full hover:before:opacity-100 hover:scale-125 hover:text-white text-stone-300 cursor-pointer ring-2 rounded-md p-2 w-full h-16 items-center text-center text-lg shadow-2xl bg-opacity-60 sm:p-0 sm:gap-5 bg-sky-800 sm:h-10 sm:ring-0 sm:text-center sm:shadow-none sm:text-sm sm:w-auto'><FaUser className='text-xl mb-1' /></Link>
                            </div>
                            :
                            <Link to={'/bejelentkezes'} className='menuitem relative flex transition-all duration-500 before:content[""] before:absolute before:bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transirion-all before:duration-500 before:bg-white hover:before:w-full hover:before:opacity-100 hover:scale-125 hover:text-white text-stone-300 cursor-pointer ring-2 rounded-md p-2 w-full h-16 justify-center items-center text-center text-lg shadow-2xl bg-opacity-60 sm:p-0 sm:gap-5 bg-sky-800 sm:h-10 sm:ring-0 sm:text-center sm:shadow-none sm:text-sm sm:w-auto'>Bejelentkezés</Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default NavbarDesktop