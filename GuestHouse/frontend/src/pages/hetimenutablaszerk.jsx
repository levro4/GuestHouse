import React from 'react'

const Hetimenutablaszerk = () => {
  return (
    <div className='flex text-white font-bold justify-center items-center w-screen h-screen'>
        <div className='flex p-5 shadow-lg flex-col gap-5 justify-center items-center w-2/3 h-2/3 bg-sky-700 rounded-lg'>
          <span className='text-white font-bold text-2xl'>Heti menu tábla szerkesztés</span>
          <div className='flex w-full h-full justify-start'>
            <div className='flex flex-col w-full justify-between'>
              <div className='flex w-full justify-between'>
                <span>Hétfő</span>
                <div>
                  <input type="text" />
                </div>
                <div>
                  <input type="text" />
                </div>
                <div>
                  <input type="text" />
                </div>
              </div>
              <div className='flex w-full justify-between'>
                <span>Kedd</span>
                <div>
                  <input type="text" />
                </div>
                <div>
                  <input type="text" />
                </div>
                <div>
                  <input type="text" />
                </div>
              </div>
              <div className='flex w-full justify-between'>
                <span>Szerda</span>
                <div>
                  <input type="text" />
                </div>
                <div>
                  <input type="text" />
                </div>
                <div>
                  <input type="text" />
                </div>
              </div>
              <div className='flex w-full justify-between'>
                <span>Csütörtök</span>
                <div>
                  <input type="text" />
                </div>
                <div>
                  <input type="text" />
                </div>
                <div>
                  <input type="text" />
                </div>
              </div>
              <div className='flex w-full justify-between'>
                <span>Péntek</span>
                <div>
                  <input type="text" />
                </div>
                <div>
                  <input type="text" />
                </div>
                <div>
                  <input type="text" />
                </div>
              </div>
              <div className='flex w-full justify-between'>
                <span>Szombat</span>
                <div>
                  <input type="text" />
                </div>
                <div>
                  <input type="text" />
                </div>
                <div>
                  <input type="text" />
                </div>
              </div>
              <div className='flex w-full justify-between'>
                <span>Vasárnap</span>
                <div>
                  <input type="text" />
                </div>
                <div>
                  <input type="text" />
                </div>
                <div>
                  <input type="text" />
                </div>
              </div>
            </div>
          </div>  
        </div>
    </div>
  )
}

export default Hetimenutablaszerk