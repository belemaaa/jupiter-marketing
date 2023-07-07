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
            id:2, link:'About Us', href:'/about'
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
    <div className='flex flex-col overflow-hidden'>
        <div className='hidden md:flex items-end justify-end flex-row'>
            <ul className='flex items-end justify-end mt-5'>
                {navLinks1.map(({id, link, href}) => (
                    <li
                     key={id}
                     className='px-4 text-blue-500'>
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
                     className='px-4 text-blue-500'>
                        <Link to={href}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

        <div className='flex flex-row'>
            <div className='mt-4 md:mt-0 ml-4 md:ml-4'>
                <img src={logo} className='w-60 md:w-full'/>
            </div>

            <div onClick={() => setNav(!nav)} 
            className='md:hidden ml-32 mr-4 mt-8'>
                { nav ? <FaTimes size={30}/> : <FaBars size={30}/> }
            </div>
            {nav && (
                <>
                <ul className='md:hidden absolute left-0 top-32 ml-4'>
                    {navLinks1.map(({id, link, href}) => (
                        <li key={id}
                        className='text-blue-500 py-2'>
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
                        className='text-blue-500 underline'>
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
                        className='text-blue-500 py-2'>
                            <Link to={href}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
                </>
            )}

            <div className='hidden md:flex ml-72 items-end justify-end mt-4'>
                <ul className='ml-96'>
                    {navServices.map(({id, link, href}) => (
                        <li 
                        key={id}
                        className='text-blue-500 underline'>
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
        















    // <div className=' w-screen overflow-hidden'>
    //     <div className='flex'>
    //         <div className='flex justify-start'>
    //             <img src={logo} className='w-32 md:w-44 h-16 md:h-20 ml-10 mr-4 md:mr-0 md:ml-16 shadow-2xl mb-16 md:mb-2'/>
    //         </div>

    //         <div className='text-black'>
    //             <ul className='hidden md:flex mt-1 font-semibold'>
    //                 <li className='ml-10 md:mx-5 cursor-pointer hover:border-b-4 border-gray-500 pb-3 hover:scale-105 duration-200'>
    //                     <Link to="/jupiter-marketing">
    //                         Home
    //                     </Link>
    //                 </li>
    //                 <li className='mx-5 cursor-pointer hover:border-b-4 border-gray-500 pb-3 hover:scale-105 duration-200'>
    //                     <Link to="/aboutUs">
    //                         About Us
    //                     </Link>
    //                 </li>
    //                 <li className='mx-5 cursor-pointer hover:border-b-4 border-gray-500 pb-3 hover:scale-105 duration-200'>
    //                     <a href=''>
    //                         Services
    //                     </a>
    //                 </li>
    //                 <li className='mx-5 cursor-pointer hover:border-b-4 border-gray-500 pb-3 hover:scale-105 duration-200'>
    //                     <Link to='/projects'>
    //                         Project
    //                     </Link>
    //                 </li>
    //                 <li className='mx-5 cursor-pointer hover:border-b-4 border-gray-500 pb-3 hover:scale-105 duration-200'>
    //                     <Link to='/team'>
    //                         Team
    //                     </Link>
    //                 </li>
    //                 <li className='mx-5 cursor-pointer hover:border-b-4 border-gray-500 pb-3 hover:scale-105 duration-200'>
    //                     <Link to='/contact'>
    //                         Contact Us
    //                     </Link>
    //                 </li>
    //             </ul>
    //         </div>

    //         <div className='flex text-gray-600'>
    //             <div className='hidden md:flex border-l-4 ml-16 md:mt-2 md:mb-1 md:h-16 border-gray-500'></div>

    //             <ul className='-mt-14 md:mt-1 md:mr-10 mr-1'>
    //                 <li className='mb-0 ml-3 hover:underline cursor-pointer'>
    //                     <a href='' className='flex text-sm md:text-base hover:text-black hover:scale-105 duration-150'>
    //                         <BsCircle size={10} className='text-black font-bold mr-2 mt-1.5 md:mt-2'/>
    //                         Digital Branding
    //                     </a>
    //                 </li>
    //                 <li className='mb-0 ml-3 hover:underline cursor-pointer'>
    //                     <a href='' className='flex text-sm md:text-base hover:text-black hover:scale-105 duration-150'>
    //                         <BsCircle size={10} className='text-black font-bold mr-2 mt-1.5 md:mt-2'/>
    //                         Web Solution
    //                     </a>
    //                 </li>
    //                 <li className='ml-3 mb-2 md:mb-2 hover:underline cursor-pointer'>
    //                     <a href='' className='flex text-sm md:text-base hover:text-black hover:scale-105 duration-150'>
    //                         <BsCircle size={10} className='text-black font-bold mr-2 mt-1.5 md:mt-2'/> 
    //                         Creative Solution
    //                     </a>
    //                 </li>
    //             </ul>
    //         </div>
    //     </div>

    //     {/* <div className='border border-gray-500 mx-8 mt-5'></div> */}
    // </div>
  )
}

export default NavBar