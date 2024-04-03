import React from "react";
import { TypeAnimation } from "react-type-animation";
import image1 from './images/image1.jpg';
import Navbar from "../Navbar/Navbar";


function Content () {
    return (
        <div>
        <Navbar/>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 mx-auto py-8 bg-gray-800'>
            
            <div className='my-auto mx-auto'>
                <div className='rounded-full overflow-hidden w-50'>
                   <img src={image1} className='' alt="" />      
                </div>
            </div>

            <div className='col-span-2 px-5 mt-16'>
                <h1 className='text-white text-4xl sm:text-5xl lg:text-8pxl font-extrabold'>

                    <span className='text-cyan-300'>
                       Hello I'am a
                    </span> <br/>
                    <TypeAnimation
                    sequence={[
                        "Frontend Developer",
                        1000,
                        "Backend Developer",
                        1000
                    ]}
                    wrapper='span'
                    speed={50}
                    repeat={Infinity}
                    />
                </h1>
                <p className='text-white sm:text-lg my-6 lg:text-xl'>
                    Hello I am Adersh Radhakrishnan and I am a fullstack developer
                </p>
                
            </div>
        </div>
        </div>
    );
}

export default Content;