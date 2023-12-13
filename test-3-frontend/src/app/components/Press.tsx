'use client'
import React from 'react'
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Autoplay from "swiper";

// Import Swiper styles
import "swiper/css";

const Press = () => {
    const partnerItem = [
        {
            img: 'https://gits.id/wp-content/uploads/2022/07/image-32.png',
            width: 149,
            height: 48,
        },
        {
            img: 'https://gits.id/wp-content/uploads/2022/07/image-32.png',
            width: 75,
            height: 48,
        },
        {
            img: 'https://gits.id/wp-content/uploads/2022/07/image-32.png',
            width: 39,
            height: 48,
        }
    ];
    return (
        <Swiper
            className="mySwiper w-full"
            style={{ transitionTimingFunction: 'linear' }}
            speed={4000}
            slidesPerView={"auto"}
            spaceBetween={10}
            // transitionTimingFunction={'linear'}
            loop={true}
        // autoplay={{
        //     delay: 1,
        //     disableOnInteraction: false
        // }}
        // modules={[Autoplay]}
        >
            {partnerItem.map((data, key) => {
                return (
                    <SwiperSlide
                        key={key}
                        style={{ transitionTimingFunction: 'linear' }}
                        className='w-fit'>
                        <div
                            className="border border-neutralGrey w-32 h-10 my-5 flex items-center justify-center mx-auto"
                        >
                            <Image
                                src={data.img}
                                width={data.width}
                                height={data.height}
                                alt="press gits"
                            />
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper >
    )
}

export default Press