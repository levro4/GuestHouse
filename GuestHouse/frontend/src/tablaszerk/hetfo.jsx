import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const Hetfo = ({ nextStep, writeData }) => {
    const [food, setFood] = useState([])
    const Continue = () => {
        if(document.querySelector("#a").value === 'f' || document.querySelector("#b").value ==='f' || document.querySelector("#c").value ==='f'){
            toast.error('Nem választottál ételt')
            return
        }else{
            nextStep()
        }
    }
    useEffect(() =>{
        fetch('http://localhost:8000/food/allfood')
        .then(res => res.json())
        .then(data => {
            setFood(data)
        })
    }, [])
    return (
        <div className='flex flex-col gap-5 justify-center items-center w-screen h-screen'>
            <span className='text-gray-400 font-bold font-sans text-2xl'>Menü szerkesztés</span>
            <div className='w-96 gap-5 h-96 pt-5 flex flex-col items-center justify-center bg-sky-700 rounded-lg shadow-2xl'>
                <span className='text-white font-sans font-bold text-2xl '>Hétfő</span>
                <div className='w-full text-white h-full flex gap-9 flex-col items-center justify-start'>
                    <div className='flex gap-5 bg-sky-600 rounded-md shadow-lg p-3 items-center justify-center'>
                        <div className="relative">
                            <select
                                onChange={writeData}
                                type="text"
                                className="border border-white peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="a"
                                placeholder="név">
                                    <option value="f" className="bg-sky-600">Válassz ételt</option>
                                    {food.map((items)=>{
                                        return(
                                            <option className='bg-sky-600' key={items.id} value={items}>{items.nev}</option>
                                        )
                                    })}
                            </select>
                            <label
                                className='block rounded-lg bg-sky-600 pl-2 pr-2 pointer-events-none z-10 absolute left-3 left:0 top-0 -mt-[10px] max-w-[90%] origin-[0_0] truncate leading-[1.6] text-neutral-300  scale-[0.8] dark:text-neutral-200 dark:peer-focus:text-primary'
                            >A
                            </label>
                        </div>
                    </div>
                    <div className='flex gap-5 bg-sky-600 rounded-md shadow-lg p-3 items-center justify-center'>
                        <div className="relative">
                            <select
                                onChange={writeData}
                                type="text"
                                className="border border-white peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="b"
                                placeholder="név">
                                    <option value="f" className="bg-sky-600">Válassz ételt</option>
                                    {food.map((items)=>{
                                        return(
                                            
                                            <option className='bg-sky-600' key={items.id} value={items}>{items.nev}</option>
                                        )
                                    })}
                                </select>
                            <label
                                className='block rounded-lg bg-sky-600 pl-2 pr-2 pointer-events-none z-10 absolute left-3 left:0 top-0 -mt-[10px] max-w-[90%] origin-[0_0] truncate leading-[1.6] text-neutral-300  scale-[0.8] dark:text-neutral-200 dark:peer-focus:text-primary'
                            >B
                            </label>
                        </div>
                    </div>
                    <div className='flex gap-5 bg-sky-600 rounded-md shadow-lg p-3 items-center justify-center'>
                        <div className="relative">
                            <select
                                onChange={writeData}
                                type="text"
                                className="border border-white peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="c"
                                placeholder="név">
                                    <option value="f" className="bg-sky-600">Válassz ételt</option>
                                    {food.map((items)=>{
                                        return(
                                            <option className='bg-sky-600' key={items.id} value={items}>{items.nev}</option>
                                        )
                                    })}
                            </select>
                            <label
                                className='block rounded-lg bg-sky-600 pl-2 pr-2 pointer-events-none z-10 absolute left-3 left:0 top-0 -mt-[10px] max-w-[90%] origin-[0_0] truncate leading-[1.6] text-neutral-300  scale-[0.8] dark:text-neutral-200 dark:peer-focus:text-primary'
                            >C
                            </label>
                        </div>
                    </div>
                </div>
                <div className='flex p-5 text-white justify-around items-center w-full h-16 rounded-lg bg-sky-600'>
                    <button
                        onClick={Continue}
                        type="button"
                        className="inline-block shadow-lg cursor-pointer rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                    >
                        tovább
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hetfo