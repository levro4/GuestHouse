import React, { useEffect, useState } from 'react'
import ProfilFoglalasComponent from './ProfilFoglalasComponent'
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";


const Usercomponent = ({ adatok, setIsDelete }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-center rounded-lg shadow-xl p-5 bg-sky-600 text-white font-sans font-bold text-xl'>
        <div className='w-56 flex items-center justify-center'>
          <span>{adatok.nev}</span>
        </div>
        <div className='w-56 flex items-center justify-center'>
          <span>{adatok.email}</span>
        </div>
        <div className='w-56 flex items-center justify-center'>
          <span>{adatok.telefonszam}</span>
        </div>
        <div className='w-56 flex items-center justify-center'>
          <span>{adatok.szul_dat}</span>
        </div>
        <div onClick={()=>setIsOpen((prev => !prev))}>
          {
            isOpen ? <FaChevronUp className='cursor-pointer'/>:<FaChevronDown className='cursor-pointer'/>

          }
        </div>
      </div>
      <div className=''>
        {
          isOpen ? 
            adatok.foglalas ? adatok.foglalasok.map((item, index)=>{
              return(
                <ProfilFoglalasComponent
                vendegid={adatok.id}
                setIsDelete={setIsDelete}
                key={index}
                foglalasok={item}
                />
              )
            }) : <></>
            : <></>
        }
      </div>
    </div>

  )
}

export default Usercomponent