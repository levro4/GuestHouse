import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { json } from 'react-router-dom'

const EmptyEtelBlock = ({napid,setIsEditing, setIsDelete}) => {
    const [adatok, setAdatok] = useState([])
    const [formData, setFormData] = useState()
    const writeData = (e) => {
        setFormData(e.target.value)
    }
    const handleMentes = async (req,res) => {
        if(formData==="err"){
            toast.error("Hiányos adatok!")
            return
        }
        const respond = await fetch('http://localhost:8000/food/newmenu',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },body:JSON.stringify({
                napid: Number(napid),
                etelid: Number(formData)
            })
        })
        const data = await respond.json()
        if(data.message === 'Hiányos adatok!'){
            toast.error(data.message)
            return
        }else{
            toast.success(data.message)
            setIsDelete(prev => !prev)
            setIsEditing(prev => !prev)
        }
    }
    useEffect(() => {
        fetch('http://localhost:8000/food/allfood')
            .then(res => res.json())
            .then(data => {
                setAdatok(data)
            })
    }, [])
    return (
        <>
            <div className='flex p-2 justify-center items-center text-white font-sans font-se,ibold text-xl w-44 h-20 bg-sky-500 shadow-lg rounded-lg'>
                <select onChange={writeData}  name="" className='p-2 border-white w-full bg-sky-600'>
                    <option className='bg-sky-600'value="err">Válassz ételt</option>
                    {
                        adatok.map((items) => {
                            return (
                                <option className='bg-sky-600' key={items.id} value={items.id}>{items.nev}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className='flex justify-center items-center w-44 h-16 bg-sky-600 shadow-lg rounded-lg'>
                <button onClick={handleMentes} className='flex p-2 shadow-lg text-white font-semibold font-sans text-lg rounded-md h-auto justify-center items-center bg-sky-500'>Mentés</button>
            </div>
        </>
    )
}

export default EmptyEtelBlock