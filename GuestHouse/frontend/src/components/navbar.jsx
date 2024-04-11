import { Component, useEffect } from 'react';
import logo from '../pictures/GuestHouselogowhite.png'
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import React, { useState } from 'react';
import clsx from 'clsx';

const felsoNavbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="flex flex-col text-white font-semibold bg-base-100 h-full sm:r-10 fixed shadow-xl top-0 w-screen">
            <div className='flex items-center justify-between sm:justify-between bg-sky-800'>
                <div className='flex'>
                    <img src={logo} alt="GuestHouselogo" className='w-16 sm:w-32' />
                </div>
                <div id='mobile' className='sm:hidden' onClick={handleClick}>
                    {isOpen ? <FiX color='white' className='mr-5' size="30px" /> : <FiAlignJustify color='white' className='mr-5' size="30px" />}
                </div>
            </div>
            <div className={clsx(`w-full h-full overflow-y-scroll right-0 backdrop-blur p-5 flex-col gap-5 items-start 
                            sm:static sm:flex sm:flex-row sm:bg-transparent sm:shadow-none`, isOpen ? "flex" : "hidden")} id='menu-itemsa'>
                <a className='menuitem cursor-pointer ring-2 rounded-md p-2 w-full h-16 flex justify-center items-center text-center text-lg shadow-2xl bg-opacity-60 bg-sky-800 sm:ring-0 sm:shadow-none sm:text-sm sm:w-auto'>Kezdőlap</a>
                <a className='menuitem cursor-pointer ring-2 rounded-md p-2 w-full h-16 flex justify-center items-center text-center text-lg shadow-2xl bg-opacity-60 bg-sky-800 sm:ring-0 sm:shadow-none sm:text-sm sm:w-auto'>Heti Menu</a>
                <a className='menuitem cursor-pointer ring-2 rounded-md p-2 w-full h-16 flex justify-center items-center text-center text-lg shadow-2xl bg-opacity-60 bg-sky-800 sm:ring-0 sm:shadow-none sm:text-sm sm:w-auto'>Foglalás</a>
                <a className='menuitem cursor-pointer ring-2 rounded-md p-2 w-full h-16 flex justify-center items-center text-center text-lg shadow-2xl bg-opacity-60 bg-sky-800 sm:ring-0 sm:shadow-none sm:text-sm sm:w-auto'>Bejelentkezés</a>
            </div>
        </div>
    )
}
export default felsoNavbar;