import { useEffect, useState, useRef } from 'react'
import FoglalasComponent from '../components/foglalascomponent';
import { motion, useInView, useAnimation } from "framer-motion"
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate()
  const [adatok, setAdatok] = useState([])
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()
  const handleMenuButton = () => {
    navigate('/hetimenu',{replace:true})
  }
  useEffect(() => {
    fetch('http://localhost:8000/room/room')
      .then(res => res.json())
      .then(data => {
        setAdatok(data)
      })
  }, [])
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])
  return (
    <div>
      <div className=''>
      </div>
      <div className='page-div overflow-hidden'>
        <div className='bg-[url("https://timarpanzio.hu/files/page/dsc4194.jpg")] w-full h-full bg-cover bg-center bg-fixed'>
          <div className='w-full h-screen justify-center items-center text-center z-0 flex flex-col'>
            <div className='bg-opacity-40 p-5 rounded-lg shadow-[rgba(0,0,0,0.25)_0px_54px_55px,rgba(0,0,0,0.12)_0px_-12px_30px,rgba(0,0,0,0.12)_0px_4px_6px,rgba(0,0,0,0.17)_0px_12px_13px,rgba(0,0,0,0.09)_0px_-3px_5px] bg-sky-700 ring-2'>
              <h1 className=' text-lime-50 opacity-100 text-6xl font-semibold'>GuestHouse</h1>
              <h5 className=' text-lime-50  text-5xl font-semibold'>Welcome Home Away From Home</h5>
            </div>
          </div>
          <div className='flex flex-col gap-10 rounded-t-3xl justify-center p-10 bg-sky-800 z-20'>
            <span className='text-white font-sans font-bold text-3xl'>Az első 3 legfelkapottabb szobánk</span>
            {adatok.map((items) => {
              return (
                <FoglalasComponent
                  key={items.id}
                  ar_egesz_evben={items.ar_egesz_evben}
                  felnott_ferohely={items.felnott_ferohely}
                  gyermek_ferohely={items.gyermek_ferohely}
                  kepek={items.kepek}
                  szobaid={items.id}
                  leiras={items.leiras}
                />
              )
            })}
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
                  delay: 0.25,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
                className='w-full gap-5 mb-20 flex flex-col items-center justify-center'>
                <div className='felx w-80 text-center'>
                  <span className='text-white font-sans font-semibold italic text-lg'>„Nemcsak abban áll a magyar szakácsművészetnek a titka, hogy egyes ételeket milyen ízlésesen tud előállítani, hanem hogyan tálalja föl egymás után úgy, hogy az elköltött étel valósággal kívánja az utána következőt, s mikor már az ember azt hiszi, hogy egészen jóllakott, akkor hoznak megint valamit, amire azt kell mondani, hogy "de már ebből eszünk!"</span>
                </div>
                <div className='w-96 flex'>
                  <span className='w-full flex items-end justify-end text-white font-sans font-bold italic text-lg'>Jókai Mór</span>
                </div>
                <div>
                  <button 
                    className='flex text-white justify-center font-medium text-xl shadow-2xl items-center p-5 hover:scale-110 rounded-lg transform  hover:font-bold hover:bg-sky-300 hover:bg-opacity-45 transition duration-300'
                    onClick={handleMenuButton}
                    >Tovább a menühöz
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
