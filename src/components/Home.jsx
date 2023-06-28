import React from 'react'
import banner5 from '../assets/banner-images/banner5.jpg'
import banner1 from '../assets/banner-images/banner1.jpg'
import banner3 from '../assets/banner-images/banner3.jpg'
import {BsTelephoneFill} from 'react-icons/bs'

const Home = () => {
  return (
    <div className=''>
        <img src={banner5} className='mt-0 w-full h-96 brightness-50'/>

        <div className='absolute top-52 ml-20'>
          <p className='font-thin text-white text-6xl'>We Help You Grow</p>
          <p className='font-thin text-white text-6xl pt-2'>Your Business</p>
          <p>Call</p>
        </div>
    </div>
    
  )
}

export default Home