import React, { useEffect, useState } from 'react'

const EyesSection = () => {

    const [rotate, setRotate] = useState(0);
    const [rotateRight, setRotateRight] = useState(0);

    const mouseMoveHandler = (e) => {
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        // here we are finding the distance between position of mouse and the center point
        let deltaX = mouseX - window.innerWidth / 2;
        let deltaY = mouseY - window.innerHeight / 2;

        // finding the angle 
        var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        setRotate(angle - 180);
        setRotateRight(angle - 180);
    }

    return (
        <div onMouseMove={(e) => mouseMoveHandler(e)} className='w-screen h-screen bg-[#F6F6F6] flex justify-center items-end ' >
            <div className=' bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] flex items-center justify-center w-full h-full bg-no-repeat  bg-cover bg-top ' >
                <div className='flex items-center gap-[2.5vw] ' >
                    <div className='bg-white rounded-full w-[15vw] h-[15vw] flex items-center justify-center ' >
                        <div className='bg-black w-[75%] h-[75%] rounded-full relative ' >
                            <div style={{ transform: ` translate(-50%, -50%) rotate(${rotate}deg)` }} className='  w-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] duration-50 ' >
                                <div className='rounded-full bg-white w-[1.3vw] h-[1.3vw]' ></div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white rounded-full w-[15vw] h-[15vw] flex items-center justify-center ' >
                        <div className='bg-black w-[75%] h-[75%] rounded-full relative ' >
                            <div style={{ transform: ` translate(-50%, -50%) rotate(${rotateRight}deg)` }} className='w-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] duration-50 ' >
                                <div className='rounded-full bg-white w-[1.3vw] h-[1.3vw]' ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EyesSection;