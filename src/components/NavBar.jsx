import React, {useState} from 'react'
import logo from '../assets/jupiter-logo.jpg'
import {BsCircle} from 'react-icons/bs'
import banner5 from '../assets/banner-images/banner5.jpg'
import AboutUs from './AboutUs'
import {Link} from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa'


const NavBar = () => {
    const [navServices, setNavServices] = useState(false)
    
    const toggleDropDown = () =>{
        setNavServices(true)
    }
    const closeDropDown = () => {
        setTimeout(() => {
            setNavServices(false)
        }, 1500)
    }

    const [nav, setNav] = useState(false)
    const navLinks1 = [
        {
            id:1, link:'Home', href:'/jupiter-marketing'
        },
        {
            id:2, link:'About Us', href:'/aboutUs'
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
    const services = [
        {
            id:1, link:'Digital Branding', href:'#'
        },
        {
            id:2, link:'Web Solution', href:'#'
        },
        {
            id:3, link:'Creative Solution', href:'#'
        }
    ]

  return (
    <div className='flex flex-row overflow-hidden bg-[#E62E64]'>
        <div className='my-4 ml-8 md:ml-24'>
                <img src={logo} className='w-52 '/>
        </div>

        <div className='hidden md:flex items-end justify-end flex-row ml-80 -mt-3 mb-4'>
            <ul className='flex items-end justify-end'>
                {navLinks1.map(({id, link, href}) => (
                    <li
                     key={id}
                     className='px-4 text-white text-lg font-bold cursor-pointer'>
                        <Link to={href} className='hover:bg-[#f88bc1] hover:bg-opacity-50
                        px-2 py-3 duration-500 visited:bg-[#f72a90]'>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className='cursor-pointer'>
                <span onMouseEnter={toggleDropDown} onMouseLeave={closeDropDown}
                className='text-white font-bold text-lg hover:bg-[#f88bc1] hover:bg-opacity-50 active:bg-[#f72a90]
                px-2 py-3 duration-500'>
                    Services
                </span>

                {navServices && (
                    <ul className='z-10 absolute mt-4 cursor-pointer ml-0 bg-[#E62E64] duration-500'>
                        {services.map(({id, link, href}) => (
                            <li key={id} className='block text-lg text-white font-bold'>
                                <Link to={href} className='px-5' style={{ lineHeight: "2.5" }}>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <ul className='flex items-end justify-end'>
                {navLinks2.map(({id, link, href}) => (
                    <li
                     key={id}
                     className='px-4 text-white font-bold text-lg cursor-pointer'>
                        <Link to={href} className='hover:bg-[#f88bc1] hover:bg-opacity-50 active:bg-[#f72a90]
                        px-2 py-3 duration-500'>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

        <div onClick={() => setNav(!nav)} 
        className='md:hidden ml-28 mt-8 text-white'>
            { nav ? <FaTimes size={25}/> : <FaBars size={25}/> }
        </div>

        {nav && (
            <ul className='md:hidden absolute left-0 top-20 bg-[#E62E64] w-full z-10'>
                <li className='text-white pl-12 py-2 cursor-pointer'>
                    <Link to='/jupiter-marketing'
                    className='py-2 pl-2 pr-60 hover:bg-[#f88bc1] hover:bg-opacity-50'>
                        Home
                    </Link>
                </li>

                <li className='text-white pl-12 py-2 cursor-pointer'>
                    <Link to='/aboutUs'
                    className='py-2 pl-2 pr-60 hover:bg-[#f88bc1] hover:bg-opacity-50'>
                        About Us
                    </Link>
                </li>

                <li className='text-white pl-12 py-2 cursor-pointer'>
                    <span onMouseEnter={toggleDropDown} onMouseLeave={closeDropDown}
                    className='py-2 pl-2 pr-60 hover:bg-[#f88bc1] hover:bg-opacity-50'>
                        Services
                    </span>
                    {navServices && (
                        <div className='w-full bg-[#E62E64]'>
                            <ul className='z-10 mt-2 cursor-pointer ml-0 bg-[#E62E64] duration-500 shadow-2xl'>
                                {services.map(({id, link, href}) => (
                                    <li key={id} className='block text-lg text-white font-bold'>
                                        <Link to={href} className='px-5' style={{ lineHeight: "2.5" }}>
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                                </ul>
                        </div>
                    )}
                </li>

                <li className='text-white pl-12 py-2 cursor-pointer'>
                    <Link to='/projects'
                    className='py-2 pl-2 pr-60 hover:bg-[#f88bc1] hover:bg-opacity-50'>
                        Projects
                    </Link>
                </li>

                <li className='text-white pl-12 py-2 cursor-pointer'>
                    <Link to='/team'
                    className='py-2 pl-2 pr-60 hover:bg-[#f88bc1] hover:bg-opacity-50'>
                        Team
                    </Link>
                </li>

                <li className='text-white pl-12 py-2 cursor-pointer'>
                    <Link to='/aboutUs'
                    className='py-2 pl-2 pr-60 hover:bg-[#f88bc1] hover:bg-opacity-50'>
                        Contact Us
                    </Link>
                </li>
            </ul>
        )}

        {/* <div className='hidden md:flex ml-80 items-end justify-end mt-2'>
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
        </div> */}
    </div>
  )
}

export default NavBar