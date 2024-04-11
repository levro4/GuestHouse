import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Etelfolvitel = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    useEffect(() => {
        if (token) {
            fetch('http://localhost:8000/user/me', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer: ' + localStorage.getItem('token'),
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.isadmin === false) {
                        toast.error("Hozzáférés megtagadva")
                        navigate('/home', { replace: true })
                    }
                })
        } else {
            toast.error('Hozzáférés megtagadva')
            navigate('/home', { replace: true })
        }
    }, [])
    let formObj = {
        etelnev: "",
        etelar: "",
        kategoria: "",
        leiras: "",
    }
    const [formData, setFormData] = useState(formObj)
    const writeData = (e) => {
        setFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }))
    }
    const handleVeglegesites = async (req, res) => {
        if (formData.etelnev === "" || formData.etelar === "" || formData.kategoria === "" || formData.leiras === "") {
            toast.error("hiányos adatok")
        } else {
            try {
                const respond = await fetch('http://localhost:8000/food/newfood', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        nev: formData.etelnev,
                        ar: Number(formData.etelar),
                        kategoria: formData.kategoria,
                        leiras: formData.leiras,
                    })
                })
                const data = await respond.json()
                toast.success("Sikeres étel felvitel")
            } catch (error) {
                res.json({ message: error.message })
                toast.error("valami hiba történt")
            }
        }
    }
    return (
        <div className='flex flex-col gap-5 justify-center items-center w-screen h-screen'>

            <div className='flex flex-col justify-center items-center bg-sky-700 p-10 gap-5 rounded-lg shadow-2xl'>
                <h1 className='text-2xl w-full justify-start items-start text-white font-bold font-sans'>Étel Felvitel</h1>
                <div className='flex gap-5'>
                    <div className="relative mb-4">
                        <input
                            onChange={writeData}
                            type="text"
                            className="border text-white border-sky-300 peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="etelnev"
                            placeholder="név" />
                        <label
                            className='block rounded-lg bg-sky-700 pl-2 pr-2 pointer-events-none z-10 absolute left-3 left:0 top-0 -mt-[10px] max-w-[90%] origin-[0_0] truncate leading-[1.6] text-neutral-300  scale-[0.8] dark:text-neutral-200 dark:peer-focus:text-primary'
                        >Étel neve
                        </label>
                    </div>
                    <div className="relative mb-4">
                        <input
                            onChange={writeData}
                            type="text"
                            className="text-white border border-sky-300  peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="etelar"
                            placeholder="ár" />
                        <label
                            className='block rounded-lg bg-sky-700 pl-2 pr-2 pointer-events-none z-10 absolute left-3 left:0 top-0 -mt-[10px] max-w-[90%] origin-[0_0] truncate leading-[1.6] text-neutral-300  scale-[0.8] dark:text-neutral-200 dark:peer-focus:text-primary'
                        >Étel ára
                        </label>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className="relative mb-4">
                        <input
                            onChange={writeData}
                            type="text"
                            className="border text-white border-sky-300 peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="kategoria"
                            placeholder="Kategória" />
                        <label
                            className='block rounded-lg bg-sky-700 pl-2 pr-2 pointer-events-none z-10 absolute left-3 left:0 top-0 -mt-[10px] max-w-[90%] origin-[0_0] truncate leading-[1.6] text-neutral-300  scale-[0.8] dark:text-neutral-200 dark:peer-focus:text-primary'
                        >Kategória
                        </label>
                    </div>
                    <div className="relative mb-4">
                        <input
                            onChange={writeData}
                            type="text"
                            className="text-white border border-sky-300  peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="leiras"
                            placeholder="Leirás" />
                        <label
                            className='block rounded-lg bg-sky-700 pl-2 pr-2 pointer-events-none z-10 absolute left-3 left:0 top-0 -mt-[10px] max-w-[90%] origin-[0_0] truncate leading-[1.6] text-neutral-300  scale-[0.8] dark:text-neutral-200 dark:peer-focus:text-primary'
                        >Leirás
                        </label>
                    </div>
                </div>
                <button onClick={handleVeglegesites} className='flex w-40 p-3 text-white font-semibold font-sans rounded-md h-auto justify-center items-center bg-sky-500'>Véglegesítés</button>
            </div>
        </div>
    )
}

export default Etelfolvitel