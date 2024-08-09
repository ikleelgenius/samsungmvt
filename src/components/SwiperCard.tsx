import React from 'react'
interface phone{
  name:String,
  url:String,
  price:String,
  newoffer:boolean,
  limitedoffer:boolean,

}
function SwiperCard() {
  return (
    <div className='flex flex-col border-1 shadow-xl w-60 m-2 border-grey-200 rounded-md items-center' >
       <img src="/images/a35.png" alt="" />
       <div className='p-4'>
         <h1 className='font-SamsungBold font-bold text-xl'>Galaxy A35 5G</h1>
         <h1 className='font-Samsung400 wrap-text'>6GB RAM,128GB ROM</h1>
       </div>
    </div>
  )
}

export default SwiperCard