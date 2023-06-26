import React from 'react'
import logo from '../assets/jupiter-logo.jpg'
import {BsCircle} from 'react-icons/bs'

const NavBar = () => {
  return (
    <div className='bg-white flex items-center justify-between'>
        <div className='flex justify-start'>
            <img src={logo} className='w-full ml-8 pt-5 shadow-xl rounded-sm'/>
        </div>

        <div>
            <ul className='flex mt-5 font-semibold'>
                <li className='mx-5 cursor-pointer hover:border-b-4 border-b-gray-500 pb-3 hover:scale-105 duration-200'>
                    <a href=''>
                        Home
                    </a>
                </li>
                <li className='mx-5 cursor-pointer hover:border-b-4 border-b-gray-500 pb-3 hover:scale-105 duration-200'>
                    <a href=''>
                        About Us
                    </a>
                </li>
                <li className='mx-5 cursor-pointer hover:border-b-4 border-b-gray-500 pb-3 hover:scale-105 duration-200'>
                    <a href=''>
                        Services
                    </a>
                </li>
                <li className='mx-5 cursor-pointer hover:border-b-4 border-b-gray-500 pb-3 hover:scale-105 duration-200'>
                    <a href=''>
                        Project
                    </a>
                </li>
                <li className='mx-5 cursor-pointer hover:border-b-4 border-b-gray-500 pb-3 hover:scale-105 duration-200'>
                    <a href=''>
                        Team
                    </a>
                </li>
                <li className='mx-5 cursor-pointer hover:border-b-4 border-b-gray-500 pb-3 hover:scale-105 duration-200'>
                    <a href=''>
                        Contact Us
                    </a>
                </li>
            </ul>
        </div>

        <div className='flex'>
            <div className='border-l-4 mt-4 h-20 border-gray-500'></div>
            <ul className='mt-5 mr-10'>
                <li className='mb-1 ml-3 hover:underline cursor-pointer'>
                    <a href='' className='flex hover:text-blue-500 hover:scale-105 duration-150'>
                        <BsCircle size={10} className='text-black font-bold mr-2 mt-2'/>
                         Digital Branding
                    </a>
                </li>
                <li className='mb-1 ml-3 hover:underline cursor-pointer'>
                    <a href='' className='flex hover:text-blue-500 hover:scale-105 duration-150'>
                        <BsCircle size={10} className='text-black font-bold mr-2 mt-2'/>
                        Web Solution
                    </a>
                </li>
                <li className='ml-3 hover:underline cursor-pointer'>
                    <a href='' className='flex hover:text-blue-500 hover:scale-105 duration-150'>
                        <BsCircle size={10} className='text-black font-bold mr-2 mt-2'/> 
                        Creative Solution
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar