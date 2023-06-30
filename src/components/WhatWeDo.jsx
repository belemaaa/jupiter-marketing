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

         <div className='flex items-center justify-center flex-row mt-4'>
            <div className='flex flex-col mx-8'>
                <a href='' className='py-8 text-xl bg-black bg-opacity-25 px-5 flex flex-row text-white
                hover:scale-105 duration-200'>
                    Digital Branding
                    <BsArrowRightCircle size={20} className='text-white ml-1 mt-1' />
                </a>

                <a href='' className='py-8 text-xl bg-black bg-opacity-25 px-5 flex flex-row text-white
                hover:scale-105 duration-200'>
                    Marketing
                    <BsArrowRightCircle size={20} className='text-white ml-1 mt-1' />
                </a>

                <a href='' className='py-8 text-xl bg-black bg-opacity-25 px-5 flex flex-row text-white
                hover:scale-105 duration-200'>
                    Management
                    <BsArrowRightCircle size={20} className='text-white ml-1 mt-1' />
                </a>
            </div>


            <div className='flex flex-col mx-8'>
                <a href='' className='py-8 text-xl bg-black bg-opacity-25 px-5 flex flex-row text-white
                hover:scale-105 duration-200'>
                    Creative Solution
                    <BsArrowRightCircle size={20} className='text-white ml-1 mt-1' />
                </a>

                <a href='' className='py-8 text-xl bg-black bg-opacity-25 px-5 flex flex-row text-white
                hover:scale-105 duration-200'>
                    Paid Media
                    <BsArrowRightCircle size={20} className='text-white ml-1 mt-1' />
                </a>

                <a href='' className='py-8 text-xl bg-black bg-opacity-25 px-5 flex flex-row text-white
                hover:scale-105 duration-200'>
                    Social Media
                    <BsArrowRightCircle size={20} className='text-white ml-1 mt-1' />
                </a>
            </div>

            <div className='flex flex-col mx-8'>
                <a href='' className='py-8 text-xl bg-black bg-opacity-25 px-5 flex flex-row text-white
                hover:scale-105 duration-200'>
                    Web Solution
                    <BsArrowRightCircle size={20} className='text-white ml-1 mt-1' />
                </a>

                <a href='' className='py-8 text-xl bg-black bg-opacity-25 px-5 flex flex-row text-white
                hover:scale-105 duration-200'>
                    Data Science
                    <BsArrowRightCircle size={20} className='text-white ml-1 mt-1' />
                </a>

                <a href='' className='py-8 text-xl bg-black bg-opacity-25 px-5 flex flex-row text-white
                hover:scale-105 duration-200'>
                    UI & UX Design
                    <BsArrowRightCircle size={20} className='text-white ml-1 mt-1' />
                </a>
            </div>

         </div>
    </div>
  )
}

export default WhatWeDo