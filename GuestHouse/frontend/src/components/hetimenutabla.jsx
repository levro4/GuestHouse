import React, { useEffect, useState } from 'react'
import EtelBlock from './EtelBlock'
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaRegSquareMinus } from "react-icons/fa6";
import EmptyEtelBlock from './EmptyEtelBlock'

const Hetimenutabla = ({ nap, setIsDelete }) => {
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
    const [isEditing, setIsEditing] = useState(false);
    return (
        <div>
            <div className='flex flex-col w-full gap-2 items-end justify-end'>
                <div className='w-44 h-20 flex text-white rounded-lg shadow-lg font-semibold text-xl items-center p-5  justify-center bg-sky-700'>
                    {nap.napnev}
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    {nap.menu.map((item, index) => {
                        return (
                            <EtelBlock
                                setIsDelete={setIsDelete}
                                key={index}
                                nap={item} />
                        )
                    })}
                </div>
                {
                    isEditing ? <EmptyEtelBlock setIsEditing={setIsEditing} setIsDelete={setIsDelete} napid={nap.id} /> : <></>
                }
                {
                    isAdmin ? <div onClick={() => setIsEditing(prev => !prev)} className='w-full flex items-center shadow-2xl p-1 cursor-pointer justify-center text-white rounded-md bg-sky-700 text-2xl'>
                        {
                            isEditing ? <FaRegSquareMinus /> : <FaRegSquarePlus />
                        }
                    </div> : <></>
                }
            </div>
        </div>
    )
}

export default Hetimenutabla