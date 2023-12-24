import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import { Autoplay, Pagination } from 'swiper/modules';

export default function Carasal() {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
           
            style={{
                marginTop: '7rem'
            }}

            loop={true}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            speed={4000}
            breakpoints={{
                '@0.00': {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                '@0.75': {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                '@1.00': {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                '@1.50': {
                    slidesPerView: 2.5,
                    spaceBetween: 50,
                },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
        >

            <SwiperSlide className='text-black'>
                <div>

                    <div className='flex justify-center'>

                        <video className="pa-video c-vid" preload="none" poster="assets/video/about-nw.mp4" autoPlay loop muted playsInline style={{ borderRadius: '11rem', height: '240px', objectFit: 'cover', width: '85%' }}>
                            <source src="https://wyr.ai/assets/video/about-nw.mp4" type="video/mp4" />
                            Your browser does not support HTML5 video
                        </video>
                    </div>
                </div>


            </SwiperSlide>
            <SwiperSlide className='font-semibold md:text-7xl text-4xl  text-black md:leading-tight leading-tight font-sans mt-4 text-center'>AI-POWERED
                ACCURACY</SwiperSlide>
            <SwiperSlide className='text-black'>

                <div>

                    <div className='flex justify-center'>

                        <video className="pa-video c-vid" preload="none" poster="assets/video/about-nw.mp4" autoPlay loop muted playsInline style={{ borderRadius: '11rem', height: '240px', objectFit: 'cover', width: '85%' }}>
                            <source src="https://wyr.ai/assets/video/about-nw.mp4" type="video/mp4" />
                            Your browser does not support HTML5 video
                        </video>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='font-semibold md:text-7xl text-4xl  text-black md:leading-tight leading-tight font-sans mt-4 text-center' >STREAMLINED
                INSPECTIONS</SwiperSlide>
            <SwiperSlide className='text-black pl-4'>

                <div>

                    <div className='flex justify-center'>

                        <video className="pa-video c-vid" preload="none" poster="assets/video/about-nw.mp4" autoPlay loop muted playsInline style={{ borderRadius: '11rem', height: '240px', objectFit: 'cover', width: '85%' }}>
                            <source src="https://wyr.ai/assets/video/about-nw.mp4" type="video/mp4" />
                            Your browser does not support HTML5 video
                        </video>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='font-semibold md:text-7xl text-4xl  text-black md:leading-tight leading-tight font-sans'>REAL-TIME
                RESULTS</SwiperSlide>
            <SwiperSlide className='text-black'>
                <div>

                    <div className='flex justify-center'>

                        <video className="pa-video c-vid" preload="none" poster="assets/video/about-nw.mp4" autoPlay loop muted playsInline style={{ borderRadius: '11rem', height: '240px', objectFit: 'cover', width: '85%' }}>
                            <source src="https://wyr.ai/assets/video/about-nw.mp4" type="video/mp4" />
                            Your browser does not support HTML5 video
                        </video>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='font-semibold md:text-7xl text-4xl  text-black md:leading-tight leading-tight font-sans mt-4 text-center'>DATA-DRIVEN
                INSIGHTS</SwiperSlide>

        </Swiper>
    )
}
