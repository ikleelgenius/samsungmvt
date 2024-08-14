import React from 'react'
interface phone {
  name: String,
  url: String,
  price: String,
  newoffer?: boolean,
  limitedoffer?: boolean,
  purchaseoffers?:string[]
}

function SwiperCard(item:phone) {
  return (
    <div className='flex flex-col m-4 ml-auto mr-auto  justify-between border-1 min-h-96  shadow-xl w-60  border-grey-200 rounded-md items-center' >
     
      <img src={item.url as string} alt="" />
      <div className='flex'>
        {item.limitedoffer ?
          <img  src="/icons/limitedoffer.png" alt="limited time offer" width={40} height={40} style={{marginTop:"-30px"}} /> : item.newoffer ? <img src="/icons/newoffer.png" alt="new offer" width={40} height={40}  style={{marginTop:"-30px"}} /> : ""}
      </div>
      <div className='flex flex-col  p-4'>
        <h1 className='font-SamsungBold font-bold text-xl text-wrap'>{item.name}</h1>
        <h1 className='font-Samsung400 wrap-text'>6GB RAM,128GB ROM</h1>
        <ul>
          {
          item.purchaseoffers?.map((obj,index)=><li key={index} className='list-disc text-green-900'>{obj}</li>)
          }
         
        </ul>
        <h2 className='text-red-500 font-SamsungBold font-bold'>₹{item.price}</h2>
 
      </div>
    </div>
  )
}

export default SwiperCard