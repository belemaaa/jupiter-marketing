import React from 'react'
import banner52 from '../assets/banner-images/banner52.jpg'
import banner1 from '../assets/banner-images/banner1.jpg'
import banner3 from '../assets/banner-images/banner3.jpg'
import {BsTelephoneFill} from 'react-icons/bs'

const Home = () => {
  return (
    <div className='w-screen overflow-hidden'>
        <img src={banner52} className='mt-0 w-screen h-96 brightness-50'/>

        <div className='absolute top-52 ml-20'>
          <p className='font-thin text-white text-6xl'>We Help You Grow</p>
          <p className='font-thin text-white text-6xl pt-2'>Your Business</p>
          <p className='flex text-white mt-12 bg-gray-800 rounded-3xl w-fit py-4 px-4 ml-2
          hover:scale-110 duration-700'>
            Call
            <BsTelephoneFill size={20} className='text-white ml-2 mr-3'/>
            +44 123456789
            </p>
        </div>
    </div>
    
  )
}

export default Home