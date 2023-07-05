import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'
import {FaLinkedinIn} from 'react-icons/fa'
import {RxDotFilled} from 'react-icons/rx'
import {LiaCopyright} from 'react-icons/lia'

const Footer = () => {
  return (
    <div className='bg-gray-700 flex flex-col pb-4 w-screen overflow-hidden'>
        <div className='flex flex-col md:flex-row ml-8 md:mx-24 text-white pt-12 pb-8'>
            <div className='flex flex-col mr-8'>
                <p className='text-2xl pb-2'>Quick Links</p>
                <div className='border border-gray-500 w-60'></div>
                <ul className='mt-4 text-gray-300'>
                    <li className='pb-2'>
                        <a className='flex flex-row'>
                            <RxDotFilled size={20} className='text-white mr-3 mt-0.5'/>
                            Home
                        </a>
                    </li>
                    <li className='pb-2'>
                        <a className='flex flex-row'>
                            <RxDotFilled size={20} className='text-white mr-3 mt-0.5'/>
                            About Us
                        </a>
                    </li>
                    <li className='pb-2'>
                        <a className='flex flex-row'>
                            <RxDotFilled size={20} className='text-white mr-3 mt-0.5'/>
                            Project
                        </a>
                    </li>
                    <li className='pb-2'>
                        <a className='flex flex-row'>
                            <RxDotFilled size={20} className='text-white mr-3 mt-0.5'/>
                            Team
                        </a>
                    </li>
                    <li className='pb-2'>
                        <a className='flex flex-row'>
                            <RxDotFilled size={20} className='text-white mr-3 mt-0.5'/>
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>

            <div className='flex flex-col md:mx-8 my-6 md:my-0'>
                <p className='text-2xl pb-2'>Our Services</p>
                <div className='border border-gray-500 w-60'></div>
                <ul className='mt-4 text-gray-300'>
                    <li className='pb-2'>
                        <a className='flex flex-row'>
                            <RxDotFilled size={20} className='text-white mr-3 mt-0.5'/>
                            Digital Branding
                        </a>
                    </li>
                    <li className='pb-2'>
                        <a className='flex flex-row'>
                            <RxDotFilled size={20} className='text-white mr-3 mt-0.5'/>
                            Creative Solution
                        </a>
                    </li>
                    <li className='pb-2'>
                        <a className='flex flex-row'>
                            <RxDotFilled size={20} className='text-white mr-3 mt-0.5'/>
                            Web Solution
                        </a>
                    </li>
                </ul>
            </div>

            <div className='flex flex-col md:mx-8 mb-6 md:mb-0'>
                <p className='text-2xl pb-2'>Social Links</p>
                <div className='border border-gray-500 w-60'></div>
                <ul className='mt-4 text-gray-300'>
                    <li>
                        <a href="#" className='pb-2 flex flex-row'>
                            <FaFacebookF size={15} className='text-white mr-1 mt-1'/>
                            Facebook 
                        </a>
                   </li>
                    <li>
                        <a href="#" className='pb-2 flex flex-row'>
                            <IoLogoTwitter size={15} className='text-white mr-1 mt-1'/>
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a className='pb-2 flex flex-row'>
                            <FaLinkedinIn size={15} className='text-white mr-1 mt-1'/>
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </div>

            <div className='flex flex-col md:mx-8'>
                <p className='text-2xl pb-2'>Location</p>
                <div className='border border-gray-500 w-60'></div>
                <ul className='mt-4 text-gray-300'>
                    <li className='pb-2 flex flex-row'>
                        <RxDotFilled size={20} className='text-white mr-3 mt-0.5'/>
                        352/71 Second Street
                    </li>
                    <li className='pb-2 flex flex-row'>
                        <RxDotFilled size={20} className='text-white mr-3 mt-0.5'/>
                        King Street
                    </li>
                    <li className='pb-2 flex flex-row'>
                        <RxDotFilled size={20} className='text-white mr-3 mt-0.5'/>
                        Kingston
                    </li>
                    <li className='pb-2 flex flex-row'>
                        <RxDotFilled size={20} className='text-white mr-3 mt-0.5'/>
                        United Kingdom
                    </li>
                </ul>
            </div>
        </div>

        <div className='border-b border-gray-500 md:mx-24'></div>
        <div className='flex flex-col md:flex-row items-center justify-center'>
            <div className='flex md:mr-52'>
                <p className='text-white flex flex-row py-3 text-sm'>
                    <LiaCopyright size={15} className='text-white mr-1 mt-0.5'/>
                    Jupiter Marketing Services. All Rights Reserved, 2023
                </p>
            </div>

            <div className='md:flex items-center justify-end ml-72 md:ml-96 my-1'>
                <a href='' className=' text-gray-700 bg-white py-0 px-3 md:mr-24
                hover:bg-black hover:text-white duration-500 shadow-xl'>
                    Site Map
                </a>
            </div>
        </div>
        
    </div>
  )
}

export default Footer