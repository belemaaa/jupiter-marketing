import React from 'react'
import banner52 from '../assets/banner-images/banner52.jpg'
import banner1 from '../assets/banner-images/banner1.jpg'
import banner3 from '../assets/banner-images/banner3.jpg'
import {BsTelephoneFill} from 'react-icons/bs'

const Home = () => {
  return (
    <div className='w-screen overflow-hidden'>
        <img src={banner52} className=' w-screen md:h-96 md:brightness-50'/>

        <div className='absolute top-44 md:top-52 ml-5 md:ml-20'>
          <p className='md:font-thin text-white text-3xl md:text-6xl'>We Help You Grow</p>
          <p className='md:font-thin text-white text-3xl md:text-6xl pt-2'>Your Business</p>
          <p className='flex text-sm md:text-base text-white mt-4 md:mt-12 bg-gray-800 rounded-lg md:rounded-3xl
          w-fit py-2 md:py-4 px-1 md:px-4 md:ml-2
          hover:scale-110 duration-700'>
            Call
            <BsTelephoneFill size={18} className='text-gray-500 md:text-white ml-1 md:ml-2 mr-1 md:mr-3'/>
            +44 123456789
            </p>
        </div>
    </div>
    
  )
}

export default Home