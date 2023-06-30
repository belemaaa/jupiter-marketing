import React, {useState} from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'
import {FaLinkedinIn} from 'react-icons/fa'
import {MdOutlineEmail} from 'react-icons/md'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {FaTimes} from 'react-icons/fa'

const ContactNav = () => {

  const [nav, setNav] = useState(false)
  const navLinks=[
    {id:1, link:'Home'},
    {id:2, link:'About Us'},
    {id:3, link:'Services'},
    {id:4, link:'Project'},
    {id:5, link:'Team'},
    {id:6, link:'Contact Us'},
  ]
 
  return (
    <div className='flex bg-gray-700 flex-row items-center justify-between w-screen overflow-hidden transition-all'>

      <div>
        <p className='text-white font-semibold text-sm md:text-sm py-4 md:py-3 ml-4 md:ml-72
        '>MON - SAT: 8:00AM - 8:00PM</p>
      </div>
      <div className='flex mb-1 md:mb-0 py-3 items-end justify-end mr-3 ml-12 md:ml-0 md:mr-72'>
          <FaFacebookF size={15} className='text-white mr-2 md:mr-3'/>
          <IoLogoTwitter size={15} className='text-white mr-2 md:mx-3'/>
          <FaLinkedinIn size={15} className='text-white mr-2 md:mx-3'/>
          <MdOutlineEmail size={19} className='text-white md:mx-3 pt-1 md:pt-0'/>
      </div>

      <div onClick={() => setNav(!nav)} className='md:hidden text-white mr-2 z-10 duration-500' >
        {nav ? <FaTimes size={25}/> : <BsThreeDotsVertical size={25}/>}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute w-3/4 h-3/4
         bg-white text-gray-700 top-12 right-0'>
          {navLinks.map(({id, link}) => (
            <li key={id} className='py-4 hover:border-b-4 border-b-gray-500 hover:scale-110
            duration-500'>
              <a className='px-1 cursor-pointer'>{link}</a>
            </li>
          ))}
        </ul>
      )}

    </div>
  )
}

export default ContactNav