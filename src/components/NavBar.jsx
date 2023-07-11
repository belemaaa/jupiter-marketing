import React, {useState} from 'react'
import logo from '../assets/jupiter-logo.jpg'
import {BsCircle} from 'react-icons/bs'
import banner5 from '../assets/banner-images/banner5.jpg'
import AboutUs from './AboutUs'
import {Link} from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa'


const NavBar = () => {
    const [nav, setNav] = useState(false)
    const navLinks1 = [
        {
            id:1, link:'Home', href:'/jupiter-marketing'
        },
        {
            id:2, link:'About Us', href:'/aboutUs'
        },
        {
            id:3, link:'Services', href:'/services'
        },
    ]
    const navLinks2 = [
        {
            id:1, link:'Projects', href:'/projects'
        },
        {
            id:2, link:'Team', href:'/team'
        },
        {
            id:3, link:'Contact Us', href:'/contact'
        }
    ]
    const navServices = [
        {
            id:1, link:'Digital Branding', href:''
        },
        {
            id:2, link:'Web Solution', href:''
        },
        {
            id:3, link:'Creative Solution', href:''
        }
    ]
  return (
    <div className='flex flex-col overflow-hidden bg-gray-100'>
        <div className='hidden md:flex items-end justify-end flex-row'>
            <ul className='flex items-end justify-end mt-5'>
                {navLinks1.map(({id, link, href}) => (
                    <li
                     key={id}
                     className='px-4 text-blue-500 cursor-pointer hover:text-blue-700'>
                        <Link to={href}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className='flex items-end justify-end mt-5 ml-16'>
                {navLinks2.map(({id, link, href}) => (
                    <li
                     key={id}
                     className='px-4 text-blue-500 cursor-pointer hover:text-blue-700'>
                        <Link to={href}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

        <div className='flex flex-row'>
            <div className='mt-4 md:mt-0 ml-4 md:ml-6'>
                <p className='text-5xl '>JUPITER</p>
                {/* <img src={logo} className='w-60 md:w-full'/> */}
            </div>

            <div onClick={() => setNav(!nav)} 
            className='md:hidden ml-40 mt-6'>
                { nav ? <FaTimes size={30}/> : <FaBars size={30}/> }
            </div>
            {nav && (
                <>
                <ul className='md:hidden absolute left-0 top-32 ml-4'>
                    {navLinks1.map(({id, link, href}) => (
                        <li key={id}
                        className='text-blue-500 py-2 cursor-pointer hover:text-blue-700'>
                            <Link to={href}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>

                <ul className='md:hidden absolute left-0 top-64 ml-8'>
                    {navServices.map(({id, link, href}) => (
                        <li 
                        key={id}
                        className='text-blue-500 underline cursor-pointer hover:text-blue-700'>
                            <Link to={href} className='flex flex-row'>
                                <BsCircle size={7} className='text-black mr-3 mt-2'/>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>

                <ul className='md:hidden absolute left-0 top-80 mt-6 ml-4'>
                    {navLinks2.map(({id, link, href}) => (
                        <li key={id}
                        className='text-blue-500 py-2 cursor-pointer hover:text-blue-700'>
                            <Link to={href}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
                </>
            )}

            <div className='hidden md:flex ml-80 items-end justify-end mt-2'>
                <ul className='ml-96'>
                    {navServices.map(({id, link, href}) => (
                        <li 
                        key={id}
                        className='text-blue-500 underline cursor-pointer hover:text-blue-700'>
                            <Link to={href} className='flex flex-row'>
                                <BsCircle size={7} className='text-black mr-3 mt-2'/>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default NavBar