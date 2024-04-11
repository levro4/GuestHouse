import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useInView, useAnimation } from "framer-motion"


const FoglalasComponent = ({ ar_egesz_evben, felnott_ferohely, gyermek_ferohely, kepek, szobaid, leiras }) => {
    const navigate = useNavigate()

    const szobaOldal = () => {
        navigate(`/szoba/${szobaid}`, { replace: true })
    }
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation()
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])
    return (
        <div ref={ref}>
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
                className='flex items-center justify-center w-full h-96 p-5 gap-10 bg-sky-800'>
                <div className='flex flex-col bg-sky-700 justify-center items-center w-full h-full rounded-lg p-5 shadow-lg'>
                    <div className='flex gap-5 overflow-x-scroll overflow-y-hidden'>
                        {kepek.map((item) => {
                            return (
                                <img src={"http://localhost:8000/" + item.szobakep} key={item.id} className='object-scale-down h-full w-full rounded-lg' />
                            )
                        })}
                    </div>
                </div>
                <div className='flex p-5 flex-col font-sans font-semibold text-white text-xl justify-center items-center w-full h-full rounded-lg bg-sky-700 shadow-lg'>
                    <div className='flex w-full gap-5'>
                        <div className='p-5 rounded-lg shadow-2xl flex flex-col bg-sky-600 transform hover:scale-105 duration-300 w-full justify-center gap-5 items-center'>
                            <span className='flex items-start justify-start font-sans font-bold w-full'>Adatok:</span>
                            <div>
                                <span>Felnőtt férőhely: </span>
                                {felnott_ferohely}
                            </div>
                            <div>
                                <span>Gyermek férőhely: </span>
                                {gyermek_ferohely}
                            </div>
                            <div>
                                <span>Ár /fő/éj: </span>
                                {ar_egesz_evben}
                            </div>
                        </div>
                        <div className='flex flex-col p-5 rounded-lg shadow-2xl bg-sky-600 transform hover:scale-105 duration-300 w-full justify-center gap-5 items-center'>
                            <span className='flex items-start justify-start font-sans font-bold w-full'>Leírás:</span>
                            <div className='w-full h-full'>
                                <span>{leiras}</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full h-full justify-center items-end'>
                        <button className='flex justify-center font-medium text-xl shadow-2xl items-center p-5 hover:scale-125 rounded-lg transform  hover:font-bold hover:bg-sky-300 hover:bg-opacity-45 transition duration-300'
                            onClick={szobaOldal}>Foglalás</button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default FoglalasComponent