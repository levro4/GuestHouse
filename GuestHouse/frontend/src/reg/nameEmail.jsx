import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast';

const NameEmail = ({nextStep, handleChange, values}) => {
  const emailCheck = async () => {
    const email = document.querySelector('#email').value
    if(document.querySelector('#email').value.includes("@") && document.querySelector("#email").value.includes(".")){
    }else{
      toast.error('Nem megfelelő E-mailcím')
      document.querySelector('#email').classList.add('border-red-500')
      return
    }
    const respond = await fetch('http://localhost:8000/user/emailcheck', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
        })
        
    })
    const data = await respond.json()
    if(data.message == "Az email cím foglalt!"){
      toast.error(data.message)
    }else{
      Continue()
    }
}
  const Continue = e => {
        nextStep()
  }
  return (
        <div className='flex flex-col justify-between p-5 w-full h-full'>
          <div className='flex gap-5 flex-col'>
            <div className="relative mb-4">
              <input 
                onChange={handleChange('email')}
                value={values.email}
                type="text"
                className="border border-white peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="email"
                placeholder="email" />
              <label
                className='block rounded-lg bg-sky-700 pl-2 pr-2 pointer-events-none z-10 absolute left-3 left:0 top-0 -mt-[10px] max-w-[90%] origin-[0_0] truncate leading-[1.6] text-neutral-300  scale-[0.8] dark:text-neutral-200 dark:peer-focus:text-primary'
              >E-mail
              </label>
            </div>
            <div className="relative mb-4">
              <input 
                onChange={handleChange('nev')}
                value={values.nev}
                type="text"
                className="border border-white peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="nev"
                placeholder="név" />
              <label
                className='block rounded-lg bg-sky-700 pl-2 pr-2 pointer-events-none z-10 absolute left-3 left:0 top-0 -mt-[10px] max-w-[90%] origin-[0_0] truncate leading-[1.6] text-neutral-300  scale-[0.8] dark:text-neutral-200 dark:peer-focus:text-primary'
              >Név
              </label>
            </div>
          </div>
          <div className='flex justify-around items-center w-full h-16'>
            <button
              href=''
              type="button"
              onClick={emailCheck}
              className="inline-block shadow-lg cursor-pointer rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            >
              tovább
            </button>
          </div>
        </div>
  )
}

export default NameEmail