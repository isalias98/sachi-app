"use client"
import Image from 'next/image';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
const Carousel = () => {
    const images = [
        "/autumn.jpg",
        "/winter.jpg",
    ];

    const zoomInProperties = {
        scale: 1,
        duration: 3000,
        transitionDuration: 300,
        infinity: true,

        prevArrow: (
            <div className='p-40 hidden lg:flex md:flex'>
                <FaArrowAltCircleLeft className='h-8 w-8 text-base-300 cursor-pointer' />
            </div>
        ),

        nextArrow: (
            <div className='p-40 hidden lg:flex md:flex'>
                <FaArrowAltCircleRight className='h-8 w-8 text-base-300 cursor-pointer' />
            </div>
        ),
    }
    return (
        <div className='bg-pink-500'>
            < Zoom {...zoomInProperties}>
                {
                    images.map((each, index) => (
                        <div key={index} className=" flex justify-center mt-4 items-center bg-cover relative">
                            <Image className='object-contain w-2/4' src={each} width={600} height={600} quality={75} alt="fashion" />
                        </div>
                    ))
                }
            </Zoom >
        </div >
    )
}

export default Carousel