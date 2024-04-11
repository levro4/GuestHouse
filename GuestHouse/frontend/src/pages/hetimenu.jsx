import React, { useEffect, useState, useRef } from 'react'
import Hetimenutabla from '../components/hetimenutabla'
import { IoFastFood } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { MdOutlineEditCalendar } from 'react-icons/md'
import { motion, useInView, useAnimation } from "framer-motion"

const hetimenu = () => {
    const [isDelete, setIsDelete] = useState(false)
    const [adatok, setAdatok] = useState([])
    const navigate = useNavigate()
    const handleOnclickAddFood = () => {
        navigate('/etelfolvitel', { replace: true })
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
    useEffect(() => {
        fetch('http://localhost:8000/food/napok')
            .then(res => res.json())
            .then(data => {
                setAdatok(data)
            })
    }, [isDelete])
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation()
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])
    return (
        <div ref={ref} className='flex flex-col mt-28 w-screen h-auto gap-10 items-center justify-center'>
            <motion.div 
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
            }}
            initial='hidden'
            animate={mainControls}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.43, 0.13, 0.23, 0.96]
            }}
            className='flex shadow-2xl p-5 rounded-lg bg-slate-300 gap-2'>
                {adatok.map((item, index) => {
                    return (
                        <Hetimenutabla
                            setIsDelete={setIsDelete}
                            key={index}
                            nap={item}
                        />
                    )
                })}
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
                delay: 1,
                ease: [0.43, 0.13, 0.23, 0.96]
            }}
            className='flex justify-center items-center gap-5'>
                {
                    isAdmin ?
                        <button onClick={handleOnclickAddFood} className='flex transform hover:scale-90 transition duration-300  items-center justify-center text-center w-28 h-20 rounded-lg text-2xl text-white shadow-2xl bg-sky-600'>+<IoFastFood /></button>
                        : null
                }
            </motion.div>
        </div>
    )
}

export default hetimenu