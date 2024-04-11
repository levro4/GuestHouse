import React, { useEffect, useState, useRef } from 'react'
import ProfilFoglalasComponent from '../components/ProfilFoglalasComponent'
import { motion, useInView, useAnimation } from "framer-motion"
import { FaEdit } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import toast from 'react-hot-toast';


const Profile = () => {
  const [adatok, setAdatok] = useState([])
  const [isDelete, setIsDelete] = useState(false)
  const [isOpenName, setIsOpenName] = useState(false)
  const [isOpenEmail, setIsOpenEmail] = useState(false)
  const [isOpenPhone, setIsOpenPhone] = useState(false)
  const [isEdit, setEdit] = useState(false)

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
        setAdatok(data)
      })
  }, [isDelete, isEdit])
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])
  let formObj = {
    nev: "",
    telefonszam: "",
    email: "",
  }
  const [formData, setFormData] = useState(formObj)
  const writeData = (e) => {
      setFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }))
  }
  const handleNameSave = async() =>{
    try{
      const respond = await fetch('http://localhost:8000/user/updateusername', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer: ' + localStorage.getItem('token'),
        },
        body: JSON.stringify({
          nev: formData.nev
        })
      })
      const data = await respond.json()
      if(data.message === "Sikeres módosítás")
      {
        toast.success(data.message)
        setIsOpenName(prev => !prev)
        setEdit(prev => !prev)
      }else{
        toast.error(data.message)
        setIsOpenName(prev => !prev)
        setEdit(prev => !prev)
      }
    }catch(err){
      console.log(err)
    }
  }
  const handleEmailSave = async() =>{
    console.log(formData.nev)
    try{
      const respond = await fetch('http://localhost:8000/user/updateuseremail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer: ' + localStorage.getItem('token'),
        },
        body: JSON.stringify({
          email: formData.email
        })
      })
      const data = await respond.json()
      if(data.message === "Sikeres módosítás")
      {
        toast.success(data.message)
        setIsOpenEmail(prev => !prev)
        setEdit(prev => !prev)
      }else{
        toast.error(data.message)
        setIsOpenEmail(prev => !prev)
        setEdit(prev => !prev)
      }
    }catch(err){
      console.log(err)
    }
  }
  const handlePhoneSave = async() =>{
    console.log(formData.telefonszam)
    try{
      const respond = await fetch('http://localhost:8000/user/updateuserphone', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer: ' + localStorage.getItem('token'),
        },
        body: JSON.stringify({
          phone: formData.telefonszam
        })
      })
      const data = await respond.json()
      if(data.message === "Sikeres módosítás")
      {
        toast.success(data.message)
        setIsOpenPhone(prev => !prev)
        setEdit(prev => !prev)
      }else{
        toast.error(data.message)
        setIsOpenPhone(prev => !prev)
        setEdit(prev => !prev)
      }
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div ref={ref} className='mt-20 p-10 items-start justify-start h-full flex flex-col bg-sky-800 gap-5'>
      <div className='w-full flex items-center justify-center gap-5'>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }
          }}
          initial='hidden'
          animate={mainControls}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
          className='bg-sky-700 flex flex-col p-5 rounded-md shadow-2xl gap-5'>
          <span className='text-white font-sans font-bold text-3xl'>Profil adatok:</span>
          <div className='bg-sky-600 shadow-lg p-5 flex rounded-lg text-white font-sans text-2xl'>
            {
              isOpenName ?
                <div className='flex gap-2 flex-col'>
                  <div className='flex gap-2'>
                    <span className='font-bold '>Név:</span>
                    <input type="text" id='nev' onChange={writeData} className='bg-sky-700 shadow-lg rounded-lg' />
                    {
                      isOpenName ?
                        <span><IoClose onClick={() => setIsOpenName(prev => !prev)} className='cursor-pointer transition text-3xl hover:scale-110 hover:shadow-xl duration-300' /></span>
                        :
                        <span className=''><FaEdit onClick={() => setIsOpenName(prev => !prev)} className='cursor-pointer transition hover:scale-110 hover:shadow-xl duration-300' /></span>
                    }
                  </div>
                  <div className='flex items-center justify-center'>
                    <button
                      onClick={handleNameSave}
                      className="inline-block shadow-lg cursor-pointer rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                    >
                      mentés
                    </button>
                  </div>
                </div>
                :
                <div>
                  <div className='flex gap-2 '>
                    <div>
                      <span className='font-bold'>Név:</span>
                      <span className='font-sans font-semibold'>
                        {adatok.nev}
                      </span>

                    </div>
                    {
                      isOpenName ?
                        <span><IoClose onClick={() => setIsOpenName(prev => !prev)} className='w-full cursor-pointer transition text-3xl hover:scale-110 hover:shadow-xl duration-300' /></span>
                        :
                        <span className=''><FaEdit onClick={() => setIsOpenName(prev => !prev)} className='cursor-pointer transition hover:scale-110 hover:shadow-xl duration-300' /></span>
                    }
                  </div>

                </div>
            }
          </div>
          <div className='bg-sky-600 shadow-lg p-5 flex rounded-lg text-white font-sans text-2xl'>
            {
              isOpenEmail ?
                <div className='flex gap-2 flex-col'>
                  <div className='flex gap-2'>
                    <span className='font-bold '>Email:</span>
                    <input type="text" onChange={writeData} id='email' className='bg-sky-700 shadow-lg rounded-lg' />
                    {
                      isOpenEmail ?
                        <span><IoClose onClick={() => setIsOpenEmail(prev => !prev)} className='cursor-pointer transition text-3xl hover:scale-110 hover:shadow-xl duration-300' /></span>
                        :
                        <span className=''><FaEdit onClick={() => setIsOpenEmail(prev => !prev)} className='cursor-pointer transition hover:scale-110 hover:shadow-xl duration-300' /></span>
                    }
                  </div>
                  <div className='flex items-center justify-center'>
                    <button
                      onClick={handleEmailSave}
                      className="inline-block shadow-lg cursor-pointer rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                    >
                      mentés
                    </button>
                  </div>
                </div>
                :
                <div>
                  <div className='flex gap-2 '>
                    <div>
                      <span className='font-bold'>Email:</span>
                      <span className='font-sans font-semibold'>
                        {adatok.email}
                      </span>

                    </div>
                    {
                      isOpenEmail ?
                        <span><IoClose onClick={() => setIsOpenEmail(prev => !prev)} className='w-full cursor-pointer transition text-3xl hover:scale-110 hover:shadow-xl duration-300' /></span>
                        :
                        <span className=''><FaEdit onClick={() => setIsOpenEmail(prev => !prev)} className='cursor-pointer transition hover:scale-110 hover:shadow-xl duration-300' /></span>
                    }
                  </div>

                </div>
            }
          </div>
          <div className='bg-sky-600 shadow-lg p-5 flex rounded-lg text-white font-sans text-2xl'>
            {
              isOpenPhone ?
                <div className='flex gap-2 flex-col'>
                  <div className='flex gap-2'>
                    <span className='font-bold '>Telefonszám:</span>
                    <input type="text" onChange={writeData} id='telefonszam' placeholder='06-70-123-1234' className='bg-sky-700 shadow-lg rounded-lg' />
                    {
                      isOpenPhone ?
                        <span><IoClose onClick={() => setIsOpenPhone(prev => !prev)} className='cursor-pointer transition text-3xl hover:scale-110 hover:shadow-xl duration-300' /></span>
                        :
                        <span className=''><FaEdit onClick={() => setIsOpenPhone(prev => !prev)} className='cursor-pointer transition hover:scale-110 hover:shadow-xl duration-300' /></span>
                    }
                  </div>
                  <div className='flex items-center justify-center'>
                    <button
                      onClick={handlePhoneSave}
                      className="inline-block shadow-lg cursor-pointer rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                    >
                      mentés
                    </button>
                  </div>
                </div>
                :
                <div>
                  <div className='flex gap-2 '>
                    <div>
                      <span className='font-bold'>Telefonszám:</span>
                      <span className='font-sans font-semibold'>
                        {adatok.telefonszam}
                      </span>

                    </div>
                    {
                      isOpenPhone ?
                        <span><IoClose onClick={() => setIsOpenPhone(prev => !prev)} className='w-full cursor-pointer transition text-3xl hover:scale-110 hover:shadow-xl duration-300' /></span>
                        :
                        <span className=''><FaEdit onClick={() => setIsOpenPhone(prev => !prev)} className='cursor-pointer transition hover:scale-110 hover:shadow-xl duration-300' /></span>
                    }
                  </div>
                </div>
            }
          </div>
          <div className='bg-sky-600 shadow-lg gap-2 p-5 flex rounded-lg text-white font-sans text-2xl'>
            <span className='font-bold'>Születési Dátum:</span>
            <span className='font-sans font-semibold'>
              {adatok.szul_dat}
            </span>
          </div>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }
          }}
          initial='hidden'
          animate={mainControls}
          transition={{
            duration: 0.8,
            delay: 1.3,
            ease: [0.43, 0.13, 0.23, 0.96]
          }} className='bg-sky-700 flex flex-col p-5 rounded-md shadow-2xl gap-5'>
          <span className='text-white font-sans font-bold text-3xl'>GuestHouse elérhetőségei:</span>
          <div className='bg-sky-600 shadow-lg gap-2 p-5 flex rounded-lg text-white font-sans text-2xl'>
            <span className='font-bold'>Telefonszám:</span>
            <span className='font-sans font-semibold'>
              +36704245593
            </span>
          </div>
          <div className='bg-sky-600 shadow-lg gap-2 p-5 flex rounded-lg text-white font-sans text-2xl'>
            <span className='font-bold'>Email:</span>
            <span className='font-sans font-semibold'>
              guesthouse@gmail.com
            </span>
          </div>
          <div className='bg-sky-600 shadow-lg gap-2 p-5 flex rounded-lg text-white font-sans text-2xl'>
            <span className='font-bold'>Város:</span>
            <span className='font-sans font-semibold'>
              Békéscsaba
            </span>
          </div>
          <div className='bg-sky-600 shadow-lg gap-2 p-5 flex rounded-lg text-white font-sans text-2xl'>
            <span className='font-bold'>Utca:</span>
            <span className='font-sans font-semibold'>
              Táncsics 56
            </span>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial='hidden'
        animate={mainControls}
        transition={{
          duration: 0.8,
          delay: 1.8,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
        className='flex flex-col shadow-2xl rounded-lg w-full p-5 gap-5 bg-sky-700'>
        <span className='text-3xl text-white font-sans font-bold'>Eddigi foglalások:</span>
        {
          adatok.foglalas ? adatok.foglalasok.map((item, index) => {
            return (
              <ProfilFoglalasComponent
                vendegid={adatok.id}
                key={index}
                setIsDelete={setIsDelete}
                foglalasok={item} />
            )
          })
            :
            <div className='flex flex-col h-40 items-center justify-center'>
              <span className='text-xl text-white font-sans italic font-semibold'>Jelenleg még nem foglaltál nállunk szobát</span>
            </div>
        }
      </motion.div>
    </div>
  )
}

export default Profile