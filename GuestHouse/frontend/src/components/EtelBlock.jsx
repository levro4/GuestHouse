import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { FaRegEdit } from 'react-icons/fa'
import { IoCloseSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const EtelBlock = ({ nap, setIsDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [adatok, setAdatok] = useState([])
    const [formData, setFormData] = useState()
    const navigate = useNavigate()
    const writeData = (e) => {
        setFormData(e.target.value)
    }
    const [isAdmin, setIsAdmin] = useState()
    const token = localStorage.getItem('token')
    if (token) {
        useEffect(() => {
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
        }, [])
    }
    const handleMentes = async (req, res) => {
        if (formData === "err") {
            toast.error("Hiányos adatok!")
            return
        }
        const respond = await fetch('http://localhost:8000/food/updatemenu', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({
                id: Number(nap.id),
                etelid: Number(formData)
            })
        })
        const data = await respond.json()
        if (data.message === 'Hiányos adatok!') {
            toast.error(data.message)
            return
        } else {
            toast.success(data.message)
            setIsDelete(prev => !prev)
            setIsEditing(prev => !prev)
        }
    }
    const deleteMenu = async (req, res) => {
        const respond = await fetch('http://localhost:8000/food/deletemenu', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({
                id: Number(nap.id)
            })
        })
        const data = await respond.json()
        if (data.message === 'Hiányos adatok!') {
            toast.error(data.message)
            return
        } else {
            toast.success(data.message)
            setIsDelete(prev => !prev)
            setIsEditing(prev => !prev)
        }
    }
    useEffect(() => {
        fetch('http://localhost:8000/food/allfood')
            .then(res => res.json())
            .then(data => {
                setAdatok(data)
            })
    }, [])
    return (
        <>
            {
                isAdmin ?
                    isEditing ?
                        <>
                            <div className='flex flex-col p-2 justify-between items-end text-white font-sans font-se,ibold text-xl w-44 h-20 bg-sky-500 shadow-lg rounded-lg'>
                                <div onClick={() => setIsEditing(prev => !prev)} className='cursor-pointer flex justify-end items-end'>
                                    {
                                        isEditing ? <><IoCloseSharp /> <MdDelete onClick={deleteMenu} /></> : <FaRegEdit />
                                    }
                                </div>
                                <select onChange={writeData} name="" className='border border-white w-full bg-sky-600'>
                                    <option className='bg-sky-600' value="err">Válassz ételt</option>
                                    {
                                        adatok.map((items) => {
                                            return (
                                                <option className='bg-sky-600' key={items.id} value={items.id}>{items.nev}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='flex justify-center items-center text-white font-sans font-semibold text-xl w-44 h-16 bg-sky-600 shadow-lg rounded-lg'>
                                <button onClick={handleMentes} className='flex p-2 shadow-lg text-white font-semibold font-sans text-lg rounded-md h-auto justify-center items-center bg-sky-500'>Mentés</button>
                            </div>
                        </>

                        :

                        <>
                            <div className='flex p-2 justify-center cursor-pointer items-center text-white font-sans font-bold text-xl w-44 h-20 bg-sky-500 shadow-lg rounded-lg'>
                                {nap.etel.nev}
                                <div onClick={() => setIsEditing(prev => !prev)} className='flex justify-end items-start w-full h-full'>
                                    {
                                        isEditing ? <IoIosClose /> : <FaRegEdit />
                                    }

                                </div>
                            </div>
                            <div className='flex justify-center items-center text-white font-sans font-semibold text-xl w-44 h-16 bg-sky-600 shadow-lg rounded-lg'>
                                {nap.etel.ar + 'Ft'}
                            </div>
                        </>
                    :
                    <>
                        <div className='flex p-2 justify-center cursor-pointer items-center text-white font-sans font-bold text-xl w-44 h-20 bg-sky-500 shadow-lg rounded-lg'>
                            {nap.etel.nev}
                        </div>
                        <div className='flex justify-center items-center text-white font-sans font-semibold text-xl w-44 h-16 bg-sky-600 shadow-lg rounded-lg'>
                            {nap.etel.ar + 'Ft'}
                        </div>
                    </>
            }
        </>
    )
}

export default EtelBlock