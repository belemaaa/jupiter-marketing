import React from 'react'
import banner1 from '../assets/banner-images/banner1.jpg'
import banner2 from '../assets/banner-images/banner2.jpg'
import banner3 from '../assets/banner-images/banner3.jpg'
import banner4 from '../assets/banner-images/banner4.jpg'
import banner5 from '../assets/banner-images/banner5.jpg'

const IndexBody = () => {
  return (
    <div className='bg-black bg-opacity-10 w-screen overflow-hidden'>
        {/* <img src={banner5} className='w-full h-96 top-0'/> */}
        
        <div className='flex flex-col md:flex-row py-10 md:py-16 '>
            <div className='bg-gray-400 mb-8 md:mb-0 rounded-xl md:rounded-none px-4 py-10 mx-6 hover:scale-110 duration-500 shadow-xl'>
                <p className='text-3xl font-semibold'>Email Marketing</p>
                <p className='max-w-sm pt-3 text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam in laboriosam placeat, 
                    nobis enim necessitatibus temporibus et eligendi nisi
                </p>
            </div>

            <div className='mx-6 bg-black bg-opacity-10 mb-8 md:mb-0 rounded-xl md:rounded-none px-4 py-10 hover:scale-110 duration-500 shadow-xl'>
                <p className='text-3xl font-semibold'>Market Analysis</p>
                <p className='max-w-sm pt-3 text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam in laboriosam placeat, 
                    nobis enim necessitatibus temporibus et eligendi nisi
                </p>
            </div>

            <div className='mx-6 bg-gray-400 rounded-xl md:rounded-none px-4 py-10 hover:scale-110 duration-500 shadow-xl'>
                <p className='text-3xl font-semibold'>Keyword Research</p>
                <p className='max-w-sm pt-3 text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam in laboriosam placeat, 
                    nobis enim necessitatibus temporibus et eligendi nisi
                </p>
            </div>
        </div> 
    </div>
  )
}

export default IndexBody