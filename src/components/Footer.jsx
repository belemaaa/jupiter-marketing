import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'
import {FaLinkedinIn} from 'react-icons/fa'
import {RxDotFilled} from 'react-icons/rx'

const Footer = () => {
  return (
    <div className='bg-gray-700 flex flex-col'>
        <div className='flex flex-row mx-24 text-white py-12'>
            <div className='flex flex-col'>
                <p className='text-2xl pb-2'>Quick Links</p>
                <div className='border border-gray-500 w-60'></div>
                <ul className='mt-4 text-gray-300'>
                    <li className='pb-2'>
                        <a>
                            Home
                        </a>
                    </li>
                    <li className='pb-2'>
                        <a>
                            About Us
                        </a>
                    </li>
                    <li className='pb-2'>
                        <a>
                            Project
                        </a>
                    </li>
                    <li className='pb-2'>
                        <a>
                            Team
                        </a>
                    </li>
                    <li className='pb-2'>
                        <a>
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>

            <div className='flex flex-col mx-8'>
                <p className='text-2xl pb-2'>Our Services</p>
                <div className='border border-gray-500 w-60'></div>
                <ul className='mt-4 text-gray-300'>
                    <li className='pb-2'>
                        <a>
                            Digital Branding
                        </a>
                    </li>
                    <li className='pb-2'>
                        Creative Solution
                    </li>
                    <li className='pb-2'>
                        <a>
                            Web Solution
                        </a>
                    </li>
                </ul>
            </div>

            <div className='flex flex-col mx-8'>
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

            <div className='flex flex-col mx-8'>
                <p className='text-2xl pb-2'>Location</p>
                <div className='border border-gray-500 w-60'></div>
                <ul className='mt-4 text-gray-300'>
                    <li className='pb-2'>352/71 Second Street</li>
                    <li className='pb-2'>King Street</li>
                    <li className='pb-2'>Kingston</li>
                    <li className='pb-2'>United Kingdom</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer