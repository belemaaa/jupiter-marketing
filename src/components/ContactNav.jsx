import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'
import {FaLinkedinIn} from 'react-icons/fa'

const ContactNav = () => {
  return (
    <div className='bg-blue-950 flex flex-row'>
        <div>
            <p className='text-white ml-60 text-sm py-4'>MON-SAT: 8:00AM - 8:00PM</p>
        </div>
        <div className='flex py-4 justify-end mr-10'>
            <FaFacebookF size={15} className='text-white'/>
            <IoLogoTwitter size={15} className='text-white'/>
            <FaLinkedinIn size={15} className='text-white'/>
        </div>
    </div>
  )
}

export default ContactNav