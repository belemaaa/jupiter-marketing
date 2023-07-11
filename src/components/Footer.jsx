import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'
import {FaLinkedinIn} from 'react-icons/fa'
import {RxDotFilled} from 'react-icons/rx'
import {LiaCopyright} from 'react-icons/lia'
import { Link } from 'react-router-dom'
import GoogleMap from './GoogleMap'

const Footer = () => {
  return (
    <div className='flex flex-col overflow-hidden'>
        <div className='flex flex-col md:flex-row ml-3 md:mx-24 text-black pt-12 pb-8'>
            <div className='flex flex-col mr-8'>
                <p className='text-2xl pb-2'>Quick Links</p>
                <div className='border border-gray-300 w-60'></div>
                <ul className='mt-4 text-blue-500'>
                    <li className=''>
                        <Link to='/' className='flex flex-row underline'>
                            <RxDotFilled size={20} className='text-black mr-3 mt-0.5'/>
                            Home
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='/aboutUs' className='flex flex-row underline'>
                            <RxDotFilled size={20} className='text-black mr-3 mt-0.5'/>
                            About Us
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='/projects' className='flex flex-row underline'>
                            <RxDotFilled size={20} className='text-black mr-3 mt-0.5'/>
                            Project
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='/team' className='flex flex-row underline'>
                            <RxDotFilled size={20} className='text-black mr-3 mt-0.5'/>
                            Team
                        </Link>
                    </li>
                    <li className='pb-2'>
                        <Link to='/contact' className='flex flex-row underline'>
                            <RxDotFilled size={20} className='text-black mr-3 mt-0.5'/>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='flex flex-col md:mx-8 my-6 md:my-0'>
                <p className='text-2xl pb-2'>Our Services</p>
                <div className='border border-gray-300 w-60'></div>
                <ul className='mt-4 text-blue-500'>
                    <li className=''>
                        <Link to='' className='flex flex-row underline'>
                            <RxDotFilled size={20} className='text-black mr-3 mt-0.5'/>
                            Digital Branding
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='' className='flex flex-row underline'>
                            <RxDotFilled size={20} className='text-black mr-3 mt-0.5'/>
                            Creative Solution
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='' className='flex flex-row underline'>
                            <RxDotFilled size={20} className='text-black mr-3 mt-0.5'/>
                            Web Solution
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='flex flex-col md:mx-8 mb-6 md:mb-0'>
                <p className='text-2xl pb-2'>Social Links</p>
                <div className='border border-gray-300 w-60'></div>
                <ul className='mt-4 text-blue-500'>
                    <li>
                        <a href="#" className='flex flex-row underline'>
                            <RxDotFilled size={20} className='text-black mr-1 mt-0.5'/>
                            <FaFacebookF size={15} className='text-blue-600 mr-1 mt-1'/>
                            Facebook 
                        </a>
                    </li>
                    <li>
                        <a href="#" className='flex flex-row underline'>
                            <RxDotFilled size={20} className='text-black mr-1 mt-0.5'/>
                            <IoLogoTwitter size={15} className='text-blue-600 mr-1 mt-1'/>
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a href='#' className='flex flex-row underline'>
                            <RxDotFilled size={20} className='text-black mr-1 mt-0.5'/>
                            <FaLinkedinIn size={15} className='text-blue-600 mr-1 mt-1'/>
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </div>

            <div className='flex flex-col md:mx-8'>
                <p className='text-2xl pb-2'>Location</p>
                <div className='border border-gray-300 w-60'></div>
                <ul className='mt-4 text-black'>
                    <li className='flex flex-row'>
                        <RxDotFilled size={20} className='text-black mr-3 mt-0.5'/>
                        352/71 Second Street
                    </li>
                    <li className='flex flex-row'>
                        <RxDotFilled size={20} className='text-black mr-3 mt-0.5'/>
                        King Street
                    </li>
                    <li className='flex flex-row'>
                        <RxDotFilled size={20} className='text-black mr-3 mt-0.5'/>
                        Kingston
                    </li>
                    <li className='flex flex-row'>
                        <RxDotFilled size={20} className='text-black mr-3 mt-0.5'/>
                        United Kingdom
                    </li>
                </ul>
            </div>
        </div>

        <div className='border-b border-gray-300 md:mx-24'></div>
        <div className='flex flex-col md:flex-row'>
            <div className='flex items-start justify-start ml-3 md:ml-24'>
                <p className='text-black flex flex-row py-3 text-sm'>
                    <LiaCopyright size={15} className='text-black mr-1 mt-0.5'/>
                    Jupiter Marketing Services. All Rights Reserved, 2021.
                </p>
            </div>

            <div className='md:flex ml-3 md:ml-60 my-1'>
                <Link to='/contact' className=' text-blue-500 
                hover:text-blue-700 underline duration-500'>
                    Sitemap
                </Link>
            </div>
        </div>    
    </div>  
          
  )
}

export default Footer