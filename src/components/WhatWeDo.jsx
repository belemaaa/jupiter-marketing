import React from 'react'
import {BsArrowRightCircle} from 'react-icons/bs'
import creativeSolutions from '../assets/creativeSolutions.jpg'

const WhatWeDo = () => {
  return (
    <div className='flex flex-col mt-16 relative'>
        <div className='flex items-center justify-center'>
            <p className='text-orange-700 text-4xl font-bold mb-4'>WHAT WE DO</p>
        </div>

        <div className='flex flex-col items-center justify-center mx-8'>
            <div className='flex flex-row pt-12 pb-5'>
                <div className=''>
                    <img src={creativeSolutions} className='brightness-50 hover:scale-110 duration-500 mx-8 w-96 h-60'/>
                    <div className='absolute top-20 left-36 bottom-0 flex items-center justify-center'>
                        <a className=' text-2xl text-white border-b-4 border-white pb-3 font-semibold
                        flex flex-row'>
                            Digital Branding
                            <BsArrowRightCircle size={20} className='text-white mt-2 ml-2 hover:rotate-90 duration-200'/>
                        </a>
                    </div>
                </div>

                <div>
                    <img src={creativeSolutions} className='brightness-50 mx-8 hover:scale-110 duration-500 w-96 h-60'/>
                    <div className='absolute top-20 left-48 bottom-0 flex items-center justify-between'>
                        <a className=' text-2xl text-white border-b-4 border-white pb-3 font-semibold
                        flex flex-row ml-96'>
                            Digital Branding
                            <BsArrowRightCircle size={20} className='text-white mt-2 ml-2 hover:rotate-90 duration-200'/>
                        </a>
                    </div>
                </div>

                <div>
                    <img src={creativeSolutions} className='brightness-50 mx-8 hover:scale-110 duration-500 w-96 h-60'/>
                    <div className='absolute top-20 -right-24 left-96 bottom-0 flex items-center justify-center'>
                        <a className=' text-2xl text-white border-b-4 border-white pb-3 font-semibold
                        flex flex-row ml-96'>
                            Digital Branding
                            <BsArrowRightCircle size={20} className='text-white mt-2 ml-2 hover:rotate-90 duration-200'/>
                        </a>
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default WhatWeDo