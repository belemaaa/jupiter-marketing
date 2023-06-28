import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'
import {FaLinkedinIn} from 'react-icons/fa'

const ContactNav = () => {
  return (
    <div className='bg-gray-700 flex flex-row items-center justify-between'>
        <div>
            <p className='text-white text-sm py-3 ml-60'>MON-SAT: 8:00AM - 8:00PM</p>
        </div>
        <div className='flex py-3 items-end justify-end mr-60'>
            <FaFacebookF size={15} className='text-white mr-4'/>
            <IoLogoTwitter size={15} className='text-white mx-4'/>
            <FaLinkedinIn size={15} className='text-white mx-4'/>
        </div>
    </div>
  )
}

export default ContactNav