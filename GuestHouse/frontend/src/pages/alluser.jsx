import React, { useEffect, useState } from 'react'
import Usercomponent from '../components/usercomponent'
import { Navigate, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Alluser = () => {
  const [isDelete, setIsDelete] = useState(false)
  const navigate = useNavigate() 
  useEffect(()=>{
    fetch('http://localhost:8000/user/me',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer: '+localStorage.getItem('token'),
        }
    })
    .then(res => res.json())
    .then(data => {
    if(data.isadmin===false){
      toast.error("Hozzáférés megtagadva")
      navigate('/home', {replace: true})
    }
  })
},[])
  const [adatok, setAdatok] = useState([])
  useEffect(() => {
    fetch('http://localhost:8000/user/alluser', {
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
  }, [isDelete])
  return (
    <div className='w-screen h-screen flex flex-col justify-start items-center mt-28'>
      <div className='flex flex-col p-10 gap-5 rounded-lg bg-sky-700'>
        <div className='flex text-2xl font-sans font-bold text-white flex-row items-center justify-center w-full'>
          <div className='w-56 flex items-center justify-center'>
            <span>Név</span>
          </div>
          <div className='w-56 flex items-center justify-center'>
            <span>Email</span>
          </div>
          <div className='w-56 flex items-center justify-center'>
            <span>Telefonszám</span>
          </div>
          <div className='w-56 flex items-center justify-center'>
            <span>Születési dátum</span>
          </div>
        </div>
        {
          adatok.map((item, index) => {
            return (
              <Usercomponent
                setIsDelete={setIsDelete}
                key={index}
                adatok={item}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Alluser