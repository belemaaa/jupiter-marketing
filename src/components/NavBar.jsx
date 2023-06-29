import React from 'react'
import logo from '../assets/jupiter-logo.jpg'
import {BsCircle} from 'react-icons/bs'
import banner5 from '../assets/banner-images/banner5.jpg'

const NavBar = () => {
  return (
    <div className='h-14 md:h-20 w-screen overflow-hidden'>
        <div className='flex items-center justify-between bg-black bg-opacity-10'>
            <div className='flex justify-start'>
                <img src={logo} className='w-60 mr-4 md:w-44 md:ml-16 md:h-20 shadow-2xl mb-16 md:mb-2'/>
            </div>

            <div className='text-black'>
                <ul className='hidden md:flex mt-1 font-semibold'>
                    <li className='ml-10 md:mx-5 cursor-pointer hover:border-b-4 border-gray-500 pb-3 hover:scale-105 duration-200'>
                        <a href=''>
                            Home
                        </a>
                    </li>
                    <li className='mx-5 cursor-pointer hover:border-b-4 border-gray-500 pb-3 hover:scale-105 duration-200'>
                        <a href=''>
                            About Us
                        </a>
                    </li>
                    <li className='mx-5 cursor-pointer hover:border-b-4 border-gray-500 pb-3 hover:scale-105 duration-200'>
                        <a href=''>
                            Services
                        </a>
                    </li>
                    <li className='mx-5 cursor-pointer hover:border-b-4 border-gray-500 pb-3 hover:scale-105 duration-200'>
                        <a href=''>
                            Project
                        </a>
                    </li>
                    <li className='mx-5 cursor-pointer hover:border-b-4 border-gray-500 pb-3 hover:scale-105 duration-200'>
                        <a href=''>
                            Team
                        </a>
                    </li>
                    <li className='mx-5 cursor-pointer hover:border-b-4 border-gray-500 pb-3 hover:scale-105 duration-200'>
                        <a href=''>
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>

            <div className='flex text-gray-600'>
                <div className='hidden md:border-l-4 mb-16 h-16 ml-16 md:mt-2 md:mb-1 md:h-16 border-gray-500'></div>
                <ul className='-mt-14 md:mt-1 md:mr-10 mr-2'>
                    <li className='mb-0 ml-3 hover:underline cursor-pointer'>
                        <a href='' className='flex hover:text-black hover:scale-105 duration-150'>
                            <BsCircle size={10} className='text-black font-bold mr-2 mt-1 md:mt-2'/>
                            Digital Branding
                        </a>
                    </li>
                    <li className='mb-0 ml-3 hover:underline cursor-pointer'>
                        <a href='' className='flex hover:text-black hover:scale-105 duration-150'>
                            <BsCircle size={10} className='text-black font-bold mr-2 mt-1 md:mt-2'/>
                            Web Solution
                        </a>
                    </li>
                    <li className='ml-3 hover:underline cursor-pointer'>
                        <a href='' className='flex hover:text-black hover:scale-105 duration-150'>
                            <BsCircle size={10} className='text-black font-bold mr-2 mt-1 md:mt-2'/> 
                            Creative Solution
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        {/* <div className='border border-gray-500 mx-8 mt-5'></div> */}
    </div>
  )
}

export default NavBar