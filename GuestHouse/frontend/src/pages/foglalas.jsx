import React, { useEffect, useState } from 'react'
import NavbarMobile from '../components/navbarMobile'
import NavbarDesktop from '../components/navbarDesktop'
import FoglalasComponent from '../components/foglalascomponent'
import { FaHouseUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'

const foglalas = () => {
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
    const [adatok, setAdatok] = useState([])
    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate('/foglalasfelvitel', { replace: true })
    }
    useEffect(() => {
        fetch('http://localhost:8000/room/allroom')
            .then(res => res.json())
            .then(data => {
                setAdatok(data)
            })
    }, [])
    return (
        <div className='bg-sky-800'>
            {
                isAdmin ?
                    <div
                        onClick={handleOnClick}
                        className='fixed z-50 flex text-white font-semibold cursor-pointer font-sans text-2xl shadow-2xl break-all transform hover:scale-110 hover:bg-sky-700 duration-300 border-white justify-center items-center right-0 top-[50%] w-20 h-14 rounded-lg bg-sky-800'>
                        +<FaHouseUser />
                    </div>
                    :
                    null
            }
            <div className='flex flex-col mt-20'>
                {adatok.map((items) => {
                    return (
                        <FoglalasComponent
                            key={items.id}
                            ar_egesz_evben={items.ar_egesz_evben}
                            felnott_ferohely={items.felnott_ferohely}
                            gyermek_ferohely={items.gyermek_ferohely}
                            kepek={items.kepek}
                            szobaid={items.id} 
                            leiras={items.leiras}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default foglalas