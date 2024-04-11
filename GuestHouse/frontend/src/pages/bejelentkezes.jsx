import React, { useContext, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import UserContext from '../context/userContext';

const bejelentkezes = () => {
    const {setToken} = useContext(UserContext);
    const navigate = useNavigate()
    const belepes = async () => {
        const email = document.querySelector('#email').value
        const jelszo = document.querySelector('#jelszo').value
        if(email==="" && jelszo===""||jelszo===""||email===""){
            toast.error('Email vagy jelszó kötelező!')
            return;
        }
        const respond = await fetch('http://localhost:8000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                jelszo: jelszo
            })
        })
        const data = await respond.json()
        if(data.message === "Felhasználó nem található!" || data.message === "Nem megfelelő jelszó!"){
            toast.error(data.message)
            return;
        }else{
            toast.success("Sikeres Bejelentkezés")
            localStorage.setItem("token", data.token)
            setToken(data.token);
            navigate('/home', {replace: true})
        }
    }
    const [nevvisibility, setnevvisibility] = useState(false)
    const [jelszovisibility, setjelszovisibility] = useState(false)
    const nevhandleChange = () => {
        if(document.querySelector('#email').value === null||document.querySelector('#email').value == null || document.querySelector('#email').value == ""){
            setnevvisibility(false)
        } else{

            setnevvisibility(true)
        }
    }
    const jelszoHandleChange = () => {
        if(document.querySelector('#jelszo').value === null||document.querySelector('#jelszo').value == null || document.querySelector('#jelszo').value == ""){
            setjelszovisibility(false)
        } else{
            setjelszovisibility(true)
        }
    }
    return (
        <>
            <div className='flex font-sans text-white flex-col w-screen h-screen justify-center items-center'>
                <div className='p-5 rounded-lg shadow-lg gap-5 h-96 w-96 flex flex-col items-center justify-center bg-sky-700'>
                    <h1 className='font-bold text-2xl'>Bejelentkezés</h1>
                    <form>
                        <div className="relative mb-4">
                            <input onChange={nevhandleChange}
                            type="text"
                            className="border border-white peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="email"
                            placeholder="email" />
                            <label
                            className={`${nevvisibility ? "hidden":"block"} rounded-lg bg-sky-700 mt-[1px] pl-2 pr-2 pointer-events-none z-10 absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-300 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary`}
                            >Email
                            </label>
                        </div>
                        <div className="relative mb-4">
                            <input onChange={jelszoHandleChange}
                            type="password"
                            className="border border-white peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="jelszo"
                            placeholder="jelszó" />
                            <label
                            className={`${jelszovisibility ? "hidden":"block"} rounded-lg bg-sky-700 mt-[1px] pl-2 pr-2 pointer-events-none z-10 absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-300 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary`}
                            >Jelszó
                            </label>
                        </div>
                        <div className="mb-12 pb-1 pt-1 text-center">
                            <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="button"
                            onClick={belepes}
                            >
                            Bejelentkezés
                            </button>
                        </div>
                        <div className="flex items-center justify-between pb-6">
                            <p className="mb-0 mr-2">Még nincs fiókod?</p>
                            <a
                            href='/regisztracio'
                            type="button"
                            className="inline-block cursor-pointer shadow-lg rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            >
                            Regisztráció
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default bejelentkezes