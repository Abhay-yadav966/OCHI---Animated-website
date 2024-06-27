import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';

const AnimationBtn = ({ imgRef, text, childRef}) => {

    const arrowRef = useRef(null);
    
    const mouseEnterHandler = () => {
        
        gsap.to(arrowRef.current, {
            scale: 1,
            duration: 0.2,

        })

        gsap.to(imgRef.current, {
            scale: 0.95,
            duration:1.3
        })

        gsap.to(childRef.current, {
            scale: 1.1,
            duration:1.3
        }) 
    }

    const mouseLeaveHandler = () => {

        gsap.to(arrowRef.current, {
            scale: 0,
            duration: 0.2,

        })


        gsap.to(imgRef.current, {
            scale: 1,
            duration: 1.3
        })

        gsap.to(childRef.current, {
            scale: 1,
            duration:1.3,
        })

    }

    return (
        <div>
            <button onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className='uppercase bg-black text-white font-NeueMontrealRegular text-[1vw] flex items-center px-[1.5vw] py-[1vw] rounded-full gap-[2.7vw] ' >
                <p className='text-[#e6e1e1]' >{text}</p>
                <div className='bg-white h-[0.6vw] w-[0.6vw] rounded-full relative ' >
                    <div
                        className='absolute top-[50%] left-[50%] scale-0 translate-x-[-50%] translate-y-[-50%]  text-[1.5vw] flex items-center justify-center rounded-full bg-white text-black p-[0.5vw] '
                        ref={arrowRef}
                    >
                        <MdOutlineArrowOutward />
                    </div>
                </div>
            </button>
        </div>
    )
}

export default AnimationBtn;