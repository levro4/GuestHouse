import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'
const Success = ({values}) => {
  const navigate = useNavigate()
  const regisztracio = async () => {
    try{
      const respond = await fetch('http://localhost:8000/user/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: values.email,
          jelszo: values.jelszo,
          nev: values.nev,
          telefonszam: values.telefonszam,
          szul_dat: String(values.szul_dat)
        })
    })
    const data = await respond.json()
    if (data.token){
      localStorage.setItem("token", data.token)
      toast.success("Sikeres Regisztráció")
      navigate('/home',{replace:true})
    }else{
      toast.error(data.message)
    }
    }catch(err){
      console.log(err.message)
    }

  }
  return (
    <div className='flex flex-col justify-between p-5 w-full h-full'>
      <div className='flex gap-5 flex-col'>
      <div className='font-bold text-slate-300 text-xl'>
          Név: <label className='font-sans font-normal' >{values.nev}</label>
        </div>
        <div className='font-bold text-slate-300 text-xl'>
          Email: <label className='font-sans font-normal' >{values.email}</label>
        </div>
        <div className='font-bold text-slate-300 text-xl'>
          telefonszám: <label className='font-sans font-normal' >{values.telefonszam}</label>
        </div>
      </div>
      <div className='flex justify-around items-center w-full h-16'>
        <button
          onClick={regisztracio}
          className="inline-block shadow-lg cursor-pointer rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
        >
          Regisztráció Véglegesítése
        </button>
      </div>
    </div>
  )
}

export default Success