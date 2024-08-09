import React from 'react'
import Sidecard from './Sidecard'
import HeroCard from './HeroCard'
function Hero() {
  return (
    <>
    <div className='flex flex-col sm:flex-row'>
        <div className='flex flex-col sm:w-1/4 md:w-1/4 w-full p-4'>
            <Sidecard/>
        </div>
        <div className='flex-col sm:w-3/4  md:w-3/4  w-full p-4'>
            <HeroCard/> 
        </div>
    </div>
    </>
  )
}

export default Hero