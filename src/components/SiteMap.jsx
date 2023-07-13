import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import {PiDotOutlineFill} from 'react-icons/pi'
import { Link } from 'react-router-dom'

const SiteMap = () => {
  return (
    <div>
        <NavBar/>

        <div className='ml-4 my-16'>
            <div>
                <p className='text-4xl text-[#E5442A] font-bold'>
                    Site Map
                </p>
            </div>

            <div className='mt-2'>
                <div className='flex flex-row ml-2'>
                    <PiDotOutlineFill size={40} className='text-black -mt-1.5 mr-o.5'/>
                    <Link to='/jupiter-marketing'
                    className='text-[#7c706e] text-lg font-semibold'>
                        Home Page
                    </Link>
                </div>

                <div className='flex flex-row ml-2'>
                    <PiDotOutlineFill size={40} className='text-black -mt-1.5 mr-o.5'/>
                    <Link to='/aboutUs'
                    className='text-[#7c706e] text-lg font-semibold'>
                        About Us
                    </Link>
                </div>

                <div className='flex flex-row ml-2'>
                    <PiDotOutlineFill size={40} className='text-black -mt-1.5 mr-o.5'/>
                    <Link to='/team'
                    className='text-[#7c706e] text-lg font-semibold'>
                        Our Team
                    </Link>
                </div>

                <div className='flex flex-row ml-2'>
                    <PiDotOutlineFill size={40} className='text-black -mt-1.5 mr-o.5'/>
                    <Link to='/digital-branding'
                    className='text-[#7c706e] text-lg font-semibold'>
                        Digital Branding
                    </Link>
                </div>

                <div className='flex flex-row ml-2'>
                    <PiDotOutlineFill size={40} className='text-black -mt-1.5 mr-o.5'/>
                    <Link to='/web-solution'
                    className='text-[#7c706e] text-lg font-semibold'>
                        Web Solution
                    </Link>
                </div>

                <div className='flex flex-row ml-2'>
                    <PiDotOutlineFill size={40} className='text-black -mt-1.5 mr-o.5'/>
                    <Link to='/creative-solution'
                    className='text-[#7c706e] text-lg font-semibold'>
                        Creative Solution
                    </Link>
                </div>

                <div className='flex flex-row ml-2'>
                    <PiDotOutlineFill size={40} className='text-black -mt-1.5 mr-o.5'/>
                    <Link to='/projects'
                    className='text-[#7c706e] text-lg font-semibold'>
                        Our Projects
                    </Link>
                </div>

                <div className='flex flex-row ml-2'>
                    <PiDotOutlineFill size={40} className='text-black -mt-1.5 mr-o.5'/>
                    <Link to='/contact'
                    className='text-[#7c706e] text-lg font-semibold'>
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default SiteMap