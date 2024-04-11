import React from 'react'
import toast from 'react-hot-toast';

const Jelszo = ({prevStep, nextStep, handleChange, values}) => {
  const Previous = e => {
    e.preventDefault();
    prevStep();
  }
  const Continue = e => {
    e.preventDefault();
    if(document.querySelector("#jelszo").value === document.querySelector('#jelszo2').value){
      e.preventDefault();
      nextStep();
    }else{
      toast.error("A 2 jelszó nem egyezik")
      document.querySelector("#jelszo").classList.add("border-red-500")
      document.querySelector("#jelszo2").classList.add("border-red-500")
    }
    
  }
  return (
    <div className='flex flex-col justify-between p-5 w-full h-full'>
      <div className='flex gap-5 flex-col'>
        <div className="relative mb-4">
          <input
            onChange={handleChange('jelszo')}
            value={values.jelszo}
            type="password"
            className="border border-white peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="jelszo"
            placeholder="telefonszám" />
          <label
            className='block rounded-lg bg-sky-700 pl-2 pr-2 pointer-events-none z-10 absolute left-3 left:0 top-0 -mt-[10px] max-w-[90%] origin-[0_0] truncate leading-[1.6] text-neutral-300  scale-[0.8] dark:text-neutral-200 dark:peer-focus:text-primary'
          >Jelszó
          </label>
        </div>
        <div className="relative mb-4">
          <input
            onChange={handleChange('password2')}
            value={values.password2}
            type="password"
            className="border border-white peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="jelszo2"
            placeholder="születési dátum" />
          <label
            className='block rounded-lg bg-sky-700 pl-2 pr-2 pointer-events-none z-10 absolute left-3 left:0 top-0 -mt-[10px] max-w-[90%] origin-[0_0] truncate leading-[1.6] text-neutral-300  scale-[0.8] dark:text-neutral-200 dark:peer-focus:text-primary'
          >Jelszó ismét
          </label>
        </div>
      </div>
      <div className='flex justify-around items-center w-full h-16'>
        <a
          href=''
          type="button"
          onClick={Previous}
          className="inline-block shadow-lg cursor-pointer rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
        >
          Vissza
        </a>
        <a
          href=''
          type="button"
          onClick={Continue}
          className="inline-block shadow-lg cursor-pointer rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
        >
          tovább
        </a>
      </div>
    </div>
  )
}

export default Jelszo