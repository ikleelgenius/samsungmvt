"use client"
import Image from 'next/image'
import React from 'react'
import { Bounce } from 'react-awesome-reveal'

function Offerzone() {
    return (

        <div className='flex flex-col w-full items-center'>
            <h1>Offer zone</h1>

            <div className='flex flex-row flex-wrap justify-center'>
                <Bounce >
                    <div className='flex flex-col w-72 m-6 border-solid border-indigo-400 rounded-xl border-2 border-r-4 items-center p-6 shadow-2xl shadow-black'>
                        <img src="/icons/limitedoffer.png" alt="limited time offer" width={60} style={{ marginRight: '-180px', marginTop: "-60px" }} />
                        <Image src={"/images/s23.png"} width={240} alt='s23' height={240} className='p-4' />
                        <h1 className='text-wrap text-center font-Samsung700 font-bold text-xl'>Samsung Galaxy S23 5G Snapdragon</h1>
                        <h1 className='text-wrap text-center font-Samsung700 text-md'>Green, 8GB, 128GB Storage</h1>
                        <h1 className='text-wrap text-center text-red-600 font-bold font-Samsung700 text-md'>₹44999</h1>
                        <div className='flex flex-row justify-end items-center'>
                            <Image src="/icons/bajaj.png" alt="bajaj EMI" width={40} height={20} className='h-20 w-20' />
                            <Image src="/images/upgrade.png" alt="bajaj EMI" width={120} height={40} className='h-6' />
                            <Image src="/icons/hdfc.png" alt="bajaj EMI" width={80} height={10} className='h-20' />
                        </div>
                    </div>
                </Bounce>
                <Bounce>
                    <div className='flex flex-col w-72 m-6 border-solid border-indigo-400 rounded-xl border-2 border-r-4 items-center p-6 shadow-2xl shadow-black'>
                        <img src="/icons/limitedoffer.png" alt="limited time offer" width={60} style={{ marginRight: '-180px', marginTop: "-60px" }} />
                        <Image src={"/images/s23FE.png"} width={240} alt='s23' height={240} className='p-4' />
                        <h1 className='text-wrap text-center font-Samsung700 font-bold text-xl'>Samsung Galaxy S23 FE</h1>
                        <h1 className='text-wrap text-center font-Samsung700 text-md'> MINT 128 GB STORAGE 8GB</h1>
                        <h1 className='text-wrap text-center text-red-600 font-bold font-Samsung700 text-md'>₹33999</h1>
                        <div className='flex flex-row justify-end items-center'>
                            <Image src="/icons/bajaj.png" alt="bajaj EMI" width={40} height={20} className='h-20 w-20' />
                            <Image src="/images/upgrade.png" alt="bajaj EMI" width={120} height={40} className='h-6' />
                            <Image src="/icons/hdfc.png" alt="bajaj EMI" width={80} height={10} className='h-20' />
                        </div>
                    </div>
                </Bounce>
                <Bounce>
                    <div className='flex flex-col w-72 m-6 border-solid border-indigo-400 rounded-xl border-2 border-r-4 items-center p-6 shadow-2xl shadow-black'>
                        <img src="/icons/limitedoffer.png" alt="limited time offer" width={60} style={{ marginRight: '-180px', marginTop: "-60px" }} />
                        <Image src={"/images/s23ultra.png"} width={240} alt='s23' height={240} className='p-4' />
                        <h1 className='text-wrap text-center font-Samsung700 font-bold text-xl'>Samsung Galaxy S23 Ultra 5G</h1>
                        <h1 className='text-wrap text-center font-Samsung700 text-md'>Cream, 12GB, 256GB Storage</h1>
                        <h1 className='text-wrap text-center text-red-600 font-bold font-Samsung700 text-md'>₹84999</h1>
                        <div className='flex flex-row justify-end items-center'>
                            <Image src="/icons/bajaj.png" alt="bajaj EMI" width={40} height={20} className='h-20 w-20' />
                            <Image src="/images/upgrade.png" alt="bajaj EMI" width={120} height={40} className='h-6' />
                            <Image src="/icons/hdfc.png" alt="bajaj EMI" width={80} height={10} className='h-20' />
                        </div>
                    </div>
                </Bounce>
                <Bounce>


                    <div className='flex flex-col w-72 m-6 border-solid border-indigo-400 rounded-xl border-2 border-r-4 items-center p-6 shadow-2xl shadow-black'>
                        <img src="/icons/limitedoffer.png" alt="limited time offer" width={60} style={{ marginRight: '-180px', marginTop: "-60px" }} />
                        <Image src={"/images/a35.png"} width={240} alt='s23' height={240} className='p-4' />
                        <h1 className='text-wrap text-center font-Samsung700 font-bold text-xl'>Samsung Galaxy A35 5G</h1>
                        <h1 className='text-wrap text-center font-Samsung700 text-md'>Awesome Iceblue, 8GB RAM, 128GB Storage</h1>
                        <h1 className='text-wrap text-center text-red-600 font-bold font-Samsung700 text-md'>₹25999</h1>
                        <div className='flex flex-row justify-end items-center'>
                            <Image src="/icons/bajaj.png" alt="bajaj EMI" width={40} height={20} className='h-20 w-20' />
                            <Image src="/images/upgrade.png" alt="bajaj EMI" width={120} height={40} className='h-6' />
                            <Image src="/icons/hdfc.png" alt="bajaj EMI" width={80} height={10} className='h-20' />
                        </div>
                    </div>
                </Bounce>
            </div>



        </div>

    )
}

export default Offerzone