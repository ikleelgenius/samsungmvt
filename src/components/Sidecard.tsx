import React from 'react'

export default function Sidecard() {
  return (
    <>
      <div className='flex flex-col items-center bg-indigo-200 '>
        <img src="/images/brand.png" alt="samsung" width={120} />
        <h1 className="font-SamsungBold  font-extrabold text-4xl sm:text-xl  md:text-4xl">SmartCafé</h1>
      </div>
      <div className='flex flex-col bg-gray-100 items-center'>
        <h1 className='font-Samsung400 text-xl mt-2'>Muvattupuzha</h1>
        <h1 className='font-Samsung400 text-xl mt-2'>SNDP junction</h1>
        <h1 className='font-Samsung400 text-xl mt-2'>MC Road</h1>
        <a href="tel:+918111935558">
        <div className='hover:bg-yellow-400 bg-yellow-200 flex w-44 justify-center items-center p-2  m-2 rounded-md'>
          <img src="/icons/phone.png" alt="call now" width={40}/>
          <h1>call now</h1>
        </div>
        </a>
        <a href="https://www.google.com/maps/place/Samsung+Experience+Store+-+Travancore+Agro+Agencies+-+TB+Junction/@9.9839762,76.5779337,20.25z/data=!4m12!1m5!3m4!2zOcKwNTknMDIuNSJOIDc2wrAzNCc0MS43IkU!8m2!3d9.984014!4d76.5782418!3m5!1s0x3b07dd898c55fa45:0x726a46c0734991ed!8m2!3d9.9839595!4d76.578268!16s%2Fg%2F11cn2m6ntt?hl=en&entry=ttu">
        <div className='hover:bg-green-400 bg-green-200 flex w-44 justify-center items-center p-2  m-2 rounded-md'>
          <img src="/icons/maps.png" alt="call now" width={40}/>
          <h1>show on maps</h1>
        </div>
        </a>
      </div>
    </>
  )
}
