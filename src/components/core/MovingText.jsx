import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const MovingText = () => {

    const containerRef = useRef();

    useGSAP(() => {
        gsap.to(containerRef.current, {
            x: '-164%',
            duration: 20,
            repeat: -1,
            ease:'none',
        })
    })

    return (
        <div className='w-full h-[65vh] bg-[#004D43] rounded-t-2xl flex items-center ' >
            <div>
                <div className='w-full border-b border-zinc-500 ' ></div>
                <div ref={containerRef} className='flex items-center gap-[9vw] pb-[2.5vw] ' >
                    <h1 className='text-white font-semibold text-[17vw] min-w-fit leading-[18vw] ' >WE ARE OCHI </h1>
                    <h1 className='text-white  font-semibold text-[17vw] min-w-fit leading-[18vw] ' >WE ARE OCHI </h1>
                    <h1 className='text-white font-semibold text-[17vw] min-w-fit leading-[18vw] ' >WE ARE OCHI </h1>
                </div>
                <div className='w-full border-b border-zinc-500 ' ></div>
            </div>
        </div>
    )
}

export default MovingText;