import React from 'react'

function Footers() {
  return (
    <div className='flex  flex-col md:flex-row w-full items-center bg-blue-900 justify-between '>
      <div className='p-4 sm:border-r-4 m-4 '>
        <h1 className='font-Samsung400 font-bold text-white'>for more visit:</h1>
        <h1 className='hover:cursor-pointer text-white'><a href="https://www.samsung.com/" target='blank'>https://www.samsung.com</a></h1>
        <h1 className='hover:cursor-pointer text-white'><a href="https://www.samsungexclusivestores.in/" target='blank'>https://www.samsungexclusivestores.in</a></h1>
      </div>
      <div className='p-4 sm:border-r-4 m-4 '>
        <h1 className='hover:cursor-pointer text-center text-white'><a href="/terms&conditions" target='blank'>Terms & Conditions</a></h1>
        <h1 className='hover:cursor-pointer text-center text-white'><a href="/ourpolicy" target='blank'>Privacy Policy</a></h1>
      </div>
      <div className='p-4  m-4 '>
        <h1 className='text-center text-white'>Designed & Maintained by:</h1>
        <h1 className='hover:cursor-pointer text-center text-white'><a href="https://pixelbay.in/" target='blank'>Pixelbay Designs</a></h1>
      </div>
    </div>
  )
}

export default Footers