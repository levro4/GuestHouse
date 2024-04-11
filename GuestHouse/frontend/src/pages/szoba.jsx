import React, { useState, useEffect, useRef } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import { motion, useInView, useAnimation } from "framer-motion"
import Datepicker from "react-tailwindcss-datepicker";
import moment from "moment";

const Szoba = () => {
    const navigate = useNavigate()
    const [szobaAdatok, setSzobaAdatok] = useState()
    const [disabledDates, setDisabledDates] = useState([])
    const [date, setDate] = useState({
        currentDate: moment(),
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    })
    const handleDateChange = (newValue) => {
        setDate(newValue);
    }
    const id = useParams()
    useEffect(() => {
        fetch(`http://localhost:8000/room/${id.id}`)
            .then(res => res.json())
            .then(data => {
                setSzobaAdatok(data)
            })
    }, [])
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation()
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])
    useEffect(() => {
        fetch(`http://localhost:8000/room/foglalas/${id.id}`)
            .then(res => res.json())
            .then(data => {
                const disableddate = []
                const { foglalasok } = data
                foglalasok.forEach(foglalas => {

                    disableddate.push({
                        startDate: foglalas.erkezes_datum,
                        endDate: foglalas.tavozas_datum
                    })
                });
                setDisabledDates(disableddate) //
            })
    }, [])
    const foglalas = async () => {
        const respond = await fetch(`http://localhost:8000/room/foglalas`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer: ' + localStorage.getItem('token'),
            },
            body: JSON.stringify({
                szobaid: Number(id.id),
                erkezesDatuma: String(date.startDate),
                tavozasDatuma: String(date.endDate),
                fizetett: Number(szobaAdatok.ar_egesz_evben)
            })
        })
        const data = await respond.json()

        if (data.message === "sikeres foglalás hozzáadás") {
            toast.success("sikeres foglalás hozzáadás")
            navigate("/foglalas", { replace: true })
        } else {
            toast.error("Valami hibatörtént")
        }
    }
    return (
        <div className='mt-20'>
            <div className=' h-screen flex justify-center items-center bg-sky-800'>
                <div className=' w-full flex-col gap-5 p-10 bg-sky-800 flex justify-around items-center'>
                    <div ref={ref} className='flex justify-around gap-40 items-center'>
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
                            className='w-full h-96 bg-sky-600 rounded-lg p-5 flex flex-row overflow-x-scroll shadow-2xl gap-3 overflow-y-hidden'>
                            {szobaAdatok?.kepek.map((items) => {
                                return (
                                    <img src={"http://localhost:8000/" + items.szobakep} key={items.id} className='h-full w-full rounded-xl shadow-lg' />
                                )
                            })}
                        </motion.div>
                    </div>
                    <div ref={ref} className='flex gap-5 w-full'>
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
                            className='w-full h-96 rounded-lg shadow-2xl bg-sky-600 p-5'>
                            <span className='font-sans w-full font-bold text-3xl text-white'>Leírás:</span><br />
                            <span className='font-sans break-all font-semibold text-2xl text-white'>{szobaAdatok?.leiras}</span>
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
                                delay: 1.5,
                                ease: [0.43, 0.13, 0.23, 0.96]
                            }}
                            className='flex gap-2 bg-sky-600 w-full text-white fpnt-sans shadow-2xl font-bold rounded-lg p-5 flex-col h-96'>
                            <span className='text-3xl'>Adatok</span>
                            <div className='flex text-lg gap-5'>
                                <span>Szobaszám: </span>
                                {szobaAdatok?.szobaszam}
                            </div>
                            <div className='flex text-lg gap-5'>
                                <span>Ár/fő/éj: </span>
                                {szobaAdatok?.ar_egesz_evben + " Ft"}
                            </div>
                            <div className='flex text-lg gap-5'>
                                <span>Felnőtt férőhely: </span>
                                {szobaAdatok?.felnott_ferohely}
                            </div>
                            <div className='flex text-lg gap-5'>
                                <span>Gyermek férőhely: </span>
                                {szobaAdatok?.gyermek_ferohely}
                            </div>
                            <div className='rounded-lg shadow-lg flex flex-col w-full p-5 bg-sky-800 justify-center gap-2 items-center'>
                                <span>Foglalás</span>
                                <Datepicker
                                    disabledDates={disabledDates}
                                    startFrom={moment()}
                                    minDate={moment()}
                                    primaryColor={'sky'}
                                    value={date}
                                    onChange={handleDateChange} />
                            </div>
                            <div className='w-full h-full flex justify-center items-center'>
                                <button
                                    onClick={foglalas}
                                    type="button"
                                    className="inline-block shadow-lg cursor-pointer rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                >
                                    foglalás
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Szoba
