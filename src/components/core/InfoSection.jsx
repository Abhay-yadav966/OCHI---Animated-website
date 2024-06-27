import React from 'react'
import familyPhoto from '../../assets/ochi.png'
import AnimationBtn from '../common/AnimationBtn'
import { useRef } from 'react';

const InfoSection = () => {

    const imgRef = useRef(null);
    const childRef = useRef(null);

    return (
        <div className='bg-[#CDEA68]  rounded-t-2xl pt-[7vw] pb-[3.5vw] ' >
            <div className='w-11/12 mx-auto pb-[4vw] '  >
                <h3 className='font-NeueMontrealRegular text-[4vw] leading-[4vw] text-gray-900 ' >Ochi is a strategic partner for fast-growing tech businesses that need to <span className='border-b-[0.25vw] border-gray-900 ' >raise funds</span>, <span className='border-b-[0.25vw] border-gray-900 ' >sell products</span>, <span className='border-b-[0.25vw] border-gray-900 ' >explain complex ideas</span>, and <span className='border-b-[0.25vw] border-gray-900 ' >hire great people</span>.</h3>
            </div>

            <div className='border-b border-gray-700' ></div>

            <div className='w-11/12 mx-auto flex ' >

                <div className='w-[50%]' >
                    <h4 className='font-NeueMontrealRegular text-[4vw] text-gray-900 ' >Our approach:</h4>
                    <AnimationBtn imgRef={imgRef} childRef={childRef} text={"READ MORE"} />
                </div>

                <div className='w-[50%]  pt-[1.5vw] ' >
                    <div ref={imgRef} className='overflow-hidden rounded-xl ' >
                        <img src={familyPhoto} ref={childRef} className=' object-cover object-center rounded-xl' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoSection;