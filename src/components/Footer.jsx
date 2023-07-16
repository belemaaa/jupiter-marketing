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
    <div className='flex flex-col overflow-hidden bg-black mt-20'>
        <div className='flex flex-col md:flex-row ml-3 md:mx-24 text-white pt-12 pb-8'>
            <div className='flex flex-col mr-20'>
                <p className='text-2xl pb-2'>Quick Links</p>
                <div className='border-2 border-opacity-40 border-[#E5442A] w-12'></div>
                <ul className='mt-4 text-white'>
                    <li className='py-2 hover:text-[#E5442A]'>
                        <Link to='/jupiter-marketing' className='flex flex-row font-light'>
                            Home
                        </Link>
                    </li>
                    <li className='py-2 hover:text-[#E5442A]'>
                        <Link to='/aboutUs' className='flex flex-row font-light'>
                            About Us
                        </Link>
                    </li>
                    <li className='py-2 hover:text-[#E5442A]'>
                        <Link to='/projects' className='flex flex-row font-light'>
                            Project
                        </Link>
                    </li>
                    <li className='py-2 hover:text-[#E5442A]'>
                        <Link to='/team' className='flex flex-row font-light'>
                            Team
                        </Link>
                    </li>
                    <li className='py-2 hover:text-[#E5442A]'>
                        <Link to='/contact' className='flex flex-row font-light'>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='flex flex-col md:mx-20 my-6 md:my-0'>
                <p className='text-2xl pb-2'>Our Services</p>
                <div className='border-2 border-opacity-40 border-[#E5442A] w-12'></div>
                <ul className='mt-4 text-white'>
                    <li className='py-2 hover:text-[#E5442A]'>
                        <Link to='/digital-branding' className='flex flex-row font-light'>
                            Digital Branding
                        </Link>
                    </li>
                    <li className='py-2 hover:text-[#E5442A]'>
                        <Link to='/creative-solution' className='font-light'>
                            Creative Solution
                        </Link>
                    </li>
                    <li className='py-2 hover:text-[#E5442A]'>
                        <Link to='/web-solution' className='font-light'>
                            Web Solution
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='flex flex-col md:mx-20 mb-6 md:mb-0'>
                <p className='text-2xl pb-2'>Social Links</p>
                <div className='border-2 border-opacity-40 border-[#E5442A] w-12'></div>
                <ul className='mt-4 text-white'>
                    <li className='py-2 hover:text-[#E5442A]'>
                        <a href="#" className='flex flex-row'>
                            <FaFacebookF size={15} className='text-white mr-1 mt-1
                             hover:text-[#E5442A]'/>
                            Facebook 
                        </a>
                    </li>
                    <li className='py-2 hover:text-[#E5442A]'>
                        <a href="#" className='flex flex-row  hover:text-[#E5442A]'>
                            <IoLogoTwitter size={15} className='text-white mr-1 mt-1
                             hover:text-[#E5442A]'/>
                            Twitter
                        </a>
                    </li>
                    <li className='py-2 hover:text-[#E5442A]'>
                        <a href='#' className='flex flex-row'>
                            <FaLinkedinIn size={15} className='text-white mr-1 mt-1
                             hover:text-[#E5442A]'/>
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </div>

            <div className='flex flex-col md:ml-20'>
            <p className='text-2xl pb-2'>Location</p>
                <div className='border-2 border-opacity-40 border-[#E5442A] w-12'></div>
                <ul className='mt-4 text-white'>
                    <li className='flex flex-row py-2'>
                        352/71 Second Street
                    </li>
                    <li className='flex flex-row py-2'>
                        King Street
                    </li>
                    <li className='flex flex-row py-2'>
                        Kingston
                    </li>
                    <li className='flex flex-row py-2'>
                        United Kingdom
                    </li>
                </ul>
            </div>
        </div>

        <div className='border-b border-white border-opacity-50 md:mx-24 mt-4'></div>
        <div className='flex flex-col md:flex-row md:mx-24 my-4'>
            <div className='flex items-start justify-start ml-3 md:ml-0'>
                <p className='text-white flex flex-row py-3 text-sm font-light'>
                    <LiaCopyright size={15} className='text-white mr-1 mt-0.5'/>
                    Jupiter Marketing Services. All Rights Reserved, 2021.
                </p>
            </div>

            <div className='md:flex ml-80 md:ml-[710px] my-1'>
                <Link to='/site-map' className=' text-white 
                hover:text-blue-700 duration-500 font-light'>
                    Sitemap
                </Link>
            </div>
        </div>    
    </div>  
          
  )
}

export default Footer