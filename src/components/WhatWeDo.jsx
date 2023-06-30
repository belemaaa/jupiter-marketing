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
            <div className='flex flex-col mx-2 md:mx-8'>
                <a href='' className='mb-4 py-8 text-xl bg-black bg-opacity-25 px-5 flex flex-row text-black
                hover:scale-105 duration-200'>
                    Digital <br className='md:hidden'/>Branding
                    <BsArrowRightCircle size={20} className='text-black ml-1 mt-1' />
                </a>

                <a href='' className='mb-4 py-8 text-xl bg-black bg-opacity-25 px-5 flex flex-row text-black
                hover:scale-105 duration-200'>
                    Marketing
                    <BsArrowRightCircle size={20} className='text-black ml-1 mt-1' />
                </a>

                <a href='' className='py-8 text-xl bg-black bg-opacity-25 px-5 flex flex-row text-black
                hover:scale-105 duration-200'>
                    Management
                    <BsArrowRightCircle size={20} className='text-black ml-1 mt-1' />
                </a>
            </div>


            <div className='flex flex-col mx-2 mt-1 md:mt-0 md:mx-8'>
                <a href='' className='mb-4 py-8 text-xl bg-black bg-opacity-25 px-5 flex flex-row text-black
                hover:scale-105 duration-200'>
                    Creative <br className='md:hidden'/> Solution
                    <BsArrowRightCircle size={20} className='text-black ml-1 mt-1' />
                </a>

                <a href='' className='mb-4 py-8 text-xl bg-black bg-opacity-25 px-5 flex flex-row text-black
                hover:scale-105 duration-200'>
                    Paid Media
                    <BsArrowRightCircle size={20} className='text-black ml-1 mt-1' />
                </a>

                <a href='' className='py-5 md:py-8 text-xl bg-black bg-opacity-25 px-5 flex flex-row text-black
                hover:scale-105 duration-200'>
                    Social <br className='md:hidden'/> Media
                    <BsArrowRightCircle size={20} className='text-black ml-1 mt-1' />
                </a>
            </div>

            <div className='hidden md:flex flex-col md:mx-8'>
                <a href='' className='mb-4 py-8 text-xl bg-black bg-opacity-25 px-5 flex flex-row text-black
                hover:scale-105 duration-200'>
                    Web Solution
                    <BsArrowRightCircle size={20} className='text-black ml-1 mt-1' />
                </a>

                <a href='' className='mb-4 py-8 text-xl bg-black bg-opacity-25 px-5 flex flex-row text-black
                hover:scale-105 duration-200'>
                    Data Science
                    <BsArrowRightCircle size={20} className='text-black ml-1 mt-1' />
                </a>

                <a href='' className='py-8 text-xl bg-black bg-opacity-25 px-5 flex flex-row text-black
                hover:scale-105 duration-200'>
                    UI & UX Design
                    <BsArrowRightCircle size={20} className='text-black ml-1 mt-1' />
                </a>
            </div>
        </div>

         {/* last column for sm screens flexed in row */}
        <div className='md:hidden flex items-center justify-center flex-row mt-4'>
            <a href='' className='ml-2 mr-2 mb-4 py-8 text-xl bg-black bg-opacity-25 px-6 flex flex-row text-black
                hover:scale-105 duration-200'>
                    Web Solution
                    <BsArrowRightCircle size={20} className='text-black ml-1 mt-1' />
            </a>

            <a href='' className='-mt-4 mr-2 ml-2 py-8 text-xl bg-black bg-opacity-25 px-2 text-center flex flex-row text-black
                hover:scale-105 duration-200'>
                    Data Science
                    <BsArrowRightCircle size={20} className='text-black ml-1 mt-1' />
            </a>
        </div>

        <div className='md:hidden flex items-center justify-center mt-2'>
            <a href='' className=' mb-4 py-8 text-xl bg-black bg-opacity-25 px-5 flex flex-row text-black
                hover:scale-105 duration-200'>
                    UI & UX Design
                    <BsArrowRightCircle size={20} className='text-black ml-1 mt-1' />
            </a>
        </div>
    </div>
  )
}

export default WhatWeDo