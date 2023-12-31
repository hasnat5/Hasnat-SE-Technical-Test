'use client'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React, { useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';


const Services = () => {
    const SlideRef = useRef() as any;

    const handleNext = () => {
        SlideRef.current?.swiper.slideNext();
    };

    const handlePrev = () => {
        SlideRef.current?.swiper.slidePrev();
    };

    // const onSlideChange = (swiper: any) => {
    //     handleSlideByState({
    //         isFirst: swiper.isBeginning,
    //         isLast: swiper.isEnd,
    //     });
    // };

    return (
        <section id='services' className='p-4 grid gap-y-12'>
            <div >
                <div className='p-2.5 grid gap-y-5'>
                    <p className='uppercase text-sm text-neutral2'>services</p>
                    <h2 className='text-4xl text-black1 font-bold'>Get the best IT Service & Solution</h2>
                </div>

                <div className='p-2.5 flex gap-x-4'>
                    <Button onClick={handlePrev} size='lg' className='bg-white border border-[#EAECF0]' radius='full' isIconOnly><i className="ri-arrow-left-line text-black2 ri-lg"></i></Button>
                    <Button onClick={handleNext} size='lg' className='bg-white border border-[#EAECF0]' radius='full' isIconOnly><i className="ri-arrow-right-line text-black2 ri-lg"></i></Button>
                </div>
            </div>

            {/* WRAPPER CAROUSEL */}
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                className={'mySwiper'}
                style={{ display: 'flex', alignItems: 'center', overflow: 'hidden', width: '100%' }}
                ref={SlideRef}
                // onSlideChange={onSlideChange}
                navigation={false}
                modules={[Navigation]}
                // breakpoints={{
                //     0: {
                //         slidesPerView: 1,
                //     },
                //     640: {
                //         slidesPerView: 1.5,
                //     },
                //     768: {
                //         slidesPerView: 2,
                //     },
                //     802: {
                //         slidesPerView: 2.5,
                //     },
                //     992: {
                //         slidesPerView: 3,
                //     },
                //     1024: {
                //         slidesPerView: 4,
                //     },
                // }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                }}
            >
                <SwiperSlide>
                    <div className='p-7 grid'>
                        <Image
                            src="/assets/images/services/digitalConsultancy.svg"
                            alt="services"
                            width={60}
                            height={60}
                        />
                        <h2 className='font-bold text-black1 text-xl mt-2.5'>Digital Consultancy</h2>
                        <p className='text-sm text-neutral3 mt-2.5 mb-4'>We can help finding what problems your app have or guiding you to start to have the best solution app for your company & your customer.</p>
                        <p className='mt-2.5 text-black1 text-sm font-bold'>Learn More</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-7 grid '>
                        <Image
                            src="/assets/images/services/applicationModernization.svg"
                            alt="services"
                            width={60}
                            height={60}
                        />
                        <h2 className='font-bold text-black1 text-xl mt-2.5'>Application Modernization</h2>
                        <p className='text-sm text-neutral3 mt-2.5 mb-4'>We Modernize your app to be scalable, easy to be maintained, and be enriched.</p>
                        <p className='mt-2.5 text-black1 text-sm font-bold'>Learn More</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-7 grid '>
                        <Image
                            src="/assets/images/services/cloudManageService.svg"
                            alt="services"
                            width={60}
                            height={60}
                        />
                        <h2 className='font-bold text-black1 text-xl mt-2.5'>Cloud Managed Service</h2>
                        <p className='text-sm text-neutral3 mt-2.5 mb-4'>Secure your data and enable fast processing on application, to reduce cost and improve operational efficiency.</p>
                        <p className='mt-2.5 text-black1 text-sm font-bold'>Learn More</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-7 grid '>
                        <Image
                            src="/assets/images/services/dataMachineLearning.svg"
                            alt="services"
                            width={60}
                            height={60}
                        />
                        <h2 className='font-bold text-black1 text-xl mt-2.5'>Data & Machine Learning</h2>
                        <p className='text-sm text-neutral3 mt-2.5 mb-4'>We help on enable you to take better decisions based on your data. Have it managed and generate insights from it.</p>
                        <p className='mt-2.5 text-black1 text-sm font-bold'>Learn More</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-7 grid '>
                        <Image
                            src="/assets/images/services/dataMachineLearning.svg"
                            alt="services"
                            width={60}
                            height={60}
                        />
                        <h2 className='font-bold text-black1 text-xl mt-2.5'>Digital Workspace</h2>
                        <p className='text-sm text-neutral3 mt-2.5 mb-4'>Flexible, secure and cost-effective innovation solutions, for teams and companies to achieve more.</p>
                        <p className='mt-2.5 text-black1 text-sm font-bold'>Learn More</p>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* <div>
                <div className='p-7 grid '>
                    <Image
                        src="/assets/images/services/applicationModernization.svg"
                        alt="services"
                        width={60}
                        height={60}
                    />
                    <h2 className='font-bold text-black1 text-xl mt-2.5'>Application Modernization</h2>
                    <p className='text-sm text-neutral3 mt-2.5 mb-4'>We Modernize your app to be scalable, easy to be maintained, and be enriched.</p>
                    <p className='mt-2.5 text-black1 text-sm font-bold'>Learn More</p>
                </div>
            </div> */}

        </section>
    )
}

export default Services