import React from 'react'
import { toast } from 'react-hot-toast';
import { MdCloudySnowing, MdDelete } from "react-icons/md";

const ProfilFoglalasComponent = ({ foglalasok, setIsDelete, vendegid }) => {
    const deleteFoglalas = async () => {
        const respond = await fetch('http://localhost:8000/room/deletefoglalas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer: ' + localStorage.getItem('token'),
            }, body: JSON.stringify({
                id: foglalasok.id,
                vendegid: vendegid
            })
        })
        const data = await respond.json()
        if(data.message==="sikeres foglalás törlése"){
            setIsDelete(prev => !prev)
            toast.success(data.message)
        }else{
            toast.error(data.message)
        }
    }
    return (
        <div className='flex rounded-md items-center justify-center shadow-xl p-5 bg-sky-600 text-white font-sans font-semibold text-xl'>
            <div className='w-72 flex gap-2 items-center justify-center'>
                <span className='font-bold'>Érkezés Dátuma:</span>
                <span>{foglalasok.erkezes_datum}</span>
            </div>
            <div className='w-72 gap-2 flex items-center justify-center'>
                <span className='font-bold'>Távozás Dátuma:</span>
                <span>{foglalasok.tavozas_datum}</span>
            </div>
            <div className='w-72 gap-2 flex items-center justify-center'>
                <span className='font-bold'>Szoba ára:</span>
                <span>{foglalasok.fizetett}Ft</span>
            </div>
            <div className='w-72 gap-2 flex items-center justify-center'>
                <span className='font-bold'>Szoba id:</span>
                <span>{foglalasok.szid}</span>
            </div>
            <div className='w-72 gap-2 flex items-center justify-center'>
                <MdDelete className='cursor-pointer text-2xl' onClick={deleteFoglalas}/>
            </div>
        </div>
    )
}

export default ProfilFoglalasComponent