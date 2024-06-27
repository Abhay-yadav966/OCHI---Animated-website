import React from 'react'
import FeatureCard from '../common/FeatureCard'
import { useRef } from 'react';
import AnimationBtn from '../common/AnimationBtn';

const Feature = () => {

    const upperRef = useRef();
    const lowerRef = useRef();

    return (
        <div className='rounded-t-xl max-h-fit  bg-[#F1F1F1] ' >

            <h1 className='font-NeueMontrealRegular text-[3.5vw] w-11/12 mx-auto pt-[7.5vw] pb-[2vw]' >Featured projects</h1>

            <div className='w-full border-b border-[#B2B2B2] ' ></div>

            <div className='w-11/12 mx-auto' >
                <div className=' relative w-full mt-[4vw] flex items-center gap-[1.1vw]' >
                    <FeatureCard
                        heading={"FYDE"}
                        img={'https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png'}
                        btn={["audit",
                            "copywriting",
                            "sales deck",
                            "slides design"]}
                        upperRef={upperRef}
                    />

                    <div className=' z-[999] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ' >
                        <h1 ref={upperRef} className='text-[#CDEA68] text-8xl font-bold' ></h1>
                    </div>

                    <FeatureCard
                        heading={"VISE"}
                        img={'https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg'}
                        btn={[
                            "agency",
                            "company presentation",
                        ]}
                        upperRef={upperRef}
                    />
                </div>
                <div className=' relative flex items-center gap-[1.1vw] mt-[4vw] ' >
                    <FeatureCard
                        heading={'TRAWA'}
                        img={"https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"}
                        btn={[
                            "brand identity",
                            "design research",
                            "investor deck"
                        ]}
                        lowerRef={lowerRef}
                    />

                    <div className='z-[999] min-w-fit text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' >
                        <h1 ref={lowerRef} className='text-[#CDEA68] text-8xl font-bold ' ></h1>
                    </div>

                    <FeatureCard
                        heading={'PREMIUM BLEND'}
                        img={'https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png'}
                        btn={[
                            "branded template",
                        ]}
                        lowerRef={lowerRef}
                    />
                </div>
            </div>

            <div className='flex justify-center mt-[7vw] pb-[7vw] ' >
                <AnimationBtn text={"VIEW ALL CASE STUDIES"} />
            </div>
        </div>
    )
}

export default Feature;