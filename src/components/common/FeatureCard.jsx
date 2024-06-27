import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const FeatureCard = ({ heading, img, btn, upperRef, lowerRef }) => {

    const mouseEnterHandler = () => {
        if (upperRef) {
            upperRef.current.innerText = heading;
        }
        else {
            lowerRef.current.innerText = heading;
        }

        useGSAP(() => {
            gsap.to(upperRef ? upperRef.current : lowerRef.current, {
                duration: 0.3,
                y: 5,
                stagger: 0.2,
            })
        })

    }

    const mouseLeaveHandler = () => {
        if (upperRef) {
            upperRef.current.innerText = "";
        }
        else {
            lowerRef.current.innerText = "";
        }
    }

    return (
        <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className='w-1/2 flex flex-col items-center ' >
            <div className='w-[100%]' >
                <div className='flex items-center gap-[0.5vw]' >
                    <div className='w-[0.7vw] h-[0.7vw] rounded-full bg-black  ' ></div>
                    <p className='font-NeueMontrealRegular text-[1vw] ' >{heading}</p>
                </div>
                <div className='mt-[1vw] rounded-xl hover:scale-95 duration-500 overflow-hidden w-[100%] ' >
                    <img src={img} alt="" className='rounded-xl hover:scale-110 duration-500 w-[100%]' />
                </div>

                <div className='mt-[1vw] flex items-center gap-[0.7vw] ' >
                    {
                        btn.map((elem, idx) => (
                            <button key={idx} className='uppercase font-NeueMontrealRegular border border-black rounded-full px-[0.8vw] py-[0.25vw] text-[1vw] ' >{elem}</button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FeatureCard;