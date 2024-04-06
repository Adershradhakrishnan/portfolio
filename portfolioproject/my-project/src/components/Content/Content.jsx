import React from "react";
import { TypeAnimation } from "react-type-animation";
import image1 from './images/image1.jpg';
import Navbar from "../Navbar/Navbar";
import {FaLinkedin,FaGithub,FaInstagram} from 'react-icons/fa';
import { Link } from "react-router-dom";

function Content () {
    return (
        <div>
        <Navbar/>
        <div className='min-h-screen grid grid-cols-1 sm:grid-cols-3 gap-8 mx-auto py-8 bg-gray-800'>
            
            <div className='my-auto mx-auto mt-36'>
                <div className='rounded-full overflow-hidden w-50'>
                   <img src={image1} className='' alt="" />      
                </div>
            </div>

            <div className='col-span-2 px-5 mt-36'>
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
                    Hai I am Adersh Radhakrishnan and I am a fullstack developer
                </p>
                <div className="flex mt-4">
               <FaLinkedin className="text-4xl text-blue-500" />
               <FaGithub className="text-4xl text-blue-500 ml-4" />
               <FaInstagram className="text-4xl text-blue-500 ml-4"/>
             </div>
             <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mb-6 mt-4">
        Download CV
      </button>
      <Link to='/contact'>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg ml-6">
        Hire Me
      </button>
      </Link>
            </div>
            
        </div>
        </div>
    );
}

export default Content;