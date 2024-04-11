import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { GiCloudUpload } from "react-icons/gi";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Foglalasfelvitel = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  useEffect(() => {
    if (token) {
      fetch('http://localhost:8000/user/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': 'Bearer: ' + localStorage.getItem('token'),
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data.isadmin === false) {
            toast.error("Hozzáférés megtagadva")
            navigate('/home', { replace: true })
          }
        })
    } else {
      toast.error('Hozzáférés megtagadva')
      navigate('/home', { replace: true })
    }
  }, [])
  let formObj = {
    szobaszam: "",
    felnott_ferohely: "",
    gyermek_ferohely: "",
    ar_egesz_evben: "",
    leiras: "",
  }
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState(formObj)
  const writeData = (e) => {
    setFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }))
  }
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedFiles(acceptedFiles);
    },
  });

  const handleSave = () => {
    if (document.querySelector('#leiras').value === "" || document.querySelector('#leiras').value === null) {
      toast.error('leírás megadása kötelező')
      return
    }
    const data = new FormData()
    Array.from(uploadedFiles).map(file => {
      data.append("file", file)
    })
    data.append("szoba", JSON.stringify(formData))

    const feltoltes = async () => {
      try {
        const response = await fetch("http://localhost:8000/room/newroom", {
          method: "POST",
          body: data
        })
        const json = await response.json()
        if (json.message === "sikeres szoba hozzáadás") {
          toast.success(json.message)
        } else {
          toast.error(json.message)
        }
        navigate("/foglalas", { replace: true })
      } catch (error) {
        toast.error("nem jo valami")
      }
    }
    feltoltes()
  }
  const handleNext = () => {
    setStep((prevState) => prevState + 1)
  }
  const handlePrev = () => {
    setStep((prevState) => prevState - 1)
  }
  switch (step) {
    case 1:
      return (
        <div className='mt-14 sm:mt-24 overflow-hidden h-screen items-center justify-center flex felx-col '>
          <div className='flex p-5 justify-center items-center md:flex-row flex-col bg-sky-700 w-full lg:w-2/3 h-full lg:h-96 rounded-xl shadow-2xl'>
            <div {...getRootProps()} className='text-white gap-5 font-bold shadow-2xl transform hover:scale-95 hover:outline hover:outline-gray-300 hover:cursor-pointer transition duration-300 flex flex-col justify-center items-center bg-sky-600 outline-dashed text-center z-0 rounded-lg p-5 w-full h-full outline-gray-400'>
              <input {...getInputProps()} className='z-0' />
              <GiCloudUpload className='w-16 h-16 lg:w-36 lg:h-36' />
              <p>Drag and drop files here or click to browse.</p>
              <ul>
                {uploadedFiles.map((file) => (
                  <li key={file.name}>{file.name}</li>
                ))}
              </ul>
            </div>
            <div className='flex flex-col gap-5 items-center justify-center w-full h-full'>
              <span className='text-white h-full items-start font-bold mt-5 text-2xl'>Szoba felvitel</span>
              <div className=' p-5 flex gap-5 h-full'>
                <div className="relative mb-4">
                  <input
                    onChange={writeData}
                    type="text"
                    className="border text-white border-sky-300 peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="szobaszam"
                    placeholder="név" />
                  <label
                    className='block rounded-lg bg-sky-700 pl-2 pr-2 pointer-events-none z-10 absolute left-3 left:0 top-0 -mt-[10px] max-w-[90%] origin-[0_0] truncate leading-[1.6] text-neutral-300  scale-[0.8] dark:text-neutral-200 dark:peer-focus:text-primary'
                  >Szobaszám
                  </label>
                </div>
                <div className="relative mb-4">
                  <input
                    onChange={writeData}
                    type="text"
                    className="text-white border border-sky-300  peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="felnott_ferohely"
                    placeholder="felnott férőhely" />
                  <label
                    className='block rounded-lg bg-sky-700 pl-2 pr-2 pointer-events-none z-10 absolute left-3 left:0 top-0 -mt-[10px] max-w-[90%] origin-[0_0] truncate leading-[1.6] text-neutral-300  scale-[0.8] dark:text-neutral-200 dark:peer-focus:text-primary'
                  >Felnőtt férőhely
                  </label>
                </div>
              </div>
              <div className='flex p-5 gap-5 h-full'>
                <div className="relative mb-4">
                  <input
                    onChange={writeData}
                    type="text"
                    className="border text-white border-sky-300 peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="ar_egesz_evben"
                    placeholder="név" />
                  <label
                    className='block rounded-lg bg-sky-700 pl-2 pr-2 pointer-events-none z-10 absolute left-3 left:0 top-0 -mt-[10px] max-w-[90%] origin-[0_0] truncate leading-[1.6] text-neutral-300  scale-[0.8] dark:text-neutral-200 dark:peer-focus:text-primary'
                  >Ár /fő/éj:
                  </label>
                </div>
                <div className="relative mb-4">
                  <input
                    onChange={writeData}
                    type="text"
                    className="text-white border border-sky-300  peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="gyermek_ferohely"
                    placeholder="gyermek_ferohely" />
                  <label
                    className='block rounded-lg bg-sky-700 pl-2 pr-2 pointer-events-none z-10 absolute left-3 left:0 top-0 -mt-[10px] max-w-[90%] origin-[0_0] truncate leading-[1.6] text-neutral-300  scale-[0.8] dark:text-neutral-200 dark:peer-focus:text-primary'
                  >Gyermek férőhely
                  </label>
                </div>
              </div>
              <div className='flex justify-around text-white items-center w-full h-16'>
                <button
                  className="mb-5 inline-block shadow-lg text-lg cursor-pointer translate hover:scale-105 rounded border-2 border-danger px-6 pb-[6px] pt-2 font-medium leading-normal transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  onClick={handleNext}
                >
                  Tovább
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    case 2:
      return (
        <div className='mt-14 sm:mt-24 overflow-hidden w-screen h-screen items-center justify-center flex felx-col '>
          <div className='flex flex-col gap-5 p-5 justify-center items-center bg-sky-700 w-fit lg:w-2/3 rounded-xl shadow-2xl'>
            <span className='text-white h-full items-start font-bold mt-5 text-2xl'>Szoba felvitel</span>
            <textarea onChange={writeData} className='w-full rounded-lg p-5 shadow-2xl bg-sky-600 text-white font-sans font-semibold' name="" id="leiras" cols="30" rows="10"></textarea>
            <div className='text-white flex gap-5'>
              <button
                className="mb-5 inline-block shadow-lg text-lg cursor-pointer translate hover:scale-105 rounded border-2 border-danger px-6 pb-[6px] pt-2 font-medium leading-normal transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                onClick={handlePrev}
              >
                Vissza
              </button>
              <button
                className="mb-5 inline-block shadow-lg text-lg cursor-pointer translate hover:scale-105 rounded border-2 border-danger px-6 pb-[6px] pt-2 font-medium leading-normal transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                onClick={handleSave}
              >
                Felvitel
              </button>
            </div>
          </div>

        </div>
      )
  }
}

export default Foglalasfelvitel