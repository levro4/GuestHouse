import React from 'react'
import { useState } from 'react'
import {FaHouse} from 'react-icons/fa6';

const Regisztracio = () => {
    const [nevvisibility, setnevvisibility] = useState(false)
    const [jelszovisibility, setjelszovisibility] = useState(false)
    const nevhandleChange = () => {
        if (document.querySelector('#email').value === null || document.querySelector('#email').value == null || document.querySelector('#email').value == "") {
            setnevvisibility(false)
        } else {

            setnevvisibility(true)
        }
    }
    const jelszoHandleChange = () => {
        if (document.querySelector('#jelszo').value === null || document.querySelector('#jelszo').value == null || document.querySelector('#jelszo').value == "") {
            setjelszovisibility(false)
        } else {
            setjelszovisibility(true)
        }
    }
    return (
        <div className='flex gap-5 flex-col justify-center items-center w-screen h-screen'>
            <div className='flex text-xl font-bold text-white  gap-2 items-center justify-center w-96 bg-red '>
                <div className='rounded-full w-11 h-11 p-3 bg-green-500 shadow-lg flex justify-center items-center'>
                    1
                </div>
                <div className='w-10 rounded-lg h-2 shadow-lg bg-green-500'>

                </div>
                <div className='rounded-full w-11 h-11 p-3 scale-125 bg-slate-500 shadow-lg flex justify-center items-center'>
                    2
                </div>
                <div className='w-10 rounded-lg h-2 shadow-lg bg-slate-300'>

                </div>
                <div className='rounded-full w-11 h-11 p-3 bg-slate-300 flex shadow-lg justify-center items-center'>
                    3
                </div>
                <div className='w-10 rounded-lg h-2 shadow-lg bg-slate-300'>

                </div>
                <div className='rounded-full w-11 h-11 p-3 bg-slate-300 flex shadow-lg justify-center items-center'>
                    <FaHouse />
                </div>
            </div>
            <div className='flex flex-col p-5 gap-3 sm:w-full md:w-full justify-center items-center text-white w-full lg:w-7/12 h-450 sm:h-[440px] rounded-lg shadow-lg bg-sky-700'>
                <h1 className='text-3xl font-bold font-sans'>Regisztráció</h1>
                <div className='w-full flex flex-col sm:flex-row justify-center items-center h-full'>
                    <div className='flex flex-col justify-between p-5 w-full h-full'>
                        <div className='flex gap-5 flex-col'>
                            <div className="shadow-lg relative mb-4">
                                <input
                                    type="password"
                                    className="border border-white peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="jelszo"
                                    placeholder="jelszó" />
                                <label
                                    className={`${jelszovisibility ? "hidden" : "block"} rounded-lg bg-sky-700 mt-[1px] pl-2 pr-2 pointer-events-none z-10 absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-300 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary`}
                                >Jelszó
                                </label>
                            </div>
                            <div className="shadow-lg relative mb-4">
                                <input
                                    type="password"
                                    className="border border-white peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="jelszo"
                                    placeholder="jelszó" />
                                <label
                                    className={`${jelszovisibility ? "hidden" : "block"} rounded-lg bg-sky-700 mt-[1px] pl-2 pr-2 pointer-events-none z-10 absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-300 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary`}
                                >Jelszó
                                </label>
                            </div>
                        </div>
                        <div className='flex justify-around items-center w-full h-16'>
                            <a
                                href=''
                                type="button"
                                className="inline-block shadow-lg cursor-pointer rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            >
                                Vissza
                            </a>
                            <a
                                href=''
                                type="button"
                                className="inline-block shadow-lg cursor-pointer rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            >
                                tovább
                            </a>
                        </div>
                    </div>

                    <div className='flex flex-col p-5 bg-sky-600 rounded-lg shadow-xl items-center justify-center w-full h-full'>
                        <h1 className='text-2xl text-white font-bold'>Van már fiókod?</h1>
                        <div className='flex text-center items-center gap-2 justify-center w-full h-20'>
                            <span className='text-white font-sans font-semibold'>
                                Jelentkezz be most a fiókodba
                            </span>
                            <a
                                href='bejelentkezes'
                                type="button"
                                className="inline-block cursor-pointer shadow-lg rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            >
                                bejelentkezés
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Regisztracio