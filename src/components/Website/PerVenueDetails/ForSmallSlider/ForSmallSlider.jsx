import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './ForSmallSlider.css'

import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const ForSmallSlider = ({ thatvenue }) => {
    console.log(thatvenue.images[0])
    return (
        <>
            <Swiper
                loop={true}
                navigation={true}
                autoplay={{ delay: 2500 }}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
                style={{ height: '100%' }}
            >

                {thatvenue.images.map((item) => {
                    return (
                        <SwiperSlide style={{ height: '100%' }}>
                            <div className="sliderimggrid">
                                <img className="slidersmallfullwid" src={item} />
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}

export default ForSmallSlider
