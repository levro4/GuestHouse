import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const Veglegesites = ({ hetfoData, keddData, szerdaData, csutortokData, pentekData, szombatData, vasarnapData, prevStep }) => {

    const [etel, setEtel] = useState([])
    const state = [
        hetfoData = hetfoData,
        keddData = keddData,
        szerdaData = szerdaData,
        csutortokData = csutortokData,
        pentekData = pentekData,
        szombatData = szombatData,
        vasarnapData = vasarnapData
    ]
    const adatFolvitel = async () => {
        state.map(async(item) => {
            const respond = await fetch('http://localhost:8000/food/newmenu', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nap: item.nap,
                    a: item.a,
                    b: item.b,
                    c: item.c,
                })
            })
            const data = await respond.json()  
            if (data.message==="Hiányos adatok!"){
                toast.error(data.message)
                return;
            }else{
                toast.success(data.message)
            }
        })
    }
    useEffect(()=>{
        fetch('http://localhost:8000/food/allfood')
        .then(res => res.json())
        .then(data => {
            setEtel(data)
        })
    }, [])
    console.log(hetfoData)
    return (
        <div className='flex mt-20 justify-center items-center w-screen h-screen'>
            <div className='flex gap-5 flex-col p-5 shadow-2xl bg-sky-800 rounded-lg'>
                <div className='flex justify-between'>
                    <span className='text-white w-52 text-center font-bold text-2xl'>nap</span>
                    <span className='text-white w-52 text-center font-bold text-2xl'>A</span>
                    <span className='text-white w-52 text-center font-bold text-2xl'>B</span>
                    <span className='text-white w-52 text-center font-bold text-2xl'>C</span>
                </div>
                <div className='flex  shadow-xl text-white font-sans text-lg pt-5 pb-5 justify-between bg-sky-700 rounded-lg'>
                    <span className='w-52 font-bold text-center flex items-center justify-center'>
                        {hetfoData.nap}
                    </span>
                    <span className='w-52 text-center flex items-center justify-center'>
                        {hetfoData.a.nev}
                    </span>
                    <span className='w-52 text-center flex items-center justify-center'>
                        {hetfoData.b.nev}
                    </span>
                    <span className='w-52 text-center flex items-center justify-center'>
                        {hetfoData.c.nev}
                    </span>
                </div>
                <div className='flex  text-white shadow-xl font-sans text-lg pt-5 pb-5 justify-between bg-sky-600 rounded-lg'>
                    <span className='w-52 font-bold text-center flex items-center justify-center'>
                        {keddData.nap}
                    </span>
                    <span className='w-52 text-center flex items-center justify-center'>
                        {keddData.a.nev}
                    </span>
                    <span className='w-52 text-center flex items-center justify-center'>
                        {keddData.b.nev}
                    </span>
                    <span className='w-52 text-center flex items-center justify-center'>
                        {keddData.c.nev}
                    </span>
                </div>
                <div className='flex  text-white shadow-xl font-sans text-lg pt-5 pb-5 justify-between bg-sky-700 rounded-lg'>
                    <span className='w-52 font-bold text-center flex items-center justify-center'>
                        {szerdaData.nap}
                    </span>
                    <span className='w-52 text-center flex items-center justify-center'>
                        {szerdaData.a.nev}
                    </span>
                    <span className='w-52 text-center flex items-center justify-center'>
                        {szerdaData.b.nev}
                    </span>
                    <span className='w-52 text-center flex items-center justify-center'>
                        {szerdaData.c.nev}
                    </span>
                </div>
                <div className='flex  text-white shadow-xl font-sans text-lg pt-5 pb-5 justify-between bg-sky-600 rounded-lg'>
                    <span className='w-52 font-bold text-center flex items-center justify-center'>
                        {csutortokData.nap}
                    </span>
                    <span className='w-52 text-center flex items-center justify-center'>
                        {csutortokData.a.nev}
                    </span>
                    <span className='w-52 text-center flex items-center justify-center'>
                        {csutortokData.b.nev}
                    </span>
                    <span className='w-52 text-center flex items-center justify-center'>
                        {csutortokData.c.nev}
                    </span>
                </div>
                <div className='flex  text-white shadow-xl font-sans text-lg pt-5 pb-5 justify-between bg-sky-700 rounded-lg'>
                    <span className='w-52 font-bold text-center flex items-center justify-center'>
                        {pentekData.nap}
                    </span>
                    <span className='w-52 text-center flex items-center justify-center'>
                        {pentekData.a.nev}
                    </span>
                    <span className='w-52 text-center flex items-center justify-center'>
                        {pentekData.b.nev}
                    </span>
                    <span className='w-52 text-center flex items-center justify-center'>
                        {pentekData.c.nev}
                    </span>
                </div>
                <div className='flex  text-white shadow-xl font-sans text-lg pt-5 pb-5 justify-between bg-sky-600 rounded-lg'>
                    <span className='w-52 font-bold text-center flex items-center justify-center'>
                        {szombatData.nap}
                    </span>
                    <span className='w-52 text-center flex items-center justify-center'>
                        {szombatData.a.nev}
                    </span>
                    <span className='w-52 text-center flex items-center justify-center'>
                        {szombatData.b.nev}
                    </span>
                    <span className='w-52 text-center flex items-center justify-center'>
                        {szombatData.c.nev}
                    </span>
                </div>
                <div className='flex  text-white shadow-xl font-sans text-lg pt-5 pb-5 justify-between bg-sky-700 rounded-lg'>
                    <span className='w-52 font-bold text-center flex items-center justify-center'>
                        {vasarnapData.nap}
                    </span>
                    <span className='w-52 text-center flex items-center justify-center'>
                        {vasarnapData.a.nev}
                    </span>
                    <span className='w-52 text-center flex items-center justify-center'>
                        {vasarnapData.b.nev}
                    </span>
                    <span className='w-52 text-center flex items-center justify-center'>
                        {vasarnapData.c.nev}
                    </span>
                </div>
                <div className='flex p-5 text-white justify-around items-center w-full h-16 rounded-lg bg-sky-600'>
                    <button
                        onClick={prevStep}
                        type="button"
                        className="inline-block shadow-lg cursor-pointer rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                    >
                        vissza
                    </button>
                    <button
                        onClick={adatFolvitel}
                        type="button"
                        className="inline-block shadow-lg cursor-pointer rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                    >
                        Véglegesítés
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Veglegesites