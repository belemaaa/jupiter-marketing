import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'
import {FaLinkedinIn} from 'react-icons/fa'
import {MdOutlineEmail} from 'react-icons/md'

const ContactNav = () => {
  return (
    <div className='flex bg-gray-700 flex-row items-center justify-between'>
        <div>
            <p className='text-white font-semibold text-xs md:text-sm py-3 ml-10 md:ml-72
            '>MON - SAT: 8:00AM - 8:00PM</p>
        </div>
        <div className='flex py-3 items-end justify-end mr-4 md:mr-72'>
            <FaFacebookF size={15} className='text-white mr-2 md:mr-3'/>
            <IoLogoTwitter size={15} className='text-white mr-2 md:mx-3'/>
            <FaLinkedinIn size={15} className='text-white mr-2 md:mx-3'/>
            <MdOutlineEmail size={19} className='text-white mr-2 md:mx-3 pt-1 md:pt-0'/>
        </div>
    </div>
  )
}

export default ContactNav