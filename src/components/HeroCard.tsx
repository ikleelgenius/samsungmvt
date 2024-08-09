"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SwiperCard from './SwiperCard';

function HeroCard() {
       var settings = {
              dots: true,
              infinite: false,
              speed: 500,
              slidesToShow: 5,
              slidesToScroll: 5,
              initialSlide: 0,
              responsive: [
                     {
                            breakpoint: 982,
                            settings: {
                                   slidesToShow: 4,
                                   slidesToScroll: 4,
                                   infinite: true,
                                   dots: true
                            }
                     },
                     {
                            breakpoint: 768,
                            settings: {
                                   slidesToShow: 3,
                                   slidesToScroll: 3,
                                   infinite: true,
                                   dots: true
                            }
                     },
                    
                     {
                            breakpoint: 640,
                            settings: {
                                   slidesToShow: 2,
                                   slidesToScroll: 2
                            }
                     },
                     {
                            breakpoint: 360,
                            settings: {
                                   slidesToShow: 1,
                                   slidesToScroll: 1
                            }
                     }
              ]
       };

       return (
              <>
               
                     <Slider {...settings}>
                            <SwiperCard />
                            <SwiperCard />
                            <SwiperCard />
                            <SwiperCard />
                            <SwiperCard />
                            <SwiperCard />
                            <SwiperCard />
                            <SwiperCard />
                     </Slider>

                    


                     <div className='flex flex-row items-center flex-wrap justify-center'>
                            <div className='flex flex-col w-44 bg-indigo-200 m-4 rounded-xl items-center justify-center'>
                                   <img src="/images/s24.png" alt="" width={90} />
                                   <h1 className='font-Samsung700 font-bold text-xl'>phones</h1>
                            </div>
                            <div className='flex flex-col w-44 bg-indigo-200 m-4 rounded-xl items-center'>
                                   <img src="/images/watch.png" alt="" width={90} />
                                   <h1 className='font-Samsung700 font-bold text-xl'>watches</h1>
                            </div>
                            <div className='flex flex-col w-44 bg-indigo-200 m-4 rounded-xl items-center justify-center'>
                                   <img src="/images/tablet.png" alt="" width={120} />
                                   <h1 className='font-Samsung700 font-bold text-xl'>tablets</h1>
                            </div>
                            <div className='flex flex-col w-44 bg-indigo-200 m-4 rounded-xl items-center justify-center'>
                                   <img src="/images/accessories.png" alt="" width={90} />
                                   <h1 className='font-Samsung700 font-bold text-xl'>accessories</h1>
                            </div>
                     </div>
              </>
       )
}

export default HeroCard