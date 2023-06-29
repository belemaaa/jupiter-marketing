import React from 'react'
import {BsArrowRightCircle} from 'react-icons/bs'
import creativeSolutions from '../assets/creativeSolutions.jpg'
import digitalMarketing from '../assets/digitalMarketing.jpg'

const WhatWeDo = () => {
  return (
    <div className='flex flex-col mt-16 relative overflow-hidden'>
        <div className='flex items-center justify-center'>
            <p className='text-orange-700 text-3xl md:text-4xl font-bold mb-4 border-b border-b-gray-700 pb-3'>WHAT WE DO</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col md:flex-row pt-8 pb-3 mb-3'>   
                <img src={digitalMarketing} className='brightness-50 mr-8 hover:scale-110 duration-500 w-72 h-40'/>
                {/* <div className='absolute -top-80 left-52 bottom-0 flex items-center justify-center'>
                    <a className=' text-2xl text-white border-b-4 border-white font-semibold
                    flex flex-row'>
                        Digital Branding
                        <BsArrowRightCircle size={20} className='text-white mt-2 ml-2 hover:rotate-90 duration-200'/>
                    </a>
                </div> */}
                  
                <img src={creativeSolutions} className='brightness-50 mx-8 hover:scale-110 duration-500 w-72 h-40'/>
                {/* <div className='absolute -top-80 left-44 bottom-0 flex items-center justify-between'>
                    <a className=' text-2xl text-white border-b-4 border-white font-semibold
                    flex flex-row ml-96 pb-2'>
                        Creative Solution
                        <BsArrowRightCircle size={20} className='text-white mt-2 ml-2 hover:rotate-90 duration-200'/>
                    </a>
                </div> */}
                   
                <img src={creativeSolutions} className='brightness-50 ml-8 hover:scale-110 duration-500 w-72 h-40'/>
                {/* <div className='absolute -top-80 -right-24 left-60 bottom-0 flex items-center justify-center'>
                    <a className=' text-2xl text-white border-b-4 border-white font-semibold
                    flex flex-row ml-96 pb-2'>
                        Web Solution
                        <BsArrowRightCircle size={20} className='text-white mt-2 ml-2 hover:rotate-90 duration-200'/>
                    </a>
                </div> */}
            
            </div>


            <div className='flex flex-row pt-4 pb-5'>   
                <img src={creativeSolutions} className='brightness-50 hover:scale-110 duration-500 mr-8 w-72 h-40'/>
                {/* <div className='absolute top-24 left-52 bottom-0 flex items-center justify-center'>
                    <a className=' text-2xl text-white border-b-4 border-white font-semibold
                    flex flex-row pb-2'>
                        Marketing
                        <BsArrowRightCircle size={20} className='text-white mt-2 ml-2 hover:rotate-90 duration-200'/>
                    </a>
                </div> */}
            
                <img src={creativeSolutions} className='brightness-50 mx-8 hover:scale-110 duration-500 w-72 h-40'/>
                {/* <div className='absolute top-24 left-44 bottom-0 flex items-center justify-between'>
                    <a className=' text-2xl text-white border-b-4 border-white font-semibold
                    flex flex-row ml-96 pb-2'>
                        Paid Media
                        <BsArrowRightCircle size={20} className='text-white mt-2 ml-2 hover:rotate-90 duration-200'/>
                    </a>
                </div> */}
                
                <img src={creativeSolutions} className='brightness-50 ml-8 hover:scale-110 duration-500 w-72 h-40'/>
                {/* <div className='absolute top-24 -right-24 left-60 bottom-0 flex items-center justify-center'>
                    <a className=' text-2xl text-white border-b-4 border-white font-semibold
                    flex flex-row ml-96 pb-2'>
                        Data Science
                        <BsArrowRightCircle size={20} className='text-white mt-2 ml-2 hover:rotate-90 duration-200'/>
                    </a>
                </div> */}
                
            </div>
            
   
            <div className='flex flex-row pt-4 pb-5'>
                <img src={creativeSolutions} className='brightness-50 hover:scale-110 duration-500 mr-8 w-72 h-40'/>
                {/* <div className='absolute top-96 left-52 bottom-0 flex items-center justify-center'>
                    <a className=' text-2xl text-white border-b-4 border-white pb-2 font-semibold
                    flex flex-row'>
                        Management
                        <BsArrowRightCircle size={20} className='text-white mt-2 ml-2 hover:rotate-90 duration-200'/>
                    </a>
                </div> */}
                    
                <img src={creativeSolutions} className='brightness-50 mx-8 hover:scale-110 duration-500 w-72 h-40'/>
                {/* <div className='absolute top-96 left-44 bottom-0 flex items-center justify-between'>
                    <a className=' text-2xl text-white border-b-4 border-white pb-2 font-semibold
                    flex flex-row ml-96'>
                        Social Media
                        <BsArrowRightCircle size={20} className='text-white mt-2 ml-2 hover:rotate-90 duration-200'/>
                    </a>
                </div> */}
            
                <img src={creativeSolutions} className='brightness-50 ml-8 hover:scale-110 duration-500 w-72 h-40'/>
                {/* <div className='absolute top-96 -right-24 left-60 bottom-0 flex items-center justify-center'>
                    <a className=' text-2xl text-white border-b-4 border-white font-semibold
                    flex flex-row ml-96 pb-2'>
                        UI & UX Design
                        <BsArrowRightCircle size={20} className='text-white mt-2 ml-2 hover:rotate-90 duration-200'/>
                    </a>
                </div> */}
            
            </div> 
        </div>
    </div>
  )
}

export default WhatWeDo