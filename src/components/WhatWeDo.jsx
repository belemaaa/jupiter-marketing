import React from 'react'
import {BsArrowRightCircle} from 'react-icons/bs'
import creativeSolutions from '../assets/creativeSolutions.jpg'
import digitalMarketing from '../assets/digitalMarketing.jpg'

const WhatWeDo = () => {
  return (
    <div className='flex flex-col mt-16 relative overflow-hidden'>
        <div className='flex items-center justify-center'>
            <p className='text-orange-700 text-3xl md:text-4xl font-bold mb-4 border-b border-b-gray-700 pb-3'>WHAT WE DO</p>
        </div>

        <div className='flex items-center justify-center flex-col md:flex-row mt-4'>
            <div className='flex flex-col  md:mx-8'>
                <a href='' className='mb-4 py-12 md:py-8 text-xl bg-black 
                bg-opacity-25 px-10 md:px-5 flex flex-row text-black
                hover:scale-105 duration-200 w-80 md:w-0'>
                    Digital Branding
                    <BsArrowRightCircle size={20} className='text-black ml-4 md:ml-1 mt-1' />
                </a>

                <a href='' className='mb-4 py-12 md:py-8 text-xl bg-black 
                bg-opacity-25 px-10 md:px-5 flex flex-row text-black
                hover:scale-105 duration-200 w-80 md:w-0'>
                    Marketing
                    <BsArrowRightCircle size={20} className='text-black ml-4 md:ml-1 mt-1' />
                </a>

                <a href='' className='mb-4 py-12 md:py-8 text-xl bg-black 
                bg-opacity-25 px-10 md:px-5 flex flex-row text-black
                hover:scale-105 duration-200 w-80 md:w-0'>
                    Management
                    <BsArrowRightCircle size={20} className='text-black ml-4 md:ml-1 mt-1' />
                </a>
            </div>


            <div className='flex flex-col mx-2 mt-1 md:mt-0 md:mx-8'>
                <a href='' className='mb-4 py-12 md:py-8 text-xl bg-black 
                bg-opacity-25 px-10 md:px-5 flex flex-row text-black
                hover:scale-105 duration-200 w-80 md:w-0'>
                    Creative Solution
                    <BsArrowRightCircle size={20} className='text-black ml-4 md:ml-1 mt-1' />
                </a>

                <a href='' className='mb-4 py-12 md:py-8 text-xl bg-black 
                bg-opacity-25 px-10 md:px-5 flex flex-row text-black
                hover:scale-105 duration-200 w-80 md:w-0'>
                    Paid Media
                    <BsArrowRightCircle size={20} className='text-black ml-4 md:ml-1 mt-1' />
                </a>

                <a href='' className='mb-4 py-12 md:py-8 text-xl bg-black 
                bg-opacity-25 px-10 md:px-5 flex flex-row text-black
                hover:scale-105 duration-200 w-80 md:w-0'>
                    Social Media
                    <BsArrowRightCircle size={20} className='text-black ml-4 md:ml-1 mt-1' />
                </a>
            </div>

            <div className='hidden md:flex flex-col md:mx-8'>
                <a href='' className='mb-4 py-12 md:py-8 text-xl bg-black 
                bg-opacity-25 px-10 md:px-5 flex flex-row text-black
                hover:scale-105 duration-200 w-80 md:w-0'>
                    Web Solution
                    <BsArrowRightCircle size={20} className='text-black ml-4 md:ml-1 mt-1' />
                </a>

                <a href='' className='mb-4 py-12 md:py-8 text-xl bg-black 
                bg-opacity-25 px-10 md:px-5 flex flex-row text-black
                hover:scale-105 duration-200 w-80 md:w-0'>
                    Data Science
                    <BsArrowRightCircle size={20} className='text-black ml-4 md:ml-1 mt-1' />
                </a>

                <a href='' className='mb-4 py-12 md:py-8 text-xl bg-black 
                bg-opacity-25 px-10 md:px-5 flex flex-row text-black
                hover:scale-105 duration-200 w-80 md:w-0'>
                    UI & UX Design
                    <BsArrowRightCircle size={20} className='text-black ml-4 md:ml-1 mt-1' />
                </a>
            </div>
        </div>

         {/* last column for sm screens flexed in row */}
        <div className='md:hidden flex items-center justify-center flex-col md:flex-row md:mt-4'>
            <a href='' className='mb-4 py-12 md:py-8 text-xl bg-black 
                bg-opacity-25 px-10 md:px-5 flex flex-row text-black
                hover:scale-105 duration-200 w-80 md:w-0'>
                    Web Solution
                    <BsArrowRightCircle size={20} className='text-black ml-4 md:ml-1 mt-1' />
            </a>

            <a href='' className='mb-4 py-12 md:py-8 text-xl bg-black 
                bg-opacity-25 px-10 md:px-5 flex flex-row text-black
                hover:scale-105 duration-200 w-80 md:w-0'>
                    Data Science
                    <BsArrowRightCircle size={20} className='text-black ml-4 md:ml-1 mt-1' />
            </a>
        </div>

        <div className='md:hidden flex items-center justify-center mt-2'>
            <a href='' className='mb-4 py-12 md:py-8 text-xl bg-black 
                bg-opacity-25 px-10 md:px-5 flex flex-row text-black
                hover:scale-105 duration-200 w-80 md:w-0'>
                    UI & UX Design
                    <BsArrowRightCircle size={20} className='text-black ml-4 md:ml-1 mt-1' />
            </a>
        </div>
    </div>
  )
}

export default WhatWeDo