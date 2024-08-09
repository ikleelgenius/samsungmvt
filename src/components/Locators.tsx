import React from 'react'

function Locators() {
    return (
        <div className=' flex flex-col w-full bg-indigo-500 p-8'>
            <div className='flex flex-col md:flex-row'>
                <div className='flex flex-col bg-slate-400 p-2 md:p-6 w-full items-center m-4'>
                    <h1>on map</h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3929.3970199425207!2d76.57565997503094!3d9.984026090120578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTknMDIuNSJOIDc2wrAzNCc0MS43IkU!5e0!3m2!1sen!2sin!4v1723041366430!5m2!1sen!2sin"
                        className='w-full h-full'
                        style={{ border: 0 }}
                        loading="lazy" >
                    </iframe>
                    <script async src="//cdn.thinglink.me/jse/responsive.js"></script>
                </div>
                <div className='flex flex-col bg-slate-400 p-2 md:p-6 w-full items-center m-4'>
                    <h1>virtual visit</h1>
                    <iframe width="700" height="400" data-original-width="6720" data-original-height="3360" src="https://www.thinglink.com/view/scene/1877757109806826149" style={{ border: 0 }} scrolling="no"></iframe><script async src="//cdn.thinglink.me/jse/responsive.js"></script>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='font-SamsungBold text-white text-4xl'>we are open on</h1>
                <h1 className='font-SamsungBold text-white text-2xl'>MON-SAT</h1>
                <h1 className='font-SamsungBold text-white text-2xl'>10:00 AM-8:30PM</h1>
            </div>
        </div>
    )
}

export default Locators