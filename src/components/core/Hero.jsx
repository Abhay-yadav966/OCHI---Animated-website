import { useGSAP } from '@gsap/react';
import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import { useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {

    const boxRef = useRef();
    const arrowRef = useRef(null);

    useGSAP(() => {
        gsap.from(boxRef.current, {
            width: 0,
            duration: 2,
            delay: 0.5,
            ease: "power3.in",
            display: 'none',
            marginRight: 0,
        })
    })

    const btnMouseEnterHandler = () => {
        gsap.to(arrowRef.current, {
            scale: 1,
            duration: 0.5,
        })
    }


    const btnMouseLeaveHandler = () => {
        gsap.to(arrowRef.current, {
            scale: 0,
            duration: 0.5,
        })
    }

    return (
        <div className=' h-[calc(100vh-64px)] mt-16' >
            <div className='h-[85%] mx-auto w-11/12  flex flex-col justify-center ' >
                {
                    ["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, idx) => (
                        <div key={idx} className='flex items-center ' >
                            {
                                idx === 1 && <div ref={boxRef} className='h-[4.9vw] w-[8vw] mt-[0.4vw] rounded-lg bg-green-600 mr-3' ></div>
                            }

                            <h1 className='text-white font-NeueMontrealRegular text-[6.5vw] font-bold leading-[6.1vw] ' >{item}</h1>
                        </div>
                    ))
                }
            </div>

            <div className='w-full border-b border-zinc-800' ></div>

            <div className=' mx-auto w-11/12  flex items-center justify-between py-[1rem] ' >
                {
                    ["For public and private companies", "From the first pitch to IPO", "start the project"].map((elem, idx) => (
                        <div key={idx} className={`flex items-center gap-[0.3rem]`} >
                            <p
                                onMouseEnter={idx === 2 ? btnMouseEnterHandler : undefined}
                                onMouseLeave={idx === 2 ? btnMouseLeaveHandler : undefined}
                                className={`text-white font-NeueMontrealRegular tracking-wider ${idx === 2 && 'border border-white rounded-full px-[1rem] py-[0.3rem] uppercase text-[0.9rem] cursor-pointer hover:bg-white hover:text-black duration-500'}`}
                            >
                                {elem}
                            </p>
                            {
                                idx === 2 && <div className=' relative text-white p-[0.3rem] border border-white rounded-full text-[1.3rem] cursor-pointer ' >
                                    <MdOutlineArrowOutward />
                                    <div ref={arrowRef} className='absolute top-0 left-0 w-full h-full text-black bg-white rounded-full scale-0 p-[0.25rem] text-[1.3rem] border border-white' ><MdOutlineArrowOutward /></div>
                                </div>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Hero; 
